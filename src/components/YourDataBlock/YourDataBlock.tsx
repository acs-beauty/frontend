import React, { ChangeEvent, useState } from "react"
import { Formik, Form, ErrorMessage } from "formik"
import Select from "react-select"
import {
  Label,
  FormSectionTitle,
  FormInput,
  FieldWrapper,
  RadioLabel,
  RadioField,
  FlexRadioFieldsWrapper,
  RadioFieldsGroup,
  FormSelectInput,
  FieldWrapperPhone,
  FieldWrapperDepNum,
  RadioBankAccountWrapper,
  NotificationDiv,
  NotificationText,
  InfoIconWrapper,
  FormTextAreaField,
  MakeOrderBtn,
  selectStyles,
  SelectLabel,
  //   FormSelectOption,
} from "./YourDataBlock.styled"
import InfoIcon from "@/UI/icons/InfoIcon"
import { OptionType } from "@/types/components"
import { COUNTRY_OPTIONS } from "@/constants"

interface IInitialValues {
  firstName: string
  lastName: string
  email: string
  phone: string
  status: string
  deliveryType: string
  country: string
  region: string
  locality: string
  depNum: string
  paymentType: string
  //   tth: number
  comment: string
}

const options: OptionType[] = COUNTRY_OPTIONS

const YourDataBlock = () => {
  const [country, setCountry] = useState<OptionType | null>(null)
  const [region, setRegion] = useState<string>("")
  const [locality, setLocality] = useState<string>("")
  const [depNum, setDepNum] = useState<string>("")

  const initialValues: IInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    status: "",
    deliveryType: "novaPoshta",
    country: "",
    region: "",
    locality: "",
    depNum: "",
    paymentType: "bankAccount",
    // tth: 0,
    comment: "",
  }

  const handleFormSubmit = (values: IInitialValues, { resetForm }: { resetForm: () => void }) => {
    console.log("COUNTRY", country)
    // console.log("VALUES", {
    //   firstName: values.firstName,
    //   lastName: values.lastName,
    //   email: values.email,
    //   phone: values.phone,
    //   status: "",
    //   deliveryType: values.deliveryType,
    //   address: `${values.country}, ${values.region}, ${values.locality}, ${values.depNum}`,
    //   paymentType: values.paymentType,
    //   tth: 0,
    //   comment: values.comment,
    //   //   "productIds": "1, 2, 3, 23",
    //   //   "productCounts": "1, 2, 3, 23"
    // })
    resetForm()
    setCountry(options[0])
    setRegion("")
    setLocality("")
    setDepNum("")
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ setFieldValue }) => (
        <Form>
          <FormSectionTitle>Ваші дані</FormSectionTitle>
          <FieldWrapper>
            <Label htmlFor="firstName">Ім&apos;я*</Label>
            <FormInput type="text" id="firstName" name="firstName" placeholder="Ваше ім'я" />
            <div>
              <ErrorMessage name="firstName" />
            </div>
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="lastName">Прізвище*</Label>
            <FormInput type="text" id="lastName" name="lastName" placeholder="Ваше прізвище" />
            <div>
              <ErrorMessage name="lastName" />
            </div>
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="email">Email*</Label>
            <FormInput type="text" id="email" name="email" placeholder="Ваша пошта" />
            <div>
              <ErrorMessage name="email" />
            </div>
          </FieldWrapper>

          <FieldWrapperPhone>
            <Label htmlFor="phone">Телефон*</Label>
            <FormInput type="text" id="phone" name="phone" placeholder="Ваш телефон" />
            <div>
              <ErrorMessage name="phone" />
            </div>
          </FieldWrapperPhone>
          <FormSectionTitle>Доставка</FormSectionTitle>
          <RadioFieldsGroup role="group">
            <FlexRadioFieldsWrapper>
              <div>
                <RadioLabel>
                  <RadioField type="radio" name="deliveryType" value="novaPoshta" checked />
                  Нова Пошта
                </RadioLabel>
              </div>
              <div>
                <RadioLabel>
                  <RadioField type="radio" name="deliveryType" value="ukrPoshta" />
                  Укрпошта
                </RadioLabel>
              </div>
            </FlexRadioFieldsWrapper>
            <div>
              <RadioLabel>
                <RadioField type="radio" name="deliveryType" value="selfDelivery" />
                Самовивіз
              </RadioLabel>
            </div>
          </RadioFieldsGroup>
          {/* <FieldWrapper>
            <Label htmlFor="country">Країна*</Label>
            <FormSelectInput
              as="select"
              id="country"
              name="country"
              value={country}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setCountry(e.target.value)
                setFieldValue("country", e.target.value)
              }}
            >
              <option value="" disabled>
                Оберіть країну
              </option>
              <option value="ukraine">Україна</option>
              <option value="poland">Польща</option>
              <option value="hungary">Румунія</option>
            </FormSelectInput>
            <div>
              <ErrorMessage name="country" />
            </div>
          </FieldWrapper> */}
          <FieldWrapper>
            <SelectLabel>Країна*</SelectLabel>
            <Select<OptionType>
              defaultValue={country}
              onChange={(option: OptionType | null) => {
                setCountry(option)
                setFieldValue("country", option)
              }}
              options={options}
              placeholder="Оберіть країну"
              styles={selectStyles}
            />
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="region">Область*</Label>
            <FormSelectInput
              as="select"
              id="region"
              name="region"
              value={region}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setRegion(e.target.value)
                setFieldValue("region", e.target.value)
              }}
            >
              <option value="" disabled>
                Оберіть область
              </option>
              <option value="kyiv">Київська</option>
              <option value="kharkiv">Харківська</option>
              <option value="lviv">Львівська</option>
            </FormSelectInput>
            <div>
              <ErrorMessage name="region" />
            </div>
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="locality">Населений пункт*</Label>
            <FormSelectInput
              as="select"
              id="locality"
              name="locality"
              value={locality}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setLocality(e.target.value)
                setFieldValue("locality", e.target.value)
              }}
            >
              <option value="" disabled>
                Оберіть населений пункт
              </option>
              <option value="brovary">Бровари</option>
              <option value="irpin">Ірпінь</option>
              <option value="kyiv">Київ</option>
            </FormSelectInput>
            <div>
              <ErrorMessage name="locality" />
            </div>
          </FieldWrapper>

          <FieldWrapperDepNum>
            <Label htmlFor="depNum">Номер відділення*</Label>
            <FormSelectInput
              as="select"
              id="depNum"
              name="depNum"
              value={depNum}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setDepNum(e.target.value)
                setFieldValue("depNum", e.target.value)
              }}
            >
              <option value="" disabled>
                Оберіть номер відділення
              </option>
              <option value="5">Відділення №5</option>
              <option value="7">Відділення №7</option>
              <option value="9">Відділення №9</option>
            </FormSelectInput>
            <div>
              <ErrorMessage name="depNum" />
            </div>
          </FieldWrapperDepNum>
          <FormSectionTitle>Оплата</FormSectionTitle>
          <RadioFieldsGroup role="group">
            <RadioBankAccountWrapper>
              <RadioLabel>
                <RadioField type="radio" name="paymentType" value="bankAccount" checked />
                На розрахунковий рахунок
              </RadioLabel>
            </RadioBankAccountWrapper>
            <div>
              <RadioLabel>
                <RadioField type="radio" name="paymentType" value="whileReceive" />
                При отриманні замовлення
              </RadioLabel>
            </div>
          </RadioFieldsGroup>
          <NotificationDiv>
            <InfoIconWrapper>
              <InfoIcon color="white" opacity="1" width="20" height="20" />
            </InfoIconWrapper>
            <NotificationText>
              Наш менеджер зв&apos;яжеться з Вами після оформлення замовлення і надасть номер
              розрахункового рахунку для сплати.
            </NotificationText>
          </NotificationDiv>
          <FormSectionTitle>Коментар</FormSectionTitle>
          <FieldWrapper>
            <FormTextAreaField
              as="textarea"
              type="text"
              name="comment"
              placeholder="Тут можна залишити будь-який коментар"
            />
            <div>
              <ErrorMessage name="comment" />
            </div>
          </FieldWrapper>
          <MakeOrderBtn type="submit">ОФОРМИТИ ЗАМОВЛЕННЯ</MakeOrderBtn>
        </Form>
      )}
    </Formik>
  )
}

export default YourDataBlock
