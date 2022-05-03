import Config from "react-native-config";
import axios from "axios";

const client = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    Authorization: "Bearer " + Config.API_KEY,
    "Content-type": "application/json",
  },
});

export default client;
