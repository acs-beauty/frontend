import styled from "@emotion/styled"

export const CloseIconWrapper = styled.div`
  
  @media screen and (min-width: ${({ theme }) => parseInt(theme.desktop_1440, 10)}px) {
    display: none;
  }
`
export const FilterBlockWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 18px 24px;  
`
export const Title = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`
export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
`
export const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`
