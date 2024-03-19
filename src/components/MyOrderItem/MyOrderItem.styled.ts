import styled from "@emotion/styled"

export const OrderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  margin-bottom: 20px;

  border: 1px solid #c1baba;
`
export const FlexDivSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const OrderItemText400 = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`
export const OrderItemText500 = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
`
export const OrderItemText600 = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
`
export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  width: 80px;
  align-self: flex-end;
`
export const FlexDivSpaceBetweenMb12 = styled(FlexDivSpaceBetween)`
  margin-bottom: 12px;
`
export const FlexDivSpaceBetweenMb9 = styled(FlexDivSpaceBetween)`
  margin-bottom: 9px;
`
export const OrderItemText400Mb12 = styled(OrderItemText400)`
  margin-bottom: 12px;
`
export const ColoredStatus = styled(OrderItemText600)<{ $status?: string }>`
  color: ${props => (props.$status === "Повернення" ? "red" : "green")};
`
