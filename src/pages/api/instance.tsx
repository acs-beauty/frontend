import axios from "axios";

const { NEXT_PUBLIC_API_BASE_URL, NEXT_PUBLIC_API_AUTH_TOKEN } = process.env;

export const instance = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  config.headers!.authorization = `Bearer ${NEXT_PUBLIC_API_AUTH_TOKEN}`;
  return config;
});