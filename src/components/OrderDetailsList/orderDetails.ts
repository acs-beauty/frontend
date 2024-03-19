import { StaticImageData } from "next/image"
import goodImg from "./Frame 357.png"

export interface IOrderDetail {
  id: number
  title: string
  photoUrl: StaticImageData
  vendor: string
  count: number
  total: number
}

export const orderDetails: IOrderDetail[] = [
  {
    id: 1,
    title: "Спрей-тонер з пантенолом Geek & Gorgeous Liquid Hydration 110 мл",
    photoUrl: goodImg,
    vendor: "1278GH",
    count: 1,
    total: 387,
  },
  {
    id: 2,
    title: "Спрей-тонер з пантенолом Geek & Gorgeous Liquid Hydration 110 мл",
    photoUrl: goodImg,
    vendor: "1278GH",
    count: 1,
    total: 387,
  },
  {
    id: 3,
    title: "Спрей-тонер з пантенолом Geek & Gorgeous Liquid Hydration 110 мл",
    photoUrl: goodImg,
    vendor: "1278GH",
    count: 1,
    total: 387,
  },
]
