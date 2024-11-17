import axios from "axios";

const putDataImg = async (url, data, config) => {
  try {
    const response = await axios.put(url, data, config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export default putDataImg;
