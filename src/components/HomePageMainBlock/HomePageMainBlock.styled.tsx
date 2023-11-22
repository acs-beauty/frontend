import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-bottom: 32.9rem;
`;

export const Title = styled.div`  
  font-size: 1.8rem;
  text-transform: uppercase;
  text-align: center;
  margin-top: 8rem;

  @media (min-width: 361px) {
    font-size: 2.8rem;
  }

  @media (min-width: 774px) {
    font-size: 3.6rem;
    margin-top: 12rem;
  }
`;

export const WrapCategory = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-inline: 2.4rem;
  margin-bottom: 2.4rem;

  @media (min-width: 774px) {
    flex-direction: row;
    margin-bottom: 3.6rem;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`

export const Figcaption = styled.div`
  font-size: 1.2rem;
  margin-top: 0.6rem;

  @media(min-width: 601px) {
    font-size: 1.8rem;
  }

  @media(min-width: 1200px) {
    font-size: 2.4rem;
    line-height: 3rem;
  }
`;

export const Figure = styled.div`
  margin-inline: 1rem;
  margin-bottom: 2rem;
`;

export const StyledSVG = styled.svg`
  width: 68px;
  height: 68px;

  @media(min-width: 361px) {
    width: 100%;
    height: 100%;
  }
`;
