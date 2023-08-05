import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 30.5rem;
    height: 23.9rem;
    margin-bottom: 0.4rem;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 30.5rem;
    height: 43.2rem;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 1.7rem 2.2rem 1.7rem;
`;

export const HeartContainer = styled.div`
  position: absolute;
  overflow: hidden;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 2.4rem;
    height: 2.4rem;
    top: 2rem;
    right: 2rem;
  }
`;

export const LabelWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
