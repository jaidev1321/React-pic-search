import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 82db2a1179f4f71a43c7390e6fd4ff3bfbacfe73a6d0a56660956702440a414e"
  }
});
