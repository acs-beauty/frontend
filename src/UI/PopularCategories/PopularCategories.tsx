import { FC } from "react";
import Link from "next/link";

import CleanCategoryIcon from "../icons/CleanCategoryIcon";
import FluidCategoryIcon from "../icons/FluidCategoryIcon";
import FaceCreamCategoryIcon from "../icons/FaceCreamCategoryIcon";
import SunProtectionCategoryIcon from "../icons/SunProtectionCategoryIcon";
import CareCategoryIcon from "../icons/CareCategoryIcon";
import HygieneCategoryIcon from "../icons/HygieneCategoryIcon";
import { useScreen } from "@/hooks";
import { SectionTitle, Container } from "@/styles/commonStyles";
import { Section, FlexContainer, List, StyledLink, Text } from "./PopularCategories.styled";

const PopularCategories: FC = () => {
  const { isTablet } = useScreen();

  const props = {
    width: isTablet ? "160" : "68",
    height: isTablet ? "160" : "68",
  };

  return (
    <Section>
      <Container>
        <SectionTitle>Популярні категорії</SectionTitle>
        <FlexContainer>
          <List>
            <li>
              <StyledLink href={"/test-category/test-subcategory"}>
                <CleanCategoryIcon {...props}/>
                <Text>Очищення</Text>
              </StyledLink>
            </li>
            <li>
              <StyledLink href={"/test-category/test-subcategory"}>
                <FluidCategoryIcon {...props}/>
                <Text>Сироватки та флюїди</Text>
              </StyledLink>
            </li>
            <li>
              <StyledLink href={"/test-category/test-subcategory"}>
                <FaceCreamCategoryIcon {...props}/>
                <Text>Креми для обличчя</Text>
              </StyledLink>
            </li>
          </List>
          <List>
            <li>
              <StyledLink href={"/test-category/test-subcategory"}>
                <SunProtectionCategoryIcon {...props}/>
                <Text>Захист від сонця SPF</Text>
              </StyledLink>
            </li>
            <li>
              <StyledLink href={"/test-category/test-subcategory"}>
                <CareCategoryIcon {...props}/>
                <Text>Незмивний догляд</Text>
              </StyledLink>
            </li>
            <li>
              <StyledLink href={"/test-category/test-subcategory"}>
                <HygieneCategoryIcon {...props}/>
                <Text>Гігієна</Text>
              </StyledLink>
            </li>
          </List>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default PopularCategories;
