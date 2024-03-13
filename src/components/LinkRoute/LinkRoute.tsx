import React, { ReactNode} from "react";
import Link from "next/link"
import { ContainerLink,  } from "./LinkRoute.styled"

const LinkRoute: React.FC<{ children: ReactNode }> =({children}) => {
  return (
    <>
      <ContainerLink>
        <Link href="/">
          Головна
          {/* <StyleArrowForwardIosIcon /> */}
        </Link>
        <p>/</p>
        <Link href="/">
          {children}
          {/* <StyleArrowForwardIosIcon /> */}
        </Link>
      </ContainerLink>
    </>
  )
}

export default LinkRoute;