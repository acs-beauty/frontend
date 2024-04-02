import styled from "@emotion/styled"
export const StyledDropDownTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  h3 {
    font-size: 16px;
    font-weight: 500;
    //&:hover {
    //  color: #fb4994;
    //  font-weight: 500;
    //}
    @media (hover: hover) {
      &:hover {
        background-color: #0056b3;
      }
    }
    &:active {
      color: #5a5757;
      font-weight: 700;
    }
  }
`

export const StyledBlock = styled.div`
  font-size: 14px;
`
