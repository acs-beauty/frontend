import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL,
  isServer = typeof window === "undefined";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});