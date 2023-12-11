import axios from "axios";
import { getCredentials } from "./auth";

const getAllProducts = async () => {
  const response = await axios.get("http://192.168.1.23:5000/api/products", {
    headers: {
      Authorization: await getCredentials(),
    },
  });

  if (response.status == 200) {
    return {
      products: response.data.data,
    };
  } else {
    return {
      status: 401,
    };
  }
};

export { getAllProducts };
