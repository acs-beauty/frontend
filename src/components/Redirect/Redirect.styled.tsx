import styled from "@emotion/styled"
import Link from "next/link"

export const RedirectWrapper = styled.p`
  font-size: 1.4rem;
  line-height: 1.219;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 1.6rem;
  }
`
export const LinkStyled = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey[300]};
  text-decoration: underline;
`

export const QuestionWrapper = styled(Link)`
  display: block;
  font-size: 1.2rem;
  line-height: 1.219;
  text-align: right;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-top: 0.2rem;
    font-size: 1.4rem;
  }
`
