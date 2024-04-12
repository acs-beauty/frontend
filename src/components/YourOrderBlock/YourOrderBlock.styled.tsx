import styled from "@emotion/styled"

export const OrderBlockWrapper = styled.div`
  margin-top: 32px;
`
export const FlexDivYourOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const YourOrderText = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
`
export const FlexDivGoodsNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`
export const GoodsNumText = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 16px;
  font-weight: 500;
  line-height: 19.5px;
  cursor: pointer;
`
