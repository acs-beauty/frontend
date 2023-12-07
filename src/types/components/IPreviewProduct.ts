export interface IPreviewProduct {
  productId: number;
  titleName: string;
  article: string;
  mainImageName: string;
  price: string;
  discountPrice: string | null;
  quantityStatus: string;
  novelty: boolean;
  hit: boolean;
  subcategoryLinkKey: string;
  categoryLinkKey: string;
}
