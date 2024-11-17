import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import fetchData from "../utils/fetchData";
import apiurl from "../apiurl/apiurl";
import putData from "../utils/putData";
import toast from "react-hot-toast";

const useAddNewAdmin = () => {
  const [Message, setMessage] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [IsAdminLoading, setIsAdminLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [adminUpdateSucces, setAdminUpdateSucces] = useState(false);

  //admin fetch
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // fetching data
  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsAdminLoading(true);
      setError(null);
      const url = `${apiurl.mainUrl}/admin/all`;
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
        setData(result?.message);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsAdminLoading(false);
      }
    };
    fetchDataFromApi();
  }, [adminUpdateSucces]);

  const handleOptionChange = (event) => {
    setAccountType(event.target.value);
  };
  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    if (password === cPassword) {
      const token = Cookies.get("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setIsLoading(true);
      try {
        const response = await axios.post(
          "https://backend.visamind.net/admin/create",
          {
            username: username.toLocaleLowerCase(),
            mobile,
            password,
            cPassword,
            accountType: accountType,
          },
          config
        );
        setMessage(response.data.message);
        e.target.reset();
        setIsLoading(false);
      } catch (error) {
        alert("Server error");
        setIsLoading(false);
      }
    } else {
      setMessage("Password doesn't match");
    }
  };
  const handleAdminUpdate = async (id, status) => {
    setIsLoading(true);
    setError(null);
    setAdminUpdateSucces(false);
    const token = Cookies.get("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${apiurl.mainUrl}/admin/statusChange`;
    const data = {
      id: id,
      status: status,
    };
    try {
      const result = await putData(url, data, config);
      if (
        result.message === "Forbidden!!" ||
        result.message === "Unauthorize!!"
      ) {
        Cookies.remove("token");
      }
      setAdminUpdateSucces(true);
      toast.success("Updated Successfully");

      if (result.status === "failed") {
        setError(result?.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    setUsername,
    mobile,
    setMobile,
    password,
    setPassword,
    cPassword,
    setCPassword,
    handleAddNewAdmin,
    Message,
    IsLoading,
    accountType,
    handleOptionChange,
    data,
    error,
    handleAdminUpdate,
    IsAdminLoading,
  };
};

export default useAddNewAdmin;
