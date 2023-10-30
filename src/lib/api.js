import axios from "axios";

const apiKey = "74ee08e8d5910ca41017ae5333229705";
const baseUrl = "https://api.themoviedb.org/3";

const apiAxios = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});
export default apiAxios;
