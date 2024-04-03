import { useForm, FieldValues } from "react-hook-form"
import { Error, Input, InputsWrapper, Label, SubmitButton } from "./AuthForm.styled"
import { IAuthForm } from "@/types/components"
import { useState } from "react"

const AuthForm = <IForm extends FieldValues>({
  inputs,
  onSubmit,
  buttonTitle,
  defaultValues,
}: IAuthForm<IForm>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>({ mode: "onChange", criteriaMode: "all", defaultValues })

  const [isVisible, setIsVisible] = useState(false)

  const getType = () => (isVisible ? "text" : "password")

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrapper>
          {inputs.map(
            ({
              label,
              id,
              placeholder,
              pattern,
              patternErrMsg,
              type,
              node: Node,
              component: Component,
            }) => (
              <div key={id}>
                <Label htmlFor={id}>{label}</Label>
                <div style={{ position: "relative" }}>
                  <Input
                    id={id}
                    type={Component ? getType() : type}
                    placeholder={placeholder}
                    {...register(id, {
                      required: `${label} обов'язкове поле`,
                      pattern: { value: pattern || /./, message: patternErrMsg || "" },
                    })}
                  />
                  {Component && <Component setIsVisible={setIsVisible} />}
                </div>
                <Error>{errors[id] && (errors[id]?.message as string)}</Error>
                {Node && Node}
              </div>
            )
          )}
        </InputsWrapper>
        <SubmitButton type="submit" disabled={!isValid}>
          {buttonTitle}
        </SubmitButton>
      </form>
    </>
  )
}

export default AuthForm
