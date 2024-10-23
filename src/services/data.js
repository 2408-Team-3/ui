import axios from "axios";

const baseUrl = "http://184.72.159.35:5000";

export const getData = async () => {
  const { data } = await axios.get(`${baseUrl}/api/errors`);
  return data;
};
