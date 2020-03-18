import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://192.168.100.149:80/"

  baseURL: "http://192.168.7.129:80/"
});
