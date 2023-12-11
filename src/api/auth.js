import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authenticate = async (email, password) => {
  const response = await axios.post("http://192.168.1.23:5000/api/login", {
    email: email,
    password: password,
  });

  if (response.status == 200) {
    await AsyncStorage.setItem("token", response.data.access_token);

    return {
      access_token: response.data.access_token,
      email: response.data.user.email,
      id: response.data.user.id,
      name: response.data.user.name,
      password: response.data.user.password,
    };
  } else {
    return {
      status: 401,
    };
  }
};

const getCredentials = async () => {
  return await AsyncStorage.getItem("token");
};

export { authenticate, getCredentials };
