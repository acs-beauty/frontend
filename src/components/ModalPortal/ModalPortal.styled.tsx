import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  top: 8.6rem;
  left: 0;
  width: 100%; 
  height: calc(100% - 8.6rem);
  background-color: rgba(128, 128, 128, 0.3);  
  overflow-y: auto;
  z-index: 10;

  @media screen and (min-width: ${({ theme }) => theme.tablet_768}) {
    top: 14.8rem;
    height: calc(100% - 14.8rem);
  }
 
`;
