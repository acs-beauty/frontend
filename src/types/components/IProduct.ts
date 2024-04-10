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
  subcategoryLinkKey: string
  categoryLinkKey: string
  slug: string
  productId?: number
  
  discount: 0,
  count: 0,
  
  createdAt: "2024-04-07",
  subcategoryName: string
  images: [
    {
      "url": "https://acs-beauty-bucket.s3.eu-north-1.amazonaws.com/product/images (4)c3b4.jpg"
    }
  ]
}
