import UserLayout from "@/components/UserLayout"
import { categories } from "@/data/categories"
import { NextPage } from "next"
import {
  SignInContainer,
  SignInGoogleAuthMarginAndAdjustFont,
  SignInRedirectMargin,
  Title,
} from "@/styles/AuthPage.styled"
import { IInput, ISignInForm } from "@/types/components"
import AuthForm from "@/components/AuthForm"
import { SubmitHandler } from "react-hook-form"
import Redirect from "@/components/Redirect"
import GoogleAuth from "@/components/GoogleAuth"
import EyeIcon from "@/UI/icons/EyeIcon"
import { EyeIconStyled } from "@/components/AuthForm/AuthForm.styled"

const onSubmit: SubmitHandler<ISignInForm> = data => console.log(data)

const inputs: IInput<ISignInForm>[] = [
  {
    label: "Email*",
    id: "email" as const,
    placeholder: "Ваша пошта",
    pattern: /^\w+@\w+\.\w+$/,
    patternErrMsg: "Введіть дійсний email",
    type: "email",
  },
  {
    label: "Пароль*",
    id: "password" as const,
    placeholder: "Ваш пароль",
    type: "password",
    node: <Redirect questionText="Забули пароль?" href="signup" />,
    component: EyeIconStyled,
  },
]

const defaultValues = {
  email: "",
  password: "",
}

const SignInPage: NextPage = () => (
  <UserLayout title={"Реєстрація"} categories={categories}>
    <SignInContainer>
      <Title>ВХІД</Title>
      <AuthForm
        inputs={inputs}
        onSubmit={onSubmit}
        buttonTitle="УВІЙТИ"
        defaultValues={defaultValues}
      />
      <SignInGoogleAuthMarginAndAdjustFont>
        <GoogleAuth title="Вхід за допомогою Google" />
      </SignInGoogleAuthMarginAndAdjustFont>
      <SignInRedirectMargin>
        <Redirect questionText="Немає акаунту?" actionText="ЗАРЕЄСТРУЙСЯ" href="signup" />
      </SignInRedirectMargin>
    </SignInContainer>
  </UserLayout>
)

export default SignInPage
