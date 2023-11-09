import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  background: #453e42;
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  width: 36rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 76.8rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 144rem;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 9.6rem 5.2rem 9.6rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    flex-direction: row;
    padding: 5.4rem 3.2rem 7.4rem 3.2rem;
    align-items: flex-start;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding: 5.4rem 19.2rem 7.4rem 19.1rem;
    align-items: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    order: 2;
    margin-top: 2.2rem;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: 6.3rem;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 10.5rem;
  height: 9.2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 16.7rem;
    height: 14.6rem;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-family: Montserrat;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.6px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 2rem;
    letter-spacing: normal;
  }
`;

export const StyledLink = styled.a`
  color: #fff;
  font-family: Montserrat;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 2rem;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    align-items: flex-start;
    gap: 1.6rem;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-bottom: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    order: 3;
    gap: 1.6rem;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 1.2rem;
  font-weight: 400;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 2rem;
  }
`;

export const ContactsLink = styled.a`
  color: #fff;
  font-family: Montserrat;
  font-size: 1.4rem;
  font-weight: 600;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 2rem;
    font-weight: 400;
  }
`;

export const IconsList = styled.ul`
  display: flex;
  gap: 2.4rem;
  margin-bottom: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
  }
`;

export const TabletIconsList = styled.ul`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: flex;
    gap: 2.4rem;
    margin-top: 0.4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 3.2rem;
  }
`;

export const IconWrapper = styled.div`
  width: 4.8rem;
  height: 4.8rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  gap: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    order: 1;
    align-items: flex-start;
    gap: 1.6rem;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 1.6rem;
    align-items: flex-start;
  }
`;
