import { faCheckCircle, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./Table";
import { Link } from "react-router-dom";

function ManageFood() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Dashboard Area */}
      <div className="flex-1 p-8">
        {/* Top Bar */}
        <div className="p-5 flex items-center justify-between">
          <h2 className="text-xl whitespace-nowrap font-bold text-gray-800">
            Manage Food &mdash; Total: 2344
          </h2>
          <div className="flex gap-2">
            <button className="bg-green-500 text-white p-1 px-1  rounded flex items-center space-x-1 hover:bg-green-600">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className="whitespace-nowrap">Set as Active</span>
            </button>

            <button className="bg-red-500 text-white p-1 px-1  rounded flex items-center space-x-1 hover:bg-red-600">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Set as Inactive</span>
            </button>

            <button className="bg-yellow-400 text-white p-1 px-1  rounded flex items-center space-x-1 hover:bg-yellow-500">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Unset Discount</span>
            </button>

            <button className="bg-blue-500 text-white p-1 px-1 rounded flex items-center space-x-1 hover:bg-blue-600">
              <FontAwesomeIcon icon={faCheckCircle} />

              <span>Set Discount</span>
            </button>
            <Link to={"/add-food"}>
              <button className="bg-teal-400 text-white p-1 px-1 rounded flex items-center space-x-1 hover:bg-teal-500">
                <FontAwesomeIcon icon={faPlusSquare} />
                <span>Add New</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-col items-center w-full space-x-3 p-2 bg-gray-100">
          <select className="px-4 py-2 outline-none border border-gray-300 rounded">
            <option>Today</option>
            <option>Yester Day</option>
            <option>Last 7 Day</option>
            <option>Last 30 Day</option>
          </select>

          {/* Item Type Dropdown */}
          <select className="px-4 py-2 border outline-none border-gray-300 rounded">
            <option>Item Type - All</option>
            <option>Food</option>
            <option>Drink</option>
          </select>

          {/* Order By Dropdown */}
          <select className="px-4 outline-none py-2 border border-gray-300 rounded">
            <option>Order By - Any</option>
            <option>Price</option>
            <option>Rating</option>
            {/* Add more options as needed */}
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search item name"
            className="px-4 py-2 border border-gray-300 rounded outline-none"
          />
        </div>
        <div className="grid grid-flow-col  items-center w-full space-x-3 p-4 bg-gray-100">
          {/* Status Dropdown */}
          <select className="px-4 py-2 outline-none border border-gray-300 rounded">
            <option>Status - Any</option>
            <option>Available</option>
            <option>Out of Stock</option>
          </select>

          {/* Restaurant Dropdown */}
          <select className="px-4 py-2 outline-none border border-gray-300 rounded">
            <option>--Select Restaurant--</option>
            <option>Restaurant A</option>
            <option>Restaurant B</option>
          </select>

          {/* Category Dropdown */}
          <select className="px-4 py-2 outline-none border border-gray-300 rounded">
            <option>--Select Category--</option>
            <option>Appetizers</option>
            <option>Main Course</option>
            <option>Desserts</option>
          </select>

          {/* Search Button */}
          <div>
            <button className="p-2 outline-none bg-gray-300 rounded hover:bg-gray-400">
              <span role="img" aria-label="search">
                🔍
              </span>
            </button>
          </div>
        </div>
        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
            <p className="text-3xl font-bold text-indigo-600 mt-4">1,500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              Active Projects
            </h2>
            <p className="text-3xl font-bold text-indigo-600 mt-4">45</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              Monthly Revenue
            </h2>
            <p className="text-3xl font-bold text-indigo-600 mt-4">$25,000</p>
          </div>
        </section>

        {/* Tables Section */}
        <Table />
      </div>
    </div>
  );
}

export default ManageFood;
