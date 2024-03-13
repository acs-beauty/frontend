import styled from "@emotion/styled";

export const FilterBlockWrapper = styled.div`
width: 360px;
display: flex;
flex-direction: column;
/* align-items: center; */
  /* @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    display: flex;
    flex-direction: column;
    max-width: 30.5rem;
    height: 83.4rem;
    padding: 2rem 1.8rem;
    border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  } */
`;
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