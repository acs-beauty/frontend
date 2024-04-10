import { IProduct } from "./IProduct"

export interface IResponseProduct {
  count: number
  rows: IProduct[]
}