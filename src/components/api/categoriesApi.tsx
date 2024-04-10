import { instance } from "./instance"

export const categoriesApi = {
  getCategories: () => instance.get("/category"),
}
