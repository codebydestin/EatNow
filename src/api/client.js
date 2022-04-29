import { create } from "apisauce";
import axios from "axios";
import Config from "react-native-config";

const client = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    Authorization: "Bearer " + Config.API_KEY,
  },
});

export default client;
