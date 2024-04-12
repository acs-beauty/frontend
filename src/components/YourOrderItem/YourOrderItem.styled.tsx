import styled from "@emotion/styled"

export const OrderItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
export const ImageWrapper = styled.div`
  margin-right: 16px;
  width: 100px;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
`
export const OrderItemTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 12px;
  font-weight: 500;
  line-height: 14.63px;
  margin-bottom: 12px;
`
export const OrderItemVendor = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
  margin-bottom: 12px;
`
export const OrderItemPrice = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 12px;
`
export const ChangeCountBtn = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #9e9e9e;
  border-radius: 4px;
  font-size: 20px;
  text-align: center;
  color: #656565;
`
export const ChangeCountBtnWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`
export const CountSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  color: #656565;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.5px;
`
