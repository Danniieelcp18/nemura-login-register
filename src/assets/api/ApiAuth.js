// Register
import { httpService } from "@/libs/https";

const { httpPost } = httpService();

const apiUrl = "api/v1/Users/"; // como van a ser los endopints

export function authRegisterApi() {

  const register = async (userCreate) => {
    let response = await httpPost(apiUrl + "RegisterUser", userCreate);
    console.log(response)
    return response;
  };

  const login = async (userConfirm) => {
    let response = await httpPost(apiUrl + "LoginUser", userConfirm);
    return response;
  };
  // const availableEmail = async (userCreate) => {
  //   let data = {
  //     email: userCreate,
  //   };
  //   let response = await httpPost(apiUrl + "AvailableEmail", data);
  //   return response;
  // };

  return {
    register,
    login
  };
}
