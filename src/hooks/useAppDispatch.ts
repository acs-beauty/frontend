import { useDispatch } from "react-redux";
import { AppDispatchType } from "@/types/components";

export const useAppDispatch = () => useDispatch<AppDispatchType>();
