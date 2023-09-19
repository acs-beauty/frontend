import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container } from "../Common/Container.styled";
import {
  StyledFooter,
  FlexContainer,
  Title,
  StyledLink,
  LinkList,
  ContactWrapper,
  Text,
  ContactsLink,
  IconsList
} from "./Footer.styled";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexContainer>
          <div>
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
          </div>
          <div>
            <Image
              src="/images/logo.png"
              alt="логотип Acs beauty"
              width={196}
              height={151}
            />
          </div>
          <div>
            <ContactWrapper>
              <Title>Зв`язок з нами</Title>
              <LinkList>
                <li>
                  <Text>ФОП Дуда О.С.</Text>
                </li>
                <li>
                  <ContactsLink href="">+38066 111 11 11</ContactsLink>
                </li>
                <li>
                  <ContactsLink href="">ascbeauty@gmail.com</ContactsLink>
                </li>
                <li>
                  <Text>Щодня з 10:00 - 20:00</Text>
                </li>
              </LinkList>
            </ContactWrapper>
            <IconsList>
              <li>
                <div>
                  <Image
                    src="/icons/instagram.svg"
                    alt="instagram"
                    width={48}
                    height={48}
                  />
                </div>
              </li>
              <li>
                <div>
                  <Image
                    src="/images/tweeter.png"
                    alt="tweeter"
                    width={48}
                    height={48}
                  />
                </div>
              </li>
            </IconsList>
          </div>
        </FlexContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
