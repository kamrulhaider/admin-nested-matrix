import axios from "axios";

const newPostDataImg = async (url, formData, config) => {
  try {
    const response = await axios.post(url, formData, config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export default newPostDataImg;
