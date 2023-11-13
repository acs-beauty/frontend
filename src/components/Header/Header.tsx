import { FC } from "react";
import Image from "next/image";

import { useScreen } from "@/hooks";
import {
  GridContainer,
  StyledHeader,
  IconsWrapper,
  MenuContainer,
  SearchWrapper,
  ImageBox,
} from "./Header.styled";
import SearchForm from "../SearchForm";
import Heart from "../icons/Heart";
import Cart from "../icons/Cart";
import BurgerMenu from "../icons/BurgerMenu";
import Account from "../icons/Account";

const Header: FC = () => {
  const { isMobile } = useScreen();
  return (
    <StyledHeader>
      <GridContainer>
        <ImageBox>
          <Image
            src="/icons/logo_header.svg"
            alt="логотип Acs beauty"
            fill
            style={{ objectFit: "cover" }}
            sizes="(min-width: 1440px) 108px"
          />
        </ImageBox>
        <MenuContainer>
          <BurgerMenu
            width={isMobile ? "24" : "32"}
            height={isMobile ? "24" : "32"}
          />
        </MenuContainer>
        <IconsWrapper>
          <div>
            <Account
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
            />
          </div>
          <div>
            <Heart
              color="#575A57"
              opacity="1"
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
            />
          </div>
          <div>
            <Cart
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
            />
          </div>
        </IconsWrapper>

        <SearchWrapper>
          <SearchForm />
        </SearchWrapper>
      </GridContainer>
    </StyledHeader>
  );
};

export default Header;
