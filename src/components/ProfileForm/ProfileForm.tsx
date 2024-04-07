import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import {
  StyledInput,
  StyledSubmit,
  StyledErrorMessage,
} from "@/components/ProfileForm/ProfileForm.styled"
import { uk } from "date-fns/locale"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Занадто коротке ім'я!")
    .max(50, "Занадто довге ім'я!")
    .required("Обов'язкове поле"),
  lastName: Yup.string()
    .min(3, "Занадто коротке прізвище!")
    .max(50, "Занадто довге прізвище!")
    .required("Обов'язкове поле"),
  email: Yup.string().email("Некоректний email").required("Обов'язкове поле"),
  phone: Yup.string()
    .required("Обов'язкове поле")
    .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Неправильний номер"),
  dateBirth: Yup.date()
    .nullable()
    .min(new Date(1900, 0, 1))
    .required("Обов'язкове поле"),
  address: Yup.string().required("Обов'язкове поле"),
  oldPassword: Yup.string().min(6, "Занадто короткий пароль!").required("Обов'язкове поле"),
  newPassword: Yup.string().min(6, "Занадто короткий пароль!").required("Обов'язкове поле"),
  confirmPassword: Yup.string()
    .min(3, "Занадто короткий пароль!")
    .required("Обов'язкове поле")
    .oneOf([Yup.ref("newPassword")], "Пароль не співпадає"),
})

const ProfileForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dateBirth: "",
          address: "",
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            <StyledInput>
              <label htmlFor="firstName">Ім'я*</label>
              <Field
                name="firstName"
                placeholder="Ваше ім'я"
                hasError={errors.phone && touched.phone}
              />
              <StyledErrorMessage>
                {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
              </StyledErrorMessage>
            </StyledInput>

            <StyledInput>
              <label htmlFor="lastName">Прізвище*</label>
              <Field
                name="lastName"
                placeholder="Ваше прізвище"
                hasError={errors.phone && touched.phone}
              />
              <StyledErrorMessage>
                {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
              </StyledErrorMessage>
            </StyledInput>

            <StyledInput>
              <label htmlFor="email">Email*</label>
              <Field
                name="email"
                type="email"
                placeholder="Ваша пошта"
                hasError={errors.phone && touched.phone}
              />
              <StyledErrorMessage>
                {errors.email && touched.email && <div>{errors.email}</div>}
              </StyledErrorMessage>
            </StyledInput>

            <StyledInput>
              <label htmlFor="phone">Телефон*</label>
              <Field
                type="tel"
                name="phone"
                placeholder="Ваш телефон"
                hasError={errors.phone && touched.phone}
              />
              <StyledErrorMessage>
                {errors.phone && touched.phone && <div>{errors.phone}</div>}
              </StyledErrorMessage>
            </StyledInput>

            <StyledInput>
              <label htmlFor="dateBirth">Дата народження*</label>
              <DatePicker
                name="dateBirth"
                selected={values.dateBirth ? new Date(values.dateBirth) : null}
                onChange={date => setFieldValue("dateBirth", date)}
                maxDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Дата народження"
                locale={uk}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              <StyledErrorMessage>
                {errors.dateBirth && touched.dateBirth && <div>{errors.dateBirth}</div>}
              </StyledErrorMessage>
            </StyledInput>

            <StyledInput>
              <label htmlFor="address">Адреса доставки*</label>
              <Field
                name="address"
                placeholder="Адреса доставки"
                hasError={errors.phone && touched.phone}
              />
              <StyledErrorMessage>
                {errors.address && touched.address && <div>{errors.address}</div>}
              </StyledErrorMessage>
            </StyledInput>

            <StyledInput>
              <label htmlFor="oldPassword">Cтарий пароль*</label>
              <Field
                type="password"
                name="oldPassword"
                placeholder="Введіть пароль"
                hasError={errors.phone && touched.phone}
              />
              <StyledErrorMessage>
                {errors.oldPassword && touched.oldPassword && <div>{errors.oldPassword}</div>}
              </StyledErrorMessage>
            </StyledInput>

            <StyledInput>
              <label htmlFor="newPassword">Новий пароль*</label>
              <Field
                type="password"
                name="newPassword"
                placeholder="Введіть пароль"
                hasError={errors.phone && touched.phone}
              />
              <StyledErrorMessage>
                {errors.newPassword && touched.newPassword && <div>{errors.newPassword}</div>}
              </StyledErrorMessage>
            </StyledInput>

            <StyledInput>
              <label htmlFor="confirmPassword">Новий пароль*</label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Повторіть пароль"
                hasError={errors.phone && touched.phone}
              />
              <StyledErrorMessage>
                {errors.confirmPassword && touched.confirmPassword && (
                  <div>{errors.confirmPassword}</div>
                )}
              </StyledErrorMessage>
            </StyledInput>

            <StyledSubmit type="submit">Зберегти зміни</StyledSubmit>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ProfileForm
