export interface IProduct {
  id: number
  name: string
  article: string
  mainImageName: string
  price: number
  discountPrice: number | null
  quantityStatus: string
  novelty: boolean
  hit: boolean
  subcategoryId: number
  categoryLinkKey: string
  slug: string
}
