import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Select from "react-select";
import useCategory from "../../hooks/useCategory";
import Cookies from "js-cookie";
import apiurl from "../../apiurl/apiurl";

export default function AddFood() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    basePrice: "",
    minOrderQuantity: 1,
    image: null,
    categoryIds: [],
  });

  const { categoryData } = useCategory();
  const categoryOptions = categoryData.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const handleCategoryChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      categoryIds: selectedIds,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = new FormData();
    formPayload.append("image", formData.image);

    formPayload.append(
      "data",
      JSON.stringify({
        name: formData.name,
        description: formData.description,
        basePrice: Number(formData.basePrice),
        minOrderQuantity: Number(formData.minOrderQuantity),
        categoryIds: formData.categoryIds,
      })
    );
    const accessToken = Cookies.get("access_token");
    try {
      const response = await axios.post(
        `${apiurl.mainUrl}/food/create`,
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const result = response?.data;
      if (result.success) {
        toast.success("Food Created Successfully");
        navigate("/add-food");
      } else {
        toast.error("Failed to add food item. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Response error:", error.response.data);
        toast.error(
          error.response.data?.message || "Server error occurred. Try again."
        );
      } else if (error.request) {
        // No response received from server
        console.error("Request error:", error.request);
        toast.error("Network error. Please check your connection.");
      } else {
        // Something else went wrong
        console.error("Error:", error.message);
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add New Food Item
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="basePrice"
              className="block text-sm font-medium text-gray-600"
            >
              Base Price ($)
            </label>
            <input
              type="number"
              id="basePrice"
              name="basePrice"
              value={formData.basePrice}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="minOrderQuantity"
              className="block text-sm font-medium text-gray-600"
            >
              Min Order Quantity
            </label>
            <input
              type="number"
              id="minOrderQuantity"
              name="minOrderQuantity"
              value={formData.minOrderQuantity}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="1"
              required
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-3">
            <label
              htmlFor="categories"
              className="block text-sm font-medium text-gray-600"
            >
              Categories
            </label>
            <Select
              isMulti
              options={categoryOptions}
              onChange={handleCategoryChange}
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => navigate(-1)}
            name={"Cancel"}
            type="button"
            className="w-full py-3 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 font-semibold"
          ></Button>
          <Button
            type="submit"
            name={isSubmitting ? "Adding..." : "Add Food"}
            className="w-full py-3 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-semibold"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}
