import { ComponentType, ReactNode } from "react"
import { DefaultValues, FieldValues, Path, SubmitHandler } from "react-hook-form"
import { IEyeIcon } from "."

export type IInput<IForm extends FieldValues> = {
  label: string
  id: Path<IForm>
  type: "text" | "tel" | "email" | "password"
  placeholder: string
  pattern?: RegExp
  patternErrMsg?: string
  node?: ReactNode
  component?: ComponentType<IEyeIcon>
}

export type IAuthForm<IForm extends FieldValues> = {
  inputs: IInput<IForm>[]
  onSubmit: SubmitHandler<IForm>
  buttonTitle: string
  defaultValues?: DefaultValues<IForm>
}
