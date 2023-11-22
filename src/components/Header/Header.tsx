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
import HeartIcon from "../../UI/icons/HeartIcon";
import CartIcon from "../../UI/icons/CartIcon";
import BurgerMenuIcon from "../../UI/icons/BurgerMenuIcon";
import AccountIcon from "../../UI/icons/AccountIcon";

const Header: FC = () => {
  const { isTablet } = useScreen();
 
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
          <BurgerMenuIcon
            width={isTablet ? "32" : "24"}
            height={isTablet ? "32" : "24"}
          />
        </MenuContainer>
        <IconsWrapper>
          <div>
            <AccountIcon
              width={isTablet ? "32" : "24"}
              height={isTablet ? "32" : "24"}
            />
          </div>
          <div>
            <HeartIcon
              color="#575A57"
              opacity="1"
              width={isTablet ? "32" : "24"}
              height={isTablet ? "32" : "24"}
            />
          </div>
          <div>
            <CartIcon
              width={isTablet ? "32" : "24"}
              height={isTablet ? "32" : "24"}
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
