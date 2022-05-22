// this file is for api configuration
import axios from "axios";
const mockApi = axios.create({
  baseURL: "https://627796e22f94a1d7061016b2.mockapi.io/api/v1/",
});

export default mockApi;
