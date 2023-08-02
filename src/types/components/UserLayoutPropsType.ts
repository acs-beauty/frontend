import { ReactNode } from "react";
import { ICategory } from ".";

export type UserLayoutPropsType = {
  title: string;
  children: ReactNode;
  categories: ICategory[];
};
