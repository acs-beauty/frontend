import { FC, useState } from "react";
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
import ModalPortal from "@/components/ModalPortal";
import BurgerMenu from "../BurgerMenu";
import HeartIcon from "../icons/HeartIcon";
import CartIcon from "../icons/CartIcon";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";
import CloseIcon from "../icons/CloseIcon";
import AccountIcon from "../icons/AccountIcon";
import { generateImageSizesString } from "@/helpers";
import { categories } from "@/data/categories";

const Header: FC = () => {
  const { isTablet } = useScreen();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const props = {
    width: isTablet ? "32" : "24",
    height: isTablet ? "32" : "24",
  };

  const imageSizes = generateImageSizesString("108px", "108px", "108px");

  const onMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
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
            <button onClick={onMenuToggle}>
              {isMenuOpen ? (
                <CloseIcon {...props} />
              ) : (
                <BurgerMenuIcon {...props} />
              )}
            </button>
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
      {isMenuOpen && (
        <ModalPortal onCloseMenu={onMenuToggle} isOpen={isMenuOpen}>
          <BurgerMenu categories={categories} />
        </ModalPortal>
      )}
    </>
  );
};

export default Header;
