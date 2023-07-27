import { FC } from "react";
import Image from "next/image";

import NavLink from "../NavLink";
import { Container } from "../Common/Container.styled";
import { NavWrapper, NavList, NavItem, Button } from "./Navigation.styled";

const Navigation: FC = () => {
  return (
    <NavWrapper>
      <Container>
        <NavList>
          <li>
            <NavLink href={"/novelties"} text={"Новинки"} />
          </li>
          <NavItem>
            <NavLink href={"/care"} text={"Догляд"} />
            <Button>
              <Image
                src={"/icons/navigate_before.svg"}
                alt={"arrow-down"}
                width={32}
                height={32}
              />
            </Button>
          </NavItem>
          <NavItem>
            <NavLink href={"/makeup"} text={"Макіяж"} />
            <Button>
              <Image
                src={"/icons/navigate_before.svg"}
                alt={"arrow-down"}
                width={32}
                height={32}
              />
            </Button>
          </NavItem>
          <NavItem>
            <NavLink href={"/hair"} text={"Волосся"} />
            <Button>
              <Image
                src={"/icons/navigate_before.svg"}
                alt={"arrow-down"}
                width={32}
                height={32}
              />
            </Button>
          </NavItem>
          <NavItem>
            <NavLink href={"/body"} text={"Тіло"} />
            <Button>
              <Image
                src={"/icons/navigate_before.svg"}
                alt={"arrow-down"}
                width={32}
                height={32}
              />
            </Button>
          </NavItem>
          <NavItem>
            <NavLink href={"/accessories"} text={"Аксесуари"} />
            <Button>
              <Image
                src={"/icons/navigate_before.svg"}
                alt={"arrow-down"}
                width={32}
                height={32}
              />
            </Button>
          </NavItem>
          <li>
            <NavLink href={"/brands"} text={"Бренди"} />
          </li>
          <li>
            <NavLink href={"/discounts"} text={"Акції"} isDiscount/>
          </li>
        </NavList>
      </Container>
    </NavWrapper>
  );
};

export default Navigation;
