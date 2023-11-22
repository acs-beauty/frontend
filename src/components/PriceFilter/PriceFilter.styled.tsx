import styled from "@emotion/styled";

export const Text = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    margin-bottom: 16px;
    font-size: 2.4rem;
    font-weight: 500;   
    letter-spacing: 0.72px;
    color: ${({ theme }) => theme.colors.grey[300]};
  }
`;

export const Input = styled.input`
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 11.2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.grey[200]};
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.6px;
    color: ${({ theme }) => theme.colors.grey[300]};
  }
`;

export const InputWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    display: flex;
    gap: 4.4rem;
    margin-bottom: 1.6rem;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  height: 2.4rem;
`;

export const SliderInnerWrapper = styled.div`
  max-width: 26.6rem;
  position: absolute;
  height: 2.4rem;
`;

export const SliderInput = styled.input`
  position: absolute;
  width: 26.6rem;
  height: 2px;
  top: 2.7rem;
  background: transparent;
  pointer-events: none;
  appearance: none;
  opacity: 1;
  z-index: 3;
  padding: 0;
  &::-ms-track {
    appearance: none;
    background: transparent;
    width: 26.6rem;
    height: 2px;
    border: transparent;
  }

  &::-moz-range-track {
    appearance: none;
    width: 26.6rem;
    height: 2px;
    background: transparent;
    border: transparent;
  }

  &:focus::-webkit-slider-runnable-track {
    appearance: none;
    width: 26.6rem;
    height: 2px;
    background: transparent;
    border: transparent;
  }

  &::-ms-thumb {
    appearance: none;
    pointer-events: all;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: ${({ theme }) => theme.radii.md};
    border: 0 none;
    cursor: grab;
    background-color: transparent;
    top: 55%;
    transform: translate3d(0, -55%, 0);
    &:active {
      cursor: grabbing;
    }
  }

  &::-moz-range-thumb {
    appearance: none;
    pointer-events: all;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: ${({ theme }) => theme.radii.md};
    border: 0 none;
    cursor: grab;
    background-color: transparent;
    top: 55%;
    transform: translate3d(0, -50%, 0);

    &:active {
      cursor: grabbing;
    }
  }

  &::-webkit-slider-thumb {
    appearance: none;
    pointer-events: all;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: ${({ theme }) => theme.radii.md};
    border: 0 none;
    cursor: grab;
    background-color: transparent;
    top: 55%;
    transform: translate3d(0, -50%, 0);

    &:active {
      cursor: grabbing;
    }
  }
`;

export const ControlWrapper = styled.div`
  width: 24.2rem;
  position: absolute;
  top: 12rem;
  left: 1.2rem;
  height: 2.4rem;
`;

export const Control = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  position: absolute;
  background: ${({ theme }) => theme.colors.red[100]};
  top: 50%;
  margin-left: calc(2.4rem / -2);
  transform: translate3d(0, -50%, 0);
  z-index: 2;
`;

export const Rail = styled.div`
  position: absolute;
  width: 24.2rem;
  top: 50%;
  transform: translateY(-50%);
  height: 2px;
  background: ${({ theme }) => theme.colors.grey[100]};
`;

export const InnerRail = styled.div`
  position: absolute;
  height: 100%;
  background: ${({ theme }) => theme.colors.red[100]};
`;

export const PriceFilterWrapper = styled.div`
  position: relative;
`;
