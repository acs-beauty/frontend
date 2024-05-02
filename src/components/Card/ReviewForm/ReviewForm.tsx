import React from "react"
import { ReviewItem, Button, Input, Label, Textarea, ErrorStyle, IconWrapper } from "./ReviewForm.styled"
import StarIcon from "@/Images/StarIcon"
import * as Yup from "yup"
import { Formik, Field, Form, FormikHelpers } from "formik"

interface Values {
  firstName: string
  email: string
  review: string
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

const ReviewForm = () => {
  return (
    <>
      <ReviewItem>Залиште свій відгук</ReviewItem>
      <IconWrapper>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <StarIcon key={index} fill={"white"} />
        ))}
      </IconWrapper>
      
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          review: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.resetForm()
          actions.setSubmitting(false)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Label htmlFor="firstName">Ім&#39;я*</Label>
            <Input id="firstName" name="firstName" placeholder="Ваше ім'я" />
            {errors.firstName && touched.firstName ? <ErrorStyle>{errors.firstName}</ErrorStyle> : null}
            <Label htmlFor="email">Email*</Label>
            <Input id="email" name="email" placeholder="Ваша пошта" type="email" />
            {errors.email && touched.email ? <ErrorStyle>{errors.email}</ErrorStyle> : null}
            <Label htmlFor="review">Відгук</Label>
            <Textarea id="review" name="review" placeholder="Ваш відгук" />
            <Button type="submit">НАДІСЛАТИ</Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ReviewForm
