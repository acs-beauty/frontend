import styled from "@emotion/styled";

export const Text = styled.p`
 margin-bottom: 16px;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.72px;
    color: #5A5757;
  
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: 0.72px;
    color: #5A5757;
  }
`;

export const Input = styled.input`
    padding: 1.5rem 2.7rem;
    text-align: center;
    border: 1px solid #C1BABA;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.6px;
    color: #5A5757;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  
  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    width: 11.2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
    border: 1px solid #C1BABA;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.6px;
    color: #5A5757;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const InputWrapper = styled.div`
display: flex;
gap: 4.4rem;
    margin-bottom: 1.6rem;
`;

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  height: 2.4rem;
`;

export const SliderInnerWrapper = styled.div`
  max-width: 90%;
  position: absolute;
  height: 2.4rem;
`;

export const SliderInput = styled.input`
  position: absolute;
  width: 100%;
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
  width: 90%;
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
  background: #F4DCE3;
  top: 50%;
  margin-left: calc(2.4rem / -2);
  transform: translate3d(0, -50%, 0);
  z-index: 2;
`;

export const Rail = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  height: 2px;
  background: #D9D9D9;
`;

export const InnerRail = styled.div`
  position: absolute;
  height: 100%;
  background: #F4DCE3;
`;

export const PriceFilterWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;
