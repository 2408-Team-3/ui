import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getData = async () => {
  const { data } = await axios.get(`${baseUrl}/api/errors`);
  return data;
};

