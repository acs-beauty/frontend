import styled from "@emotion/styled";

export const CarouselContainer = styled.div`
  /* Стилі для зовнішнього контейнера каруселі */
  position: relative;
`;

export const CarouselImage = styled.img`
  /* Стилі для зображення в каруселі */
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.6rem;
  overflow: hidden;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -6rem;
`;

export const Dot = styled.div`
  /* Стилі для кружечків в каруселі */
  display: flex;
  width: 1rem;
  height: 1rem;
  background-color: #BEBEBE;
  border-radius: 50%;
  margin: 1rem; /* Додайте потрібний відступ між кружечками */
  cursor: pointer;
  z-index: 2;

  &.active {
    /* Стилі для активного кружечка */
    background-color: #FFFFFF; 
  }
`;



