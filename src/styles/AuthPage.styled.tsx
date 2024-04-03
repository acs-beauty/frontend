import { Theme, css } from "@emotion/react"
import styled from "@emotion/styled"

const AuthContainer = ({ theme }: { theme: Theme }) => css`
  width: 32.8rem;
  margin: auto;
  padding-top: 5.1rem;
  padding-bottom: 8rem;
  font-size: 1.4rem;

  @media screen and (min-width: ${theme.tablet_768}) {
    width: 70.4rem;
    padding-top: 6.3rem;
    padding-bottom: 10rem;
  }
  @media screen and (min-width: ${theme.desktop_1440}) {
    width: 63rem;
    padding-top: 12.3rem;
    padding-bottom: 16rem;
  }
`

export const SignUpContainer = styled.div`
  ${AuthContainer}
`

export const SignInContainer = styled.div`
  ${AuthContainer}

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    width: 41.4rem;
    & input {
      width: 41.4rem;
    }
    & > form > div {
      margin-bottom: 4rem;
    }
  }
`
export const Title = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  line-height: 1.219;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    font-size: 2.8rem;
  }
`
export const SignInGoogleAuthMarginAndAdjustFont = styled.div`
  margin-top: 1.2rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-top: 1.2rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    margin-top: 2rem;
    & span {
      font-size: 1.4rem;
    }
  }
`
export const SignUpGoogleAuthMargin = styled.div`
  margin-top: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    margin-top: 4rem;
  }

  & span {
    @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
      font-size: 1.6rem;
    }
  }
`
export const SignUpRedirectMargin = styled.div`
  margin-top: 3.2rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-top: 4rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    margin-top: 6.4rem;
  }
`
export const SignInRedirectMargin = styled.div`
  margin-top: 3.2rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-top: 4rem;
  }
`
