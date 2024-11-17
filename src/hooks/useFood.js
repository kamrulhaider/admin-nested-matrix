import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import fetchData from "../utils/fetchData";
import deleteData from "../utils/deleteData";
import toast from "react-hot-toast";
import apiurl from "../apiurl/apiurl";

const useFood = () => {
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [totalDataLength, setTotalDataLength] = useState(0);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  // fetching data
  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      setError(null);
      const url = `${apiurl.mainUrl}/food/all`;
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
        setFoodData(result?.data);
        setTotalDataLength(result?.data);
        setTotalPage(Math.ceil(result?.data / 10));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataFromApi();
  }, [currentPage, deleteSuccess]);

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
        (currentPage > 0 && foodData.length === 1) ||
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
    foodData,
    error,
    isLoading,
    handleDelete,
    totalDataLength,
    totalPage,
  };
};

export default useFood;
