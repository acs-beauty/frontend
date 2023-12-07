import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateType } from "@/types/components";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
