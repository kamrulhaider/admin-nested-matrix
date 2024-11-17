import { useLocation } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import Cookies from "js-cookie";
import axios from "axios";

const UpdateFood = () => {
  const location = useLocation();
  const { foodItem } = location.state || {};

  //catagoryIds
  const categoryIds = foodItem?.categories
    ? foodItem.categories.map((category) => category.id)
    : [];

  const { categoryData } = useCategory();

  const [formData, setFormData] = useState({
    name: foodItem?.name || "",
    description: foodItem?.description || "",
    basePrice: foodItem?.basePrice || "",
    minOrderQuantity: foodItem?.minOrderQuantity || 1,
    image: foodItem?.foodImages?.[0]?.url || null,
    isPopular: foodItem?.isPopular || false,
    isRecommended: foodItem?.isRecommended || false,
    isNewArrival: foodItem?.isNewArrival || false,
    freeDelivery: foodItem?.freeDelivery || false,
    specialDeliveryFee: foodItem?.specialDeliveryFee || false,
    haveDiscount: foodItem?.haveDiscount || false,
    discountedPrice: foodItem?.discountedPrice || 0,
    offer: foodItem?.offer || "",
    topSnacks: foodItem?.topSnacks || false,
    dynamicHome: foodItem?.dynamicHome || false,
    trending: foodItem?.trending || false,
    isFree: foodItem?.isFree || false,
    isFeatured: foodItem?.isFeatured || false,
    expiryDate: foodItem?.expiryDate || null,
    availableStartTime: foodItem?.availableStartTime || null,
    availableEndTime: foodItem?.availableEndTime || null,
    trendingStartTime: foodItem?.trendingStartTime || null,
    trendingEndTime: foodItem?.trendingEndTime || null,
    categoryIds: categoryIds,
    branchIds: foodItem?.branchIds || [],
    campaignId: foodItem?.campaignId || "",
    updatedBy: foodItem?.updatedBy || "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "expiryDate") {
      const formattedExpiryDate = value ? `${value}T23:59:59Z` : null;
      setFormData((prev) => ({
        ...prev,
        [name]: formattedExpiryDate,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      isPopular: formData.isPopular,
      isRecommended: formData.isRecommended,
      isNewArrival: formData.isNewArrival,
      freeDelivery: formData.freeDelivery,
      specialDeliveryFee: formData.specialDeliveryFee,
      haveDiscount: formData.haveDiscount,
      discountedPrice: formData.discountedPrice,
      offer: formData.offer,
      topSnacks: formData.topSnacks,
      dynamicHome: formData.dynamicHome,
      trending: formData.trending,
      isFree: formData.isFree,
      isFeatured: formData.isFeatured,
      expiryDate: formData.expiryDate,
      availableStartTime: formData.availableStartTime,
      availableEndTime: formData.availableEndTime,
      trendingStartTime: formData.trendingStartTime,
      trendingEndTime: formData.trendingEndTime,
      categoryIds: formData.categoryIds,
      branchIds: formData.branchIds,
      campaignId: formData.campaignId,
      updatedBy: formData.updatedBy,
    };
    const accessToken = Cookies.get("access_token");

    try {
      const response = await axios.patch(
        `https://whale-app-qzs7t.ondigitalocean.app/api/v1/food/update/${foodItem.id}`,
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const result = response?.data;

      if (result.success) {
        toast.success("Food Updated Successfully");
        navigate("/manage-food");
      } else {
        toast.error("Failed to update food item. Please try again.");
      }
      navigate("/manage-food");
    } catch (error) {
      console.error("Error updating food item:", error);
      alert("There was an error updating the food item.");
    }
  };

  // Handle changes for array inputs like branchIds and categoryIds
  const handleArrayChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((id) => id !== value)
        : [...prev[name], value],
    }));
  };
  return (
    <div className="p-4  mx-auto bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Update Food Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Info */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 w-full items-center gap-3">
          <div>
            <label className="block font-bold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Base Price:</label>
            <input
              type="number"
              name="basePrice"
              value={formData.basePrice}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Discounted Price:</label>
            <input
              type="number"
              name="discountedPrice"
              value={formData.discountedPrice}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Minimum Order Quantity:</label>
            <input
              type="number"
              name="minOrderQuantity"
              value={formData.minOrderQuantity}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        </div>
        {/* Category and Branch IDs */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-bold">Category IDs:</label>
            {categoryData.map(({ id, name }) => (
              <label key={id} className="block">
                <input
                  type="checkbox"
                  checked={formData.categoryIds.includes(id)}
                  onChange={() => handleArrayChange("categoryIds", id)}
                />
                <span className="mx-3">{name}</span>
              </label>
            ))}
          </div>

          <div>
            <label className="block font-bold">Branch IDs:</label>
            {["branch1", "branch2", "branch3"].map((branch) => (
              <label key={branch} className="block">
                <input
                  type="checkbox"
                  checked={formData.branchIds.includes(branch)}
                  onChange={() => handleArrayChange("branchIds", branch)}
                />
                <span className="mx-3">{branch}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description  */}
        <div className="grid grid-cols-2 gap-3 items-center">
          <div>
            <label className="block font-bold">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          {/* Discount and Offer */}

          <div>
            <label className="block font-bold">Offer:</label>
            <input
              type="text"
              name="offer"
              value={formData.offer}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          {/* Flags */}
          <div>
            {[
              "isPopular",
              "isRecommended",
              "isNewArrival",
              "freeDelivery",
              "specialDeliveryFee",
              "haveDiscount",
              "topSnacks",
              "dynamicHome",
              "trending",
              "isFree",
              "isFeatured",
            ].map((field) => (
              <div key={field}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name={field}
                    checked={formData[field]}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {field
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
              </div>
            ))}
          </div>

          {/* Image */}
          <div>
            <label className="block font-bold text-center mb-3">
              Image URL:
            </label>
            <img src={formData.image} alt="Food" className="w-full " />
          </div>
        </div>

        {/* Availability */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 w-full items-center gap-3">
          <div>
            <label className="block font-bold">Available Start Time:</label>
            <input
              type="time"
              name="availableStartTime"
              value={formData.availableStartTime}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Available End Time:</label>
            <input
              type="time"
              name="availableEndTime"
              value={formData.availableEndTime}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          {/* Trending Time */}
          <div>
            <label className="block font-bold">Trending Start Time:</label>
            <input
              type="time"
              name="trendingStartTime"
              value={formData.trendingStartTime}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Trending End Time:</label>
            <input
              type="time"
              name="trendingEndTime"
              value={formData.trendingEndTime}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        </div>

        {/* Campaign and Update Data */}
        <div className="grid md:grid-cols-3 gap-5 items-center">
          <div>
            <label className="block font-bold">Expiring Time:</label>
            <input
              type="date"
              name="expiryDate"
              value={
                formData.expiryDate ? formData.expiryDate.split("T")[0] : ""
              }
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Campaign ID:</label>
            <input
              type="text"
              name="campaignId"
              value={formData.campaignId}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Updated By:</label>
            <input
              type="text"
              name="updatedBy"
              value={formData.updatedBy}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Food Item
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
