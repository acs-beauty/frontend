import { FC, useRef, useState } from "react"

import FilterBlock from "../FilterBlock"
import SubcategoriesList from "../SubcategoriesList"
import SortingSelect from "../SortingSelect"
import PageSelect from "../PageSelect"
import ProductGallery from "../ProductGallery"
import { ICategoryData } from "@/types/components"
import FilterIcon from "@/UI/icons/FilterIcon/"
import { allProducts } from "@/data/products"
import { Container } from "@/styles/commonStyles"
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon"
import CloseSubMenuIcon from "@/UI/icons/CloseSubMenuIcon"
import { sortOptions } from "./menuOptions"
import ModalPortal from "@/components/ModalPortal"

import {
  BlockWrapper,
  ContainerMenuSort,
  Text,
  ContainerText,
  Li,
  MenuWrapper,
  MenuText,
  MenuContainer,
  Wrapper,
  Button,
} from "./CategoryPageMainBlock.styled"

const CategoryPageMainBlock: FC<{ category: ICategoryData }> = ({ category }) => {
  const [sortMenuOpen, setSortMenuOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(sortOptions[0].label)
  const sortRef = useRef <HTMLDivElement>(null)

  const handleMenuItemClick = (label:string) => {
    setSelectedOption(label)
    setSortMenuOpen(false) 
  }

  const onMenuToggle = () => {
    setMenuOpen(prev => !prev)
  }

  const toggleSortMenu = () => {
   
    setSortMenuOpen(!sortMenuOpen)
  }
  console.log("category", category)
  return (
    <Wrapper>
      <Container>
        <BlockWrapper>
          <SubcategoriesList subcategories={category.subcategory} />

          {/* <FilterBlock minPrice={category.minPrice} maxPrice={category.maxPrice} /> */}
          <div>
            <MenuContainer>
              <Button type="button" onClick={onMenuToggle}>
                <FilterIcon width="24px" height="24px" />{" "}
              </Button>
              <ContainerText onClick={toggleSortMenu} ref={sortRef}>
                <Text>Cортувати: {selectedOption}</Text>
                <span >
                  
                  {sortMenuOpen ? <CloseSubMenuIcon /> : <OpenSubMenuIcon />}
                </span>
              </ContainerText>
              {sortMenuOpen && (
                <ContainerMenuSort>
                  {sortOptions.map(option => (
                    <Li key={option.value}>
                      <MenuText onClick={() => handleMenuItemClick(option.label)}>
                        {option.label}
                      </MenuText>
                    </Li>
                  ))}
                </ContainerMenuSort>
              )}

              {/* <MenuWrapper>
                <MenuText>Cортувати: </MenuText>
                <SortingSelect categoryName={category.linkKey} />
              </MenuWrapper>
              <MenuWrapper>
                <MenuText>Товарів на сторінці: </MenuText>
                <PageSelect />
              </MenuWrapper> */}
            </MenuContainer>

            <FilterBlock minPrice={category.minPrice} maxPrice={category.maxPrice} />

            <ProductGallery {...allProducts} />
          </div>
        </BlockWrapper>
      </Container>
    </Wrapper>
  )
}

export default CategoryPageMainBlock
