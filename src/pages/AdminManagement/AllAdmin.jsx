import useAddNewAdmin from "../../hooks/useAddNewAdmin";
import UpdateAdmin from "./UpdateAdmin";

export default function AllAdmin() {
  const { data, error, IsAdminLoading, handleAdminUpdate } = useAddNewAdmin();

  const TABLE_HEAD = [
    "Index",
    "User Name",
    "Mobile Number",
    "Account Type",
    "Status",
    "Action",
  ];

  return (
    <div className="mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Admin and Moderator Management
      </h1>

      <div className="overflow-x-auto custom-scroll mx-2">
        <table className="w-full min-w-max table-auto text-left border">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, i) => (
                <th
                  key={i}
                  className="border font-bold leading-none opacity-70 border-blue-gray-100 bg-blue-gray-50 p-2"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          {IsAdminLoading ? (
            <tbody>
              <tr>
                <td colSpan={8} className="text-center">
                  <span className="loading loading-infinity loading-lg"></span>
                </td>
              </tr>
            </tbody>
          ) : error ? (
            <tbody>
              <tr>
                <td colSpan={8} className="text-center text-red-600">
                  {error}
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="align-text-top">
              {data?.length > 0 ? (
                <>
                  {data?.map((data, i) => {
                    return (
                      <tr key={i}>
                        <td className="p-2 align-middle border-b border-blue-gray-50 border-l-2 text-[14px]">
                          {i + 1}
                        </td>
                        <td className="p-2 align-middle border-b border-blue-gray-50 border-l-2 text-[14px]">
                          {data?.username}
                        </td>
                        <td className="p-2 align-middle border-b border-blue-gray-50 border-l-2 text-[14px]">
                          {data?.mobile}
                        </td>
                        <td className="p-2   border-b border-blue-gray-50 border-l-2 text-[14px]">
                          {data?.accountType}
                        </td>
                        <td className="p-2 align-middle border-b border-blue-gray-50 border-l-2 text-[14px]">
                          <p
                            className={`p-1 rounded-md text-white capitalize text-center ${
                              data?.status === "0"
                                ? "bg-green-600"
                                : "bg-red-600"
                            }`}
                          >
                            {data?.status === "0" ? "Active" : "Inactive"}
                          </p>
                        </td>
                        <td className=" p-2 align-middle border-b border-blue-gray-50 border-l-2 text-[14px]">
                          <UpdateAdmin
                            handleAdminUpdate={handleAdminUpdate}
                            data={data}
                            Id={data?._id}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <tr>
                  <td colSpan={8} className="text-center text-sm py-4">
                    There is no entry available.
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
