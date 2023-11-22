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
import { IconWrapper } from "@/styles/commonStyles";
import SearchForm from "../../components/SearchForm";
import HeartIcon from "../icons/HeartIcon";
import CartIcon from "../icons/CartIcon";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";
import AccountIcon from "../icons/AccountIcon";
import { generateImageSizesString } from "@/helpers";

const Header: FC = () => {
  const { isTablet } = useScreen();

  const props = {
    width: isTablet ? "32" : "24",
    height: isTablet ? "32" : "24",
  };

  const imageSizes = generateImageSizesString("108px", "108px", "108px");

  return (
    <StyledHeader>
      <GridContainer>
        <ImageBox>
          <Image
            src="/icons/logo_header.svg"
            alt="логотип Acs beauty"
            fill
            style={{ objectFit: "cover" }}
            sizes={imageSizes}
          />
        </ImageBox>
        <MenuContainer>
          <BurgerMenuIcon {...props} />
        </MenuContainer>
        <IconsWrapper>
          <IconWrapper>
            <AccountIcon {...props} />
          </IconWrapper>
          <IconWrapper>
            <HeartIcon color="#575A57" opacity="1" {...props} />
          </IconWrapper>
          <IconWrapper>
            <CartIcon {...props} />
          </IconWrapper>
        </IconsWrapper>

        <SearchWrapper>
          <SearchForm />
        </SearchWrapper>
      </GridContainer>
    </StyledHeader>
  );
};

export default Header;
