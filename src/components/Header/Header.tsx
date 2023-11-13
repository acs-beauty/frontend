import { FC } from "react";
import Image from "next/image";

import { Container } from "../Common/Container.styled";
import { FlexContainer, StyledHeader, IconsWrapper, IconsContainer } from "./Header.styled";
import SearchForm from "../SearchForm";
import Heart from "../icons/Heart";

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer>
          <IconsContainer>
            <Image
              src={"/icons/menu.svg"}
              alt={"burger menu"}
              width={24}
              height={24}
            />
            <IconsWrapper>
              <div>
                <Image
                  src={"/icons/account.svg"}
                  alt={"user account"}
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <Heart color="#575A57" opacity="1" />
              </div>
              <div>
                <Image
                  src={"/icons/cart.svg"}
                  alt={"user account"}
                  width={24}
                  height={24}
                />
              </div>
            </IconsWrapper>
          </IconsContainer>
          <div>
            <SearchForm />
          </div>
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
