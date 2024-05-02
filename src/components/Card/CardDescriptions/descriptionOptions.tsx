import { Description } from "joi"

export const descriptionOptions: { label: string; value: "description" | "characteristic" | "reviews" }[] =
  [
    { label: "Опис", value: "description" },
    { label: "Характеристики", value: "characteristic" },
    { label: "Відгуки", value: "reviews" },
  ]
