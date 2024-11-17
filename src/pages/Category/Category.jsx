import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCategory from "../../hooks/useCategory";
import Button from "../../components/Button/Button";
import AddCategroy from "./AddCategroy";
import UpdateCategory from "./UpdateCategory";

export default function Category() {
  const {
    categoryData,
    isLoading,
    handleCategoryCreate,
    handleCategoryUpdate,
  } = useCategory();

  const TABLE_HEAD = [
    "Index",
    "Name",
    "Description",
    // "SubCategories",
    "Status",
    "Action",
  ];
  return (
    <div className="mx-3">
      <div className="border border-t-2 mt-3 border-t-[#1D267D] mx-auto mb-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center p-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <p className="font-medium text-gray-800">Category List</p>
          </div>
          <div>
            <AddCategroy handleCategoryCreate={handleCategoryCreate} />
          </div>
        </div>
        <hr />

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
            {isLoading ? (
              <tbody>
                <tr>
                  <td colSpan={8} className="text-center">
                    <span className="loading loading-infinity loading-lg"></span>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="align-text-top">
                {categoryData?.length > 0 ? (
                  <>
                    {categoryData?.map((data, i) => (
                      <tr key={i}>
                        <td className="p-2 align-middle text-center border-b border-blue-gray-50 border-l-2 text-[14px]">
                          {i + 1}
                        </td>
                        <td className="p-2 align-middle text-center border-b border-blue-gray-50 border-l-2 text-[14px]">
                          {data?.name}
                        </td>
                        <td className="p-2 align-middle text-center border-b border-blue-gray-50 border-l-2 text-[14px]">
                          {data?.description || "N/A"}
                        </td>
                        {/* <td className="p-2 align-middle text-center border-b border-blue-gray-50 border-l-2 text-[14px]">
                          {data?.children?.length > 0 && (
                            <tr>
                              <td
                                colSpan={3}
                                className="p-2  border-blue-gray-50"
                              >
                                <div className="ml-6">
                                  <ul className="list-disc ml-4">
                                    {data.children.map((child, index) => (
                                      <li key={index} className="text-[14px]">
                                        <span className="font-medium">
                                          {child.name}
                                        </span>{" "}
                                        -{" "}
                                        {child.isActive ? "Active" : "Inactive"}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          )}
                        </td> */}
                        <td className="p-2 align-middle text-center border-b border-blue-gray-50 border-l-2 text-[14px]">
                          <p
                            className={`p-1 rounded-md text-white capitalize text-center ${
                              data?.isActive ? "bg-green-600" : "bg-red-600"
                            }`}
                          >
                            {data?.isActive ? "Active" : "Inactive"}
                          </p>
                        </td>
                        <td className="p-2 gap-4 align-middle border-b border-blue-gray-50 border-l-2 text-[14px]">
                          <Button
                            name={"View"}
                            className="bg-green-500 text-white px-2 py-1 mr-3  text-xs"
                          ></Button>
                          <UpdateCategory
                            handleCategoryUpdate={handleCategoryUpdate}
                            data={data}
                            Id={data?._id}
                          />

                          <Button
                            name={"Delete"}
                            className="bg-red-500 text-white px-2 py-1 ml-2  text-xs"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
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
    </div>
  );
}
