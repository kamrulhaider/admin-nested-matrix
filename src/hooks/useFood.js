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
      setError(null);
      const url = `${apiurl.mainUrl}/food/all`;

      try {
        const result = await fetchData(url);
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

  return {
    foodData,
    error,
    isLoading,
    totalDataLength,
    totalPage,
  };
};

export default useFood;
