const fetchData = async (url, config) => {
  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Network failed: ${error.message}`);
  }
};

export default fetchData;
