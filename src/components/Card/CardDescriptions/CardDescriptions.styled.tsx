import styled from "@emotion/styled"

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const LiStyle = styled.li`
  display: grid;
`
export const ItemStyle = styled.p`
  margin-bottom: 12px;
  color: #5a5757;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 24px;
  }
`
export const BorderLine = styled.p`
  width: 33.3vw;
  border-bottom: 2px solid;
  margin-bottom: 16px;
`
