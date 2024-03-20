import styled from "@emotion/styled"
import Image from "next/image"

export const DetailsWrapper = styled.div`
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid #c1baba;
`
export const GoodImg = styled(Image)`
  display: block;
  margin-right: 10px;
`
export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DetailsTitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.63px;
`
export const DetailsVendor = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
`
export const CountTotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CountText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
`
export const TotalText = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.4px;
`
