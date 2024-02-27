import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/types/components";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
