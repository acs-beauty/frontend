import type { NextPage } from "next"

import UserLayout from "@/components/UserLayout"
import { categories } from "@/data/categories"

import AuthForm from "@/components/AuthForm"
import { SubmitHandler } from "react-hook-form"
import { IInput, ISignUpForm } from "@/types/components"
import {
  SignUpContainer,
  SignUpGoogleAuthMargin,
  SignUpRedirectMargin,
  Title,
} from "@/styles/AuthPage.styled"
import GoogleAuth from "@/components/GoogleAuth"
import PolicyRules from "@/components/PolicyRules"
import Redirect from "@/components/Redirect"

const onSubmit: SubmitHandler<ISignUpForm> = data => console.log(data)

const inputs: IInput<ISignUpForm>[] = [
  {
    label: "Ім'я*",
    id: "name" as const,
    placeholder: "Ваше ім'я",
    pattern: /^\D+$/,
    patternErrMsg: "Дозволено тільки літери",
    type: "text",
  },
  {
    label: "Прізвище*",
    id: "surname" as const,
    placeholder: "Ваше прізвище",
    pattern: /^\D+$/,
    patternErrMsg: "Дозволено тільки літери",
    type: "text",
  },
  {
    label: "Email*",
    id: "email" as const,
    placeholder: "Ваша пошта",
    pattern: /^\w+@\w+\.\w+$/,
    patternErrMsg: "Введіть дійсний email",
    type: "email",
  },
  {
    label: "Телефон*",
    id: "phone" as const,
    placeholder: "Ваш телефон",
    pattern: /^\+380\d{9}$/,
    patternErrMsg: "Починається з +380, довжина 13 цифр",
    type: "tel",
  },
  {
    label: "Пароль*",
    id: "password" as const,
    placeholder: "Ваш пароль",
    type: "password",
  },
  {
    label: "Повторити пароль*",
    id: "passwordRepeat" as const,
    placeholder: "Ваш пароль",
    type: "password",
  },
]

const defaultValues = {
  name: "",
  surname: "",
  email: "",
  phone: "+380",
  password: "",
  passwordRepeat: "",
}

const SignUp: NextPage = () => (
  <UserLayout title={"Реєстрація"} categories={categories}>
    <SignUpContainer>
      <Title>РЕЄСТРАЦІЯ</Title>
      <AuthForm
        inputs={inputs}
        onSubmit={onSubmit}
        buttonTitle="ЗАРЕЄСТРУВАТИСЬ"
        defaultValues={defaultValues}
      />
      <SignUpGoogleAuthMargin>
        <GoogleAuth title="Рєєстрація за допомогою Google" />
      </SignUpGoogleAuthMargin>
      <PolicyRules />
      <SignUpRedirectMargin>
        <Redirect questionText="Маєш акаунт?" actionText="УВІЙТИ" href="signin" />
      </SignUpRedirectMargin>
    </SignUpContainer>
  </UserLayout>
)

export default SignUp
