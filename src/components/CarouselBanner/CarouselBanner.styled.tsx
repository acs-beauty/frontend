import styled from "@emotion/styled";

export const CarouselContainer = styled.div`
  /* Стилі для зовнішнього контейнера каруселі */
  position: relative;
`;

export const CarouselImage = styled.img`
  /* Стилі для зображення в каруселі */
  position: relative;
  width: 100%;
  height: 110%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.6rem;
  overflow: hidden;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -3.6rem;

  @media (min-width: 601px) {
    margin-top: -4.8rem;
  }

  @media (min-width: 774px) {
    margin-top: -5.4rem;
  }
`;

export const Dot = styled.div`
  /* Стилі для кружечків в каруселі */
  display: flex;
  width: 0.4rem;
  height: 0.4rem;
  background-color: #BEBEBE;
  border-radius: 50%;
  margin: 0.4rem; /* Додайте потрібний відступ між кружечками */
  cursor: pointer;
  z-index: 2;

  @media (min-width: 601px) {
    width: 0.6rem;
    height: 0.6rem;
    margin: 0.6rem;
  }

  @media (min-width: 774px) {
    width: 1.2rem;
    height: 1.2rem;
    margin: 1rem;
  }

  &.active {
    /* Стилі для активного кружечка */
    background-color: #FFFFFF; 
  }
`;



