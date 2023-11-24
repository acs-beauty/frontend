import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  StyledFooter,
  FlexContainer,
  Title,
  StyledLink,
  LinkList,
  ContactWrapper,
  Text,
  ContactsLink,
  IconsList,
  ImageWrapper,
  FooterContainer,
  IconWrapper,
  InfoWrapper,
  ContactsList,
  TabletIconsList,
  ImageBox,
} from "./Footer.styled";
import { generateImageSizesString } from "@/helpers";

const Footer: FC = () => {
  const imageSizes = generateImageSizesString("105px", "167px", "167px");

  return (
    <StyledFooter>
      <FooterContainer>
        <FlexContainer>
          <ImageWrapper>
            <Link href={"/"}>
              <ImageBox>
                <Image
                  src="/images/logo.svg"
                  alt="логотип Acs beauty"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes={imageSizes}
                />
              </ImageBox>
            </Link>
          </ImageWrapper>
          <ContactWrapper>
            <Title>Зв`язок з нами</Title>
            <ContactsList>
              <li>
                <Text>ФОП Дуда О.С.</Text>
              </li>
              <li>
                <ContactsLink href="tel:+380661111111">
                  +38066 111 11 11
                </ContactsLink>
              </li>
              <li>
                <ContactsLink href="mailto:ascbeauty@gmail.com">
                  ascbeauty@gmail.com
                </ContactsLink>
              </li>
              <li>
                <Text>Щодня з 10:00 - 20:00</Text>
              </li>
            </ContactsList>
            <TabletIconsList>
              <li>
                <IconWrapper>
                  <Image
                    src="/icons/instagram.svg"
                    alt="instagram"
                    width={48}
                    height={48}
                  />
                </IconWrapper>
              </li>
              <li>
                <IconWrapper>
                  <Image
                    src="/icons/tictoc.svg"
                    alt="tweeter"
                    width={48}
                    height={48}
                  />
                </IconWrapper>
              </li>
            </TabletIconsList>
          </ContactWrapper>
          <IconsList>
            <li>
              <IconWrapper>
                <Image
                  src="/icons/instagram.svg"
                  alt="instagram"
                  width={48}
                  height={48}
                />
              </IconWrapper>
            </li>
            <li>
              <IconWrapper>
                <Image
                  src="/icons/tictoc.svg"
                  alt="tweeter"
                  width={48}
                  height={48}
                />
              </IconWrapper>
            </li>
          </IconsList>
          <InfoWrapper>
            <Title>Інформація</Title>
            <LinkList>
              <li>
                <Link href="/news" passHref legacyBehavior>
                  <StyledLink>Новини</StyledLink>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref legacyBehavior>
                  <StyledLink>Про нас</StyledLink>
                </Link>
              </li>
              <li>
                <Link href="/delivery" passHref legacyBehavior>
                  <StyledLink>Доставка і оплата</StyledLink>
                </Link>
              </li>
              <li>
                <Link href="/contacts" passHref legacyBehavior>
                  <StyledLink>Контактна інформація</StyledLink>
                </Link>
              </li>
              <li>
                <Link href="/terms" passHref legacyBehavior>
                  <StyledLink>Умови використання</StyledLink>
                </Link>
              </li>
            </LinkList>
          </InfoWrapper>
        </FlexContainer>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
