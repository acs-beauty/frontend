import styled from "@emotion/styled"

export const TextDescription = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 18px;
  }
`
export const ItemDescription = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 18px;
  }
`
export const DescriptionWrapper = styled.div`
  margin-bottom: 12px;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 33px;
    margin-bottom: 22px;
  }
`
export const DescriptionContainer = styled.div`
  margin-bottom: 80px;
`
export const AuthorStyle = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`
export const ReviewStyle = styled.p`
  margin: 8px 0 12px 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 8px;
  }
`
export const ReviewWrapper = styled.div`
  margin-bottom: 32px;
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin: 40px 0 54px 0;
  }
`
export const LiStyle = styled.li`
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
