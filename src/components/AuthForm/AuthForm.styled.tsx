import EyeIcon from "@/UI/icons/EyeIcon"
import styled from "@emotion/styled"

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 1rem;
  margin: 3.2rem 0;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin: 5.6rem 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    margin: 6.4rem 0;
  }
`
export const Input = styled.input`
  width: 32.8rem;
  height: 5.6rem;
  padding: 1.6rem;
  line-height: 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.grey[200]};
  border-radius: 0.4rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 34.2rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    width: 30.5rem;
  }
`
export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 1.2rem;
`
export const Error = styled.span`
  display: block;
  height: 1.8rem;
  color: ${({ theme }) => theme.colors.red[200]};
`
export const SubmitButton = styled.button`
  width: 100%;
  padding: 1.6rem;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.white[100]};
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey[100] : theme.colors.grey[600]};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: 600;
  line-height: 1.219;
  font-size: 1.2rem;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop_1440}) {
    font-size: 2rem;
  }
`

export const EyeIconStyled = styled(EyeIcon)`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
`
