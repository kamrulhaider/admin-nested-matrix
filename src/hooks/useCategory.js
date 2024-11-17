import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import fetchData from "../utils/fetchData";
import deleteData from "../utils/deleteData";
import toast from "react-hot-toast";
import apiurl from "../apiurl/apiurl";
import postData from "../utils/postData";

const useCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [totalDataLength, setTotalDataLength] = useState(0);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  // fetching data
  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      setError(null);
      const url = `${apiurl.mainUrl}/food/category/all`;
      const token = Cookies.get("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const result = await fetchData(url, config);
        if (
          result.message === "Forbidden!!" ||
          result.message === "Unauthorize!!"
        ) {
          Cookies.remove("token");
        }
        setCategoryData(result?.data);
        setTotalDataLength(result?.data);
        setTotalPage(Math.ceil(result?.data / 10));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataFromApi();
  }, [currentPage, createSuccess, updateSuccess, deleteSuccess]);

  const handleCategoryCreate = async (mainCategory) => {
    setIsLoading(true);
    setError(null);
    setCreateSuccess(false);
    const token = Cookies.get("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${apiurl.mainUrl}/food/category/create`;

    // Conditionally include parentId only if it's provided
    const data = {
      mainCategory: mainCategory,
    };

    try {
      const result = await postData(url, data, config);
      if (
        result.message === "Forbidden!!" ||
        result.message === "Unauthorize!!"
      ) {
        Cookies.remove("token");
      }
      setCreateSuccess(true);
      toast.success("Category Created Successfully");
      if ((currentPage > 0 && data.length === 1) || currentPage >= totalPage) {
        setCurrentPage(currentPage - 1);
      }
      if (result.status === "failed") {
        setError(result?.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryUpdate = async (id, mainCategory) => {
    setIsLoading(true);
    setError(null);
    setUpdateSuccess(false);
    const token = Cookies.get("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${apiurl.mainUrl}/food/category/update`;

    // Conditionally include parentId only if it's provided
    const data = {
      id: id,
      mainCategory: mainCategory,
    };

    try {
      const result = await postData(url, data, config);
      if (
        result.message === "Forbidden!!" ||
        result.message === "Unauthorize!!"
      ) {
        Cookies.remove("token");
      }
      setCreateSuccess(true);
      toast.success("Category Updated Successfully");

      if (result.status === "failed") {
        setError(result?.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDelete = async (id) => {
    setIsLoading(true);
    setError(null);
    setDeleteSuccess(false);
    const token = Cookies.get("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${apiurl.mainUrl}/hotspot/deleteHotspot/${id}`;
    try {
      const result = await deleteData(url, config);
      if (
        result.message === "Forbidden!!" ||
        result.message === "Unauthorize!!"
      ) {
        Cookies.remove("token");
      }
      setDeleteSuccess(true);
      toast.success("Delete Successful");
      if (
        (currentPage > 0 && setCategoryData.length === 1) ||
        currentPage >= totalPage
      ) {
        setCurrentPage(currentPage - 1); // Set currentPage to its previous value
      }
      if (result.status === "failed") {
        setError(result?.message);
        setTimeout(() => setError(null), 3000);
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    categoryData,
    error,
    isLoading,
    handleCategoryCreate,
    handleDelete,
    totalDataLength,
    totalPage,
    handleCategoryUpdate,
  };
};

export default useCategory;
