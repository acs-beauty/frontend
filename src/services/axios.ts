import axios from "axios";
import 'dotenv/config';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_AUTH_TOKEN = process.env.NEXT_PUBLIC_API_AUTH_TOKEN;
console.log("API_AUTH_TOKEN", API_AUTH_TOKEN)
console.log("BASE_URL", BASE_URL)
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_AUTH_TOKEN}`, 
  },
});