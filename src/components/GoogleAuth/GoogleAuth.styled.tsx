import styled from "@emotion/styled"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 5.6rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.black[200]};
  border-radius: 0.4rem;
`
export const Text = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.219;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    font-size: 2rem;
  }
`
