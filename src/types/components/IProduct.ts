export interface IProduct {
  productId: string
  titleName: string
  article: string
  mainImageName: string
  price: number
  discountPrice: number | null
  quantityStatus: string
  novelty: boolean
  hit: boolean
  subcategoryLinkKey: string
  categoryLinkKey: string
  slug: string
}
