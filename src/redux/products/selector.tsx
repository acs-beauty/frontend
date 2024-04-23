import { IProduct } from "@/types/components"

export const selectIsLoading = (state: { products: { isLoading: boolean } }) => state.products.isLoading

export const selectIsError = (state: { products: { error: unknown | null } }) => state.products.error

export const selectProducts = (state: { products: { products: IProduct[] } }) => state.products.products

export const selectCount = (state: { products: { count: number } }) => state.products.count
