import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3185f6f97b424667b7161250fec04983",
  },
});
