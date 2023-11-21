import { FC } from "react";
import DeliveryBanner from "../DeliveryBanner";
import CarouselBanner from "../CarouselBanner";
import { Wrapper, Title, WrapCategory, Wrap, Figcaption, Figure, StyledSVG } from "./HomePageMainBlock.styled";

const imagePaths = ['./images/mainBanner.webp', './images/hairBanner.webp', './images/hairBanner.webp', './images/hairBanner.webp', './images/hairBanner.webp'];

const HomePageMainBlock: FC = () => {
  return (
    <Wrapper>
      {/* <DeliveryBanner /> */}
      <CarouselBanner images={imagePaths} />
      <Title>Популярні категорії</Title>
      <WrapCategory>
        <Wrap>
          <Figure>
            <StyledSVG viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="80" r="79.5" stroke="#453E42" />
              <path d="M95 102.8L91.4 101.8L92.4 105.4C88.8 108.6 84.6 110.6 80 110.6C75.6 110.6 71.4 108.6 67.6 105.4L68.6 101.8L65 102.8C58.4 95.6 54 84.4 54 75.8C54 70.6 55.6 65.6 58.4 61.4L64.8 63.2L63 56.4C67.6 52.4 73.6 50 80.2 50C86.8 50 92.8 52.4 97.4 56.4L95.6 63.2L102 61.4C104.8 65.6 106.4 70.4 106.4 75.8C106 84.4 101.8 95.4 95 102.8Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M69.1996 83.3999C72.8447 83.3999 75.7996 81.609 75.7996 79.3999C75.7996 77.1908 72.8447 75.3999 69.1996 75.3999C65.5546 75.3999 62.5996 77.1908 62.5996 79.3999C62.5996 81.609 65.5546 83.3999 69.1996 83.3999Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M90.9994 83.3999C94.6445 83.3999 97.5994 81.609 97.5994 79.3999C97.5994 77.1908 94.6445 75.3999 90.9994 75.3999C87.3543 75.3999 84.3994 77.1908 84.3994 79.3999C84.3994 81.609 87.3543 83.3999 90.9994 83.3999Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M80 99.2C83.3137 99.2 86 98.036 86 96.6C86 95.1641 83.3137 94 80 94C76.6863 94 74 95.1641 74 96.6C74 98.036 76.6863 99.2 80 99.2Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </StyledSVG>
            <Figcaption>Очищення</Figcaption>
          </Figure>
          <Figure>
            <StyledSVG viewBox="0 0 161 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80.5" cy="80" r="79.5" stroke="#453E42" />
              <path d="M92.1 74.6001H70.5V114.6H92.1V74.6001Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M89.2998 74.6H73.2998V67.6C73.2998 66.2 74.4998 65 75.8998 65H86.4998C87.8998 65 89.0999 66.2 89.0999 67.6V74.6H89.2998Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M87.0996 59H75.0996V65H87.0996V59Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M86.2998 59H76.2998V49C79.4998 51.6 82.8998 51.6 86.2998 49V59Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M81.3004 56.5998C82.0736 56.5998 82.7004 55.973 82.7004 55.1998C82.7004 54.4266 82.0736 53.7998 81.3004 53.7998C80.5272 53.7998 79.9004 54.4266 79.9004 55.1998C79.9004 55.973 80.5272 56.5998 81.3004 56.5998Z" fill="#453E42" />
              <path d="M85.5 80.3999V85.3999" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M85.5 91.6001V106.2" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </StyledSVG>
            <Figcaption>Сироватки та<br /> флюїди</Figcaption>
          </Figure>
          <Figure>
            <StyledSVG  viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="80" r="79.5" stroke="#453E42" />
              <path d="M94.4 104.2H66.6C61.4 104.2 57.2 100.2 57 94.9998L56 76.3998C56 75.9998 56.2 75.7998 56.6 75.7998H104C104.4 75.7998 104.6 75.9998 104.6 76.3998L103.6 94.9998C103.6 100.2 99.4 104.2 94.4 104.2Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M56 89H70" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M90 89H104" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M80.3996 95.7998C85.812 95.7998 90.1996 93.1135 90.1996 89.7998C90.1996 86.4861 85.812 83.7998 80.3996 83.7998C74.9872 83.7998 70.5996 86.4861 70.5996 89.7998C70.5996 93.1135 74.9872 95.7998 80.3996 95.7998Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M100.8 66.3999H60.4004V75.9999H100.8V66.3999Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M58.4004 71.1997H102.6" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M64.8004 66.4C64.8004 66.4 63.6004 56.4 74.4004 53C74.4004 53 79.0005 65.4 100.6 66.4" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M66.7998 58.6001C66.7998 58.6001 68.1999 61.2001 70.5999 61.8001" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </StyledSVG>
            <Figcaption>Креми <br /> для обличчя</Figcaption>
          </Figure>
        </Wrap>

        <Wrap>
          <Figure>
            <StyledSVG viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="80" r="79.5" stroke="#453E42" />
              <path d="M84.8174 104H76.8174V110.2H84.8174V104Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M81.0172 79.1999C85.1041 79.1999 88.4172 75.8868 88.4172 71.7999C88.4172 67.713 85.1041 64.3999 81.0172 64.3999C76.9302 64.3999 73.6172 67.713 73.6172 71.7999C73.6172 75.8868 76.9302 79.1999 81.0172 79.1999Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M91.8169 95.6H69.8169L66.0169 51.8C65.8169 49.8 67.4169 48 69.4169 48H92.2169C94.2169 48 95.817 49.8 95.617 51.8L91.8169 95.6Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M89 110.4H73C71.4 110.4 70 109 70 107.4V95.6001H92V107.4C91.8 109.2 90.6 110.4 89 110.4Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M66.417 55H81.217" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </StyledSVG>
            <Figcaption>Захист від <br />сонця SPF</Figcaption>
          </Figure>
          <Figure>
            <StyledSVG viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="80" r="79.5" stroke="#453E42" />
              <path d="M79.0108 104.7H61.6109L60.0108 73.6999C59.8108 70.4999 62.4109 67.8999 65.4109 67.8999H75.2108C78.4108 67.8999 80.8109 70.4999 80.6109 73.6999L79.0108 104.7Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M76.0113 60.1001H64.6113V68.1001H76.0113V60.1001Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M74.0107 96.3001H67.0107L65.0107 77.1001H75.8108L74.0107 96.3001Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M79.2109 101.3H99.2109V72.1002C99.2109 69.1002 96.811 66.7002 93.811 66.7002H85.2109C82.8109 66.7002 80.6109 68.3002 80.0109 70.7002" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M95.6108 66.7H83.0107V55.9C87.2107 54.7 91.4108 54.7 95.6108 55.9V66.7Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </StyledSVG>
            <Figcaption>Незмивний <br /> догляд</Figcaption>
          </Figure>
          <Figure>
            <StyledSVG viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="80" r="79.5" stroke="#453E42" />
              <path d="M105.2 72.3999C105.2 86.5999 93.8 97.9999 79.6 97.9999C65.4 97.9999 54 86.5999 54 72.3999H105.2Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M75 72.4V54.4C75 53 76.2 52 77.4 52H82.4C83.8 52 84.8 53.2 84.8 54.4V62.6C84.8 64 83.6 65 82.4 65C81 65 80 63.8 80 62.6V56.8" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M68.1998 95.3999L62.7998 107.4" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M90.7998 95.3999L96.1998 107.4" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M68.8004 66.3999H60.4004V72.3999H68.8004V66.3999Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M98.6002 66.3999H90.2002V72.3999H98.6002V66.3999Z" stroke="#453E42" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </StyledSVG>
            <Figcaption>Гігієна</Figcaption>
          </Figure>
        </Wrap>
      </WrapCategory>

      <Title>Бестселери</Title>

      <Title>Новинки</Title>

      <Title>Товари зі знижкою</Title>

    </Wrapper>
  );
};

export default HomePageMainBlock;
