import axios from "axios";

const createUser = async (email, password, name) => {
  const response = await axios.post("http://192.168.1.23:5000/api/user", {
    email,
    password,
    name,
  });

  if (response.status == 200) {
    return {
      status: 200,
    };
  } else {
    return {
      status: 401,
    };
  }
};

export { createUser };
