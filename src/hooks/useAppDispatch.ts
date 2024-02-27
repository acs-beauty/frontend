import { useDispatch } from "react-redux";
import { AppDispatch } from "@/types/components";

export const useAppDispatch = () => useDispatch<AppDispatch>();
