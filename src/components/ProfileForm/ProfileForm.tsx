// import React from "react"
// import ReactDOM from "react-dom"
// import { Path, useForm, UseFormRegister } from "react-hook-form"
// import { StyledInput } from "@/components/ProfileForm/ProfileForm.styled"
//
// interface IFormValues {
//   "First Name": string
//   "Прізвище*": string
//   Age: number
// }
//
// type InputProps = {
//   label: Path<IFormValues>
//   placeholder: string
//   register: UseFormRegister<IFormValues>
//   required: boolean
// }
//
// // The following component is an example of your existing Input Component
// const Input = ({ label, register, required, placeholder }: InputProps) => (
//   <StyledInput>
//     <label>{label}</label>
//     <input placeholder={placeholder} {...register(label, { required })} />
//   </StyledInput>
// )
//
// const ProfileForm = () => {
//   const { register, handleSubmit } = useForm<IFormValues>()
//
//   const onSubmit = (data: IFormValues) => {
//     alert(JSON.stringify(data))
//   }
//
//   return (
//     // <form onSubmit={handleSubmit(onSubmit)}>
//     //   <Input label="First Name" register={register} required placeholder="First name" />
//     //   <Input label="Прізвище*" register={register} required placeholder="Ваше прізвище" />
//     //   <input type="submit" />
//     // </form>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         type="text"
//         placeholder="First name"
//         {...register("First name", { required: true, maxLength: 80 })}
//       />
//       <input
//         type="text"
//         placeholder="Last name"
//         {...register("Last name", { required: true, maxLength: 100 })}
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
//       />
//       <input
//         type="tel"
//         placeholder="Mobile number"
//         {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })}
//       />
//       <select {...register("Title", { required: true })}>
//         <option value="Mr">Mr</option>
//         <option value="Mrs">Mrs</option>
//         <option value="Miss">Miss</option>
//         <option value="Dr">Dr</option>
//       </select>
//
//       <input {...register("Developer", { required: true })} type="radio" value="Yes" />
//       <input {...register("Developer", { required: true })} type="radio" value="No" />
//
//       <input type="submit" />
//     </form>
//   )
// }
//
// export default ProfileForm

// import React from "react"
// import { useForm } from "react-hook-form"
// import { StyledInput, StyledSubmit } from "@/components/ProfileForm/ProfileForm.styled"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
//
// interface IFormValues {
//   firstName: string
//   lastName: string
//   email: string
//   mobileNumber: number
//   dateBirth: string
//   address: string
//   oldPassword: string
//   newPassword: string
//   repeatPassword: string
// }
//
// const SignupSchema = yup.object().shape({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   email: yup.string().email().required(),
//   mobileNumber: yup.number().required().positive().integer(),
//   dateBirth: yup.string().required(),
//   address: yup.string().required(),
//   oldPassword: yup.string().required(),
//   newPassword: yup.string().required(),
//   repeatPassword: yup.string().required(),
// })
//
// export default function ProfileForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(SignupSchema) })
//   const onSubmit = data => console.log(data)
//   console.log(errors)
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <StyledInput>
//         <label htmlFor="firstName">Ім'я*</label>
//         <input
//           type="text"
//           placeholder="Ваше ім'я"
//           {...register("firstName", { required: true, maxLength: 80 })}
//         />
//         {errors.firstName && <p>{errors.firstName.message}</p>}
//       </StyledInput>
//
//       <StyledInput>
//         <label htmlFor="lastName">Прізвище*</label>
//         <input
//           type="text"
//           placeholder="Ваше прізвище"
//           {...register("lastName", { required: true, maxLength: 80 })}
//         />
//         {errors.lastName && <p>{errors.lastName.message}</p>}
//       </StyledInput>
//
//       <StyledInput>
//         <label htmlFor="email">Email*</label>
//         <input
//           type="text"
//           placeholder="Ваша пошта"
//           {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
//         />
//         {errors.email && <p>{errors.email.message}</p>}
//       </StyledInput>
//
//       <StyledInput>
//         <label htmlFor="mobileNumber">Телефон*</label>
//         <input
//           type="tel"
//           placeholder="Ваш телефон"
//           {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })}
//         />
//       </StyledInput>
//
//       <StyledInput>
//         <label htmlFor="dateBirth">Дата народження*</label>
//         <input
//           type="text"
//           placeholder="Дата народження"
//           {...register("dateBirth", { required: true, minLength: 6, maxLength: 12 })}
//         />
//       </StyledInput>
//
//       <StyledInput>
//         <label htmlFor="address">Адреса доставки*</label>
//         <input
//           type="text"
//           placeholder="Адреса доставки"
//           {...register("address", { required: true, minLength: 6, maxLength: 12 })}
//         />
//       </StyledInput>
//
//       <StyledInput>
//         <label htmlFor="oldPassword">Cтарий пароль*</label>
//         <input
//           type="password"
//           placeholder="Введіть пароль"
//           {...register("oldPassword", { required: true, minLength: 6, maxLength: 12 })}
//         />
//       </StyledInput>
//
//       <StyledInput>
//         <label htmlFor="newPassword">Новий пароль*</label>
//         <input
//           type="password"
//           placeholder="Введіть пароль"
//           {...register("newPassword", { required: true, minLength: 6, maxLength: 12 })}
//         />
//       </StyledInput>
//
//       <StyledInput>
//         <label htmlFor="repeatPassword">Повторити пароль*</label>
//         <input
//           type="password"
//           placeholder="Повторіть пароль"
//           {...register("repeatPassword", { required: true, minLength: 6, maxLength: 12 })}
//         />
//       </StyledInput>
//
//       <StyledSubmit type="submit">Зберегти зміни</StyledSubmit>
//
//       {/*<input type="submit" />*/}
//     </form>
//   )
// }

import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { StyledInput, StyledSubmit } from "@/components/ProfileForm/ProfileForm.styled"
import { uk } from "date-fns/locale"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Invalid phone number format"),
  birthDate: Yup.date()
    .nullable()
    .min(new Date(1900, 0, 1)),

  // dateBirth: Yup.string().required(),
  // address: Yup.string().required(),
  oldPassword: Yup.string().min(6, "Too Short!").max(8, "Too Long!").required(),
  newPassword: Yup.string().min(6, "Too Short!").max(8, "Too Long!").required(),
  confirmPassword: Yup.string()
    .min(3, "Занадто короткий пароль!")
    .max(8, "Too Long!")
    .required()
    .oneOf([Yup.ref("newPassword")], "Password must match"),
})

const ProfileForm = () => {
  // const [startDate, setStartDate] = useState(new Date())
  const [birthDate, setBirthDate] = useState(null)
  console.log(birthDate)
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
          // same shape as initial values
          console.log(values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <StyledInput>
              <label htmlFor="firstName">Ім'я*</label>
              <Field name="firstName" placeholder="Ваше ім'я" />
              {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
            </StyledInput>

            <StyledInput>
              <label htmlFor="lastName">Прізвище*</label>
              <Field name="lastName" placeholder="Ваше прізвище" />
              {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
            </StyledInput>

            <StyledInput>
              <label htmlFor="email">Email*</label>
              <Field name="email" type="email" placeholder="Ваша пошта" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </StyledInput>

            <StyledInput>
              <label htmlFor="phone">Телефон*</label>
              <Field type="tel" name="phone" placeholder="Ваш телефон" />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            </StyledInput>

            {/*<StyledInput>*/}
            {/*  <label htmlFor="dateBirth">Дата народження*</label>*/}
            {/*  <Field name="dateBirth" placeholder="Дата народження" />*/}
            {/*  {errors.dateBirth && touched.dateBirth ? <div>{errors.dateBirth}</div> : null}*/}
            {/*</StyledInput>*/}

            {/*<DatePicker selected={startDate} onChange={date => setStartDate(date)} />*/}

            <StyledInput>
              <label htmlFor="dateBirth">Дата народження*</label>
              <DatePicker
                name="dateBirth"
                selected={birthDate}
                onChange={date => setBirthDate(date)}
                maxDate={new Date()}
                // showYearDropdown
                // scrollableMonthYearDropdown
                // dateFormat="MMMM d, yyyy"
                dateFormat="dd/MM/yyyy"
                placeholderText="Дата народження"
                locale={uk}
              />
            </StyledInput>

            <StyledInput>
              <label htmlFor="address">Адреса доставки*</label>
              <Field name="address" placeholder="Адреса доставки" />
              {errors.address && touched.address ? <div>{errors.address}</div> : null}
            </StyledInput>

            <StyledInput>
              <label htmlFor="oldPassword">Cтарий пароль*</label>
              <Field type="password" name="oldPassword" placeholder="Введіть пароль" />
              {errors.oldPassword && touched.oldPassword ? <div>{errors.oldPassword}</div> : null}
            </StyledInput>

            <StyledInput>
              <label htmlFor="newPassword">Новий пароль*</label>
              <Field type="password" name="newPassword" placeholder="Введіть пароль" />
              {errors.newPassword && touched.newPassword ? <div>{errors.newPassword}</div> : null}
            </StyledInput>

            <StyledInput>
              <label htmlFor="confirmPassword">Новий пароль*</label>
              <Field type="password" name="confirmPassword" placeholder="Повторіть пароль" />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div>{errors.confirmPassword}</div>
              ) : null}
            </StyledInput>

            <StyledSubmit type="submit">Зберегти зміни</StyledSubmit>
            {/*<button type="submit">Submit</button>*/}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ProfileForm
