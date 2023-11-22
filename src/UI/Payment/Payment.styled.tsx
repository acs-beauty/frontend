import styled from "@emotion/styled";

export const Text = styled.p`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 2rem;
  }
`;

export const Section = styled.div`
  min-width: 32rem;
  min-height: 14rem;
  background-color: #453e42;
  padding: 2.5rem 5rem 1.6rem 5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 70.4rem;
    min-height: 16.8rem;
    padding: 3rem 4.6rem 3.9rem 4.6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 128.2rem;
    min-height: 14.5rem;
    padding: 3rem 5.6rem 4rem 5.6rem;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 3.2px;
  text-transform: uppercase;
  letter-spacing: 1.8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 3.2rem;
    letter-spacing: 3.2px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 1.2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 1.2rem;
  }
`;
