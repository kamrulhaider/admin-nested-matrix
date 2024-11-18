import { faCheckCircle, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./Table";
import { Link } from "react-router-dom";

function ManageFood() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Dashboard Area */}
      <div className="flex-1 px-2">
        {/* Top Bar */}
        <div className="pt-3 flex items-center justify-between">
          <h2 className="text-lg whitespace-nowrap font-bold text-gray-800">
            Total Food &mdash; : 2344
          </h2>
          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-2 py-1 text-xs flex items-center space-x-1 hover:bg-green-600">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className="whitespace-nowrap">Set as Active</span>
            </button>

            <button className="bg-red-500 text-white px-2 py-1 text-xs flex items-center space-x-1 hover:bg-red-600">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Set as Inactive</span>
            </button>

            <button className="bg-yellow-500 text-white px-2 py-1 text-xs flex items-center space-x-1 hover:bg-yellow-600">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Unset Discount</span>
            </button>

            <button className="bg-blue-500 text-white px-2 py-1 text-xs flex items-center space-x-1 hover:bg-blue-600">
              <FontAwesomeIcon icon={faCheckCircle} />

              <span>Set Discount</span>
            </button>
            <Link to={"/add-food"}>
              <button className="bg-teal-500 text-white px-2 py-1 text-xs flex items-center space-x-1 hover:bg-teal-600">
                <FontAwesomeIcon icon={faPlusSquare} />
                <span>Add New</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-col items-center w-full bg-gray-100 gap-2 mt-2">
          <select className="px-2 py-1 outline-none border border-gray-300 rounded">
            <option>Today</option>
            <option>Yester Day</option>
            <option>Last 7 Day</option>
            <option>Last 30 Day</option>
          </select>

          {/* Item Type Dropdown */}
          <select className="px-2 py-1 outline-none border border-gray-300 rounded">
            <option>Item Type - All</option>
            <option>Food</option>
            <option>Drink</option>
          </select>

          {/* Order By Dropdown */}
          <select className="px-2 py-1 outline-none border border-gray-300 rounded">
            <option>Order By - Any</option>
            <option>Price</option>
            <option>Rating</option>
            {/* Add more options as needed */}
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search item name"
            className="px-2 py-1 outline-none border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-flow-col items-center w-full bg-gray-100 gap-2 my-2">
          {/* Status Dropdown */}
          <select className="px-2 py-1 outline-none border border-gray-300 rounded">
            <option>Status - Any</option>
            <option>Available</option>
            <option>Out of Stock</option>
          </select>

          {/* Restaurant Dropdown */}
          <select className="px-2 py-1 outline-none border border-gray-300 rounded">
            <option>--Select Restaurant--</option>
            <option>Restaurant A</option>
            <option>Restaurant B</option>
          </select>

          {/* Category Dropdown */}
          <select className="px-2 py-1 outline-none border border-gray-300 rounded">
            <option>--Select Category--</option>
            <option>Appetizers</option>
            <option>Main Course</option>
            <option>Desserts</option>
          </select>

          {/* Search Button */}
          <div>
            <button className="px-2 py-1 outline-none border border-gray-300 rounded">
              <span role="img" aria-label="search">
                🔍
              </span>
            </button>
          </div>
        </div>

        {/* Tables Section */}
        <Table />
      </div>
    </div>
  );
}

export default ManageFood;
