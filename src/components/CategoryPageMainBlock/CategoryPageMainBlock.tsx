import { FC, useState, useRef } from "react"
import FilterBlock from "../FilterBlock"
import SubcategoriesList from "../SubcategoriesList"
import FilterIcon from "@/UI/icons/FilterIcon/"
import OpenSubMenuIcon from "@/UI/icons/OpenSubMenuIcon"
import CloseSubMenuIcon from "@/UI/icons/CloseSubMenuIcon"
import ProductGallery from "../ProductGallery"
import { ICategoryData } from "@/types/components"
import { allProducts } from "@/data/products"
import { Container } from "@/styles/commonStyles"
import { sortOptions, countOptions } from "./menuOptions"
import ModalPortal from "@/components/ModalPortal"
import SelectedElement from "../SelectedElement"

import {
  BlockWrapper,
  MenuContainer,
  Wrapper,
  Button,
  ContainerText,
  Text,
  ContainerMenuSort,
  ContainerMenuCount,
  Li,
  MenuText,
  FilterBlockWrapper,
  CountProductWrapper,
  FilterContainer,
  SortContainer,
  ProductContainer,
  SelectContainer,
} from "./CategoryPageMainBlock.styled"

const CategoryPageMainBlock: FC<{ category: ICategoryData, categoryId: number}> = ({ category, categoryId }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sortMenuOpen, setSortMenuOpen] = useState(false)
  const [countMenuOpen, setCountMenuOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(sortOptions[0].label)
  const [selectedCountOption, setSelectedCountOption] = useState(countOptions[0].label)
  const sortRef = useRef<HTMLDivElement>(null)

  const filterRef = useRef<HTMLDivElement>(null)

  const onMenuToggle = () => {
    setMenuOpen(prev => !prev)
  }

  const handleCloseModal = () => {
    setMenuOpen(false)
  }

  const handleMenuItemClick = (label: string) => {
    setSelectedOption(label)
    setSortMenuOpen(false)
  }
  const handleCountMenuItemClick = (label: "9" | "18" | "32" | "64" | "99") => {
    setSelectedCountOption(label)
    setCountMenuOpen(false)
  }
  const toggleSortMenu = () => {
    setSortMenuOpen(!sortMenuOpen)
  }
  const toggleCountMenu = () => {
    setCountMenuOpen(!countMenuOpen)
  }

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <Wrapper>
      <Container>
        <BlockWrapper>
          <SubcategoriesList subcategories={category.subcategory} categoryId={categoryId}/>

          <MenuContainer ref={sortRef}>
            <FilterContainer>
              <Button type="button" onClick={onMenuToggle}>
                <FilterIcon width="24px" height="24px" />
              </Button>
              <FilterBlockWrapper>
                <FilterBlock
                  minPrice={category.minPrice}
                  maxPrice={category.maxPrice}
                  subcategories={category.subcategory || []}
                  onCloseMenu={handleMenuToggle}
                />
              </FilterBlockWrapper>
            </FilterContainer>
            <SelectContainer>
              <SelectedElement />
            </SelectContainer>
            <SortContainer>
              <ContainerText onClick={toggleSortMenu}>
                <Text>Cортувати: {selectedOption}</Text>
                <span>{sortMenuOpen ? <CloseSubMenuIcon /> : <OpenSubMenuIcon />}</span>
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
            </SortContainer>
            <CountProductWrapper>
              <ContainerText onClick={toggleCountMenu}>
                <Text>Товарів на сторінці: : {selectedCountOption}</Text>
                <span>{countMenuOpen ? <CloseSubMenuIcon /> : <OpenSubMenuIcon />}</span>
              </ContainerText>
              {countMenuOpen && (
                <ContainerMenuCount>
                  {countOptions.map(option => (
                    <Li key={option.value}>
                      <MenuText onClick={() => handleCountMenuItemClick(option.label)}>
                        {option.label}
                      </MenuText>
                    </Li>
                  ))}
                </ContainerMenuCount>
              )}
            </CountProductWrapper>
            <ProductContainer>
              <ProductGallery {...allProducts} />
            </ProductContainer>
          </MenuContainer>
        </BlockWrapper>
      </Container>
      {menuOpen && (
        <ModalPortal onCloseMenu={handleCloseModal} isOpen={menuOpen}>
          <FilterBlock
            minPrice={category.minPrice}
            maxPrice={category.maxPrice}
            subcategories={category.subcategory || []}
            onCloseMenu={handleCloseModal}
          />
        </ModalPortal>
      )}
    </Wrapper>
  )
}

export default CategoryPageMainBlock
