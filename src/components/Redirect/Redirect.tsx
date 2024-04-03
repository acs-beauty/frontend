import { FC } from "react"
import { LinkStyled, QuestionWrapper, RedirectWrapper } from "./Redirect.styled"
import { IRedirect } from "@/types/components"

const Redirect: FC<IRedirect> = ({ questionText, actionText, href }) => (
  <>
    {actionText && (
      <RedirectWrapper>
        {questionText} <LinkStyled href={href}>{actionText}</LinkStyled>
      </RedirectWrapper>
    )}
    {!actionText && <QuestionWrapper href={href}>{questionText}</QuestionWrapper>}
  </>
)

export default Redirect
