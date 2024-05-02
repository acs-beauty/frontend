import { FC } from "react";
import { AuthorStyle, ReviewStyle, ReviewWrapper, LiStyle } from "../SelectOption/SelectOption.styled"
import { IProduct } from "@/types/components"
import  StarIcon  from "@/Images/StarIcon";
import ReviewForm from "../ReviewForm"

const ReviewsSection: FC<({product: IProduct})> = ( {product}) => {

    return(
        <ReviewWrapper>
        <ul>
          {Array.isArray(product.reviews) &&
            product.reviews.map((review: { review: string, rating: number, id: number; firstName: string; lastName: string }) => (
              <LiStyle key={review.id}>
                <AuthorStyle>
                  {review.firstName} {review.lastName}
                </AuthorStyle>
                <div>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <StarIcon key={index} fill={index < review.rating ? "black" : "white"} />
                  ))}
                </div>                
                  <ReviewStyle>{review.review}</ReviewStyle>
              </LiStyle>
            ))}
        </ul>
        <ReviewForm/>
        </ReviewWrapper>
    )
}

export default ReviewsSection