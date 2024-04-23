import React, { ReactNode} from "react";
import Link from "next/link"
import { ContainerLink, SpanStyle } from "./LinkRoute.styled"

const LinkRoute: React.FC<{ children: ReactNode }> =({children}) => {
  return (
    <>
      <ContainerLink>
      <Link href="/" passHref>
      <SpanStyle>Головна</SpanStyle>
        </Link>
        <SpanStyle>/</SpanStyle>
        <Link href={`/${children}`} passHref>
         <SpanStyle>{children}</SpanStyle> 
        </Link>
      </ContainerLink>
    </>
  )
}

export default LinkRoute;