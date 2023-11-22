import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 3.4rem;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 1.2rem;
  }
`;

export const Text = styled.p`
  color: #5a5757;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 1.8rem;
    letter-spacing: -0.1px;
  }
`;

