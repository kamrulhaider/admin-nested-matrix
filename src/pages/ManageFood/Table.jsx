import { faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFood from "../../hooks/useFood";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loader from "../../assets/loader.json";

const Table = () => {
  const { foodData, isLoading } = useFood();
  // State to track selected rows
  const [selectedRows, setSelectedRows] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  // Toggle select all
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newSelectedRows = {};
    if (newSelectAll) {
      foodData.forEach((_, index) => {
        newSelectedRows[index] = true;
      });
    }
    setSelectedRows(newSelectedRows);
  };
  // Toggle single row selection
  const handleRowSelect = (index) => {
    const newSelectedRows = { ...selectedRows, [index]: !selectedRows[index] };
    setSelectedRows(newSelectedRows);
    // Update selectAll if all rows are selected
    const allSelected = foodData.every((_, i) => newSelectedRows[i]);
    setSelectAll(allSelected);
  };
  const optionsList = [
    { key: "freeDelivery", label: "Free Delivery" },
    { key: "specialDeliveryFee", label: "Special Delivery Fee" },
    { key: "haveDiscount", label: "Discount Available" },
    { key: "topSnacks", label: "Top Snacks" },
    { key: "dynamicHome", label: "Dynamic Home" },
    { key: "trending", label: "Trending" },
    { key: "isFree", label: "Free Item" },
    { key: "isFeatured", label: "Featured" },
    { key: "isPopular", label: "Popular" },
    { key: "isRecommended", label: "Recommended" },
    { key: "isNewArrival", label: "New Arrival" },
  ];
  return (
    <>
      {isLoading ? (
        <Lottie
          style={{ height: "300px" }}
          animationData={loader}
          loop={true}
        />
      ) : (
        <div className="overflow-x-auto custom-scroll">
          <table className="w-full table-auto bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200">
                  <FontAwesomeIcon
                    icon={selectAll ? faCircleCheck : faCircle}
                    className={selectAll ? "text-green-600" : "text-gray-300"}
                    onClick={handleSelectAll}
                  />
                </th>
                <th className="border border-gray-200 text-xs text-nowrap px-2">
                  Product Info
                </th>
                <th className="border border-gray-200 text-xs text-nowrap px-2">
                  Total Order
                </th>
                <th className="border border-gray-200 text-xs text-nowrap px-2">
                  Options
                </th>
                <th className="border border-gray-200 text-xs text-nowrap px-2">
                  Status
                </th>
                <th className="border border-gray-200 text-xs text-nowrap px-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {foodData?.map((item, index) => (
                <tr key={index}>
                  <td className="p-1 border border-gray-200">
                    <FontAwesomeIcon
                      icon={selectedRows[index] ? faCircleCheck : faCircle}
                      className={
                        selectedRows[index]
                          ? "text-green-600 cursor-pointer"
                          : "text-gray-300 cursor-pointer"
                      }
                      onClick={() => handleRowSelect(index)}
                    />
                  </td>
                  <td className="p-1 border border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-20 h-20">
                        <img
                          className="object-cover w-full h-full"
                          src={item.foodImages?.[0]?.url}
                          alt="Food"
                        />
                      </div>
                      <div>
                        <span className="font-bold leading-none">
                          {item.name}
                        </span>
                        <p>Price: ${item.basePrice}</p>
                        <p className="w-[200px]">
                          Category:{" "}
                          {`${item.categories
                            .map((cat) => cat.name)
                            .join(", ")}` || "N/A"}
                        </p>
                        <p>Min Order Qty: {item.minOrderQuantity}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-1 text-center border border-gray-200">
                    {item.totalOrder || "0"}
                  </td>
                  <td className="p-1 border border-gray-200">
                    {optionsList.map((option, i) =>
                      item[option.key] ? (
                        <button
                          key={i}
                          className="bg-blue-500 text-white px-2 py-1 m-1 rounded-full text-xs inline-block"
                        >
                          {option.label}
                        </button>
                      ) : (
                        <button
                          key={i}
                          className="bg-red-500 text-white px-2 py-1 m-1 rounded-full text-xs inline-block"
                        >
                          {option.label}
                        </button>
                      )
                    )}
                  </td>
                  <td className="p-1 border border-gray-200 text-center">
                    <span
                      className={`${
                        item.isActive ? "text-green-500" : "text-red-500"
                      } font-bold`}
                    >
                      {item.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="p-1 border border-gray-200">
                    <div className="flex gap-1">
                      <Button
                        name={"View"}
                        className="bg-green-500 text-white px-2 py-1 rounded-full text-xs w-full"
                      />
                      <Link
                        className="w-full"
                        to={"/update-food"}
                        state={{ foodItem: item }}
                      >
                        <Button
                          name={"Edit"}
                          className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs"
                        />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
