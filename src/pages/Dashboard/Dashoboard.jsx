import RoleWiseUser from "./Charts/RoleWiseUser";

export default function Dashoboard() {
  return (
    <>
      <div className="grid lg:grid-flow-col gap-3  bg-gray-50 lg:p-6 rounded-lg">
        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                className="w-8 h-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5S11.173 8 12 8zm-4 5c1.333 0 2.667 0 4 0 1.333 0 2.667 0 4 0M4 12v4m16-4v4m-6-5c.928-.073 1.864.073 2.75.39"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">Total Sale</p>
              <p className="text-2xl font-bold text-blue-600">$2354</p>
              <p className="text-sm text-orange-500">⬇ 47% last week</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                className="w-8 h-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-5l-4 4-4-4H5a2 2 0 01-2-2V3z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">Visitors</p>
              <p className="text-2xl font-bold text-blue-600">5460</p>
              <p className="text-sm text-orange-500">⬇ 29% last week</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                className="w-8 h-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11l7-7m0 0l7 7M5 11v10a2 2 0 002 2h10a2 2 0 002-2V11M7 11V9m10 2V9m-5 5V9"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">New Orders</p>
              <p className="text-2xl font-bold text-blue-600">1600</p>
              <p className="text-sm text-orange-500">⬆ 78% last week</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                className="w-8 h-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.318 18H10.5a4.5 4.5 0 01-4.5-4.5V7.5a4.5 4.5 0 014.5-4.5h4.5a4.5 4.5 0 014.5 4.5v6.5a4.5 4.5 0 01-4.5 4.5H9l-1.5 3v1h7l-1.182-2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">Customers</p>
              <p className="text-2xl font-bold text-blue-600">4300</p>
              <p className="text-sm text-orange-500">⬆ 89% last week</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-flow-col gap-3 bg-gray-50 p-6 rounded-lg">
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold">Card Details</h3>
          <p className="text-gray-500 mt-2">
            Integer at faucibus urna. Nullam condimentum leo.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <div className="relative w-32 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-4 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg transform -translate-x-2 translate-y-2"></div>
              <div className="relative">
                <p className="text-white text-sm">Bank Name</p>
                <p className="text-white text-sm">•••• •••• •••• 2423</p>
                <p className="text-white text-xs mt-2">
                  Card Holder:{" "}
                  <span className="font-semibold">Kamrul Haider Chowdhury</span>
                </p>
              </div>
            </div>
            {/* <!-- Expenses Legend --> */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <p className="text-gray-600">
                  Account - <span className="text-gray-500">25%</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <p className="text-gray-600">
                  Services - <span className="text-gray-500">18%</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <p className="text-gray-600">
                  Restaurant - <span className="text-gray-500">17%</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                <p className="text-gray-600">
                  Electricity Bills -{" "}
                  <span className="text-gray-500">12.5%</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <p className="text-gray-600">
                  Foods - <span className="text-gray-500">12.5%</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <p className="text-gray-600">
                  Others - <span className="text-gray-500">12.5%</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Report Section --> */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Report</h3>
            <div className="flex space-x-4 text-gray-500">
              <p className="cursor-pointer text-blue-500 font-medium">Report</p>
              <p className="cursor-pointer">Activity</p>
              <p className="cursor-pointer">Bills</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <RoleWiseUser />
          </div>
        </div>

        {/* <!-- Efficiency Section --> */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold">Efficiency</h3>
          <p className="text-gray-500 mt-2">
            Total Income{" "}
            <span className="text-blue-600 font-semibold">$52,345</span>
          </p>
          <div className="flex justify-center items-center mt-8">
            {/* <!-- Circular Graph Placeholder --> */}
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-30"></div>
              <div className="absolute inset-0 flex justify-center items-center text-blue-600 text-lg font-semibold">
                $5363
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-gray-500">
            <p className="text-green-500">⬆ Earned</p>
            <p className="text-blue-500">⬇ Spend</p>
          </div>
        </div>
      </div>
    </>
  );
}
