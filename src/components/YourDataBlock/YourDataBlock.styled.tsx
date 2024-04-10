import styled from "@emotion/styled"
import { Field } from "formik"
import { montserrat } from "@/utils/fonts"

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 12px;
`
export const FormSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
  margin-bottom: 16px;
`
export const FieldWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
export const FormInput = styled(Field)`
  display: block;
  width: 100%;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey[300]};
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
  }
`
export const FieldWrapperPhone = styled.div`
  margin-bottom: 24px;
`
export const FieldWrapperDepNum = styled.div`
  margin-bottom: 24px;
`
export const RadioLabel = styled.label`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;

  &:not(:last-child) {
    margin-right: 56px;
  }
`
export const RadioField = styled(Field)`
  margin-right: 8px;
`
export const RadioBankAccountWrapper = styled.div`
  margin-bottom: 12px;
`
export const FlexRadioFieldsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
  margin-bottom: 12px;
`
export const RadioFieldsGroup = styled.div`
  margin-bottom: 24px;
`
export const FormSelectInput = styled(FormInput)`
  background-color: #fff;

  option[value=""] {
    color: ${({ theme }) => theme.colors.grey[300]};
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
  }
`
export const NotificationDiv = styled.div`
  display: flex;
  padding: 18px 12px;
  background-color: ${({ theme }) => theme.colors.grey[600]};
  border-radius: 4px;
  margin-bottom: 24px;
`
export const NotificationText = styled.p`
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: 12px;
  font-weight: 500;
  line-height: 14.63px;
`
export const InfoIconWrapper = styled.div`
  margin-right: 12px;
`
export const FormTextAreaField = styled(FormInput)`
  height: 108px;
  resize: none;
  margin-bottom: 24px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey[300]};
    font-size: 12px;
    font-weight: 400;
    line-height: 14.63px;
  }
`
export const MakeOrderBtn = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: 12px;
  font-weight: 600;
  line-height: 14.63px;

  background-color: ${({ theme }) => theme.colors.grey[600]};
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 162px;

  border-radius: 4px;
`
// export const FormSelectOption = styled.option`
//   font-family: ${montserrat.style.fontFamily};
//   color: ${({ theme }) => theme.colors.grey[300]};
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 16px;
// `

export const SelectLabel = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 12px;
`
export const selectStyles = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    padding: 0,
    outline: "none",
    backgroundColor: "none",
    // border: "none",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.48px",

    // boxShadow: "none",
  }),
  // container: (provided: any) => ({
  //   ...provided,
  //   "&:focus": {
  //     border: "none",
  //     borderColor: "transparent",
  //   },
  // }),
  // indicatorSeparator: () => ({
  //   display: "none",
  // }),
  // dropdownIndicator: (provided: any) => ({
  //   ...provided,
  //   padding: "4px",
  //   color: "#5A5757",
  //   "&:hover": {
  //     color: "#5A5757",
  //   },
  // }),
  // valueContainer: (provided: any) => ({
  //   ...provided,
  //   padding: "0",
  // }),
  menu: (provided: any) => ({
    ...provided,
    // width: "21rem",
    margin: 0,
    fontSize: "14px",
    fontWeight: 400,
    // letterSpacing: "0.6px",
    borderRadius: "0px",
    border: "1px solid #C1BABA",
    boxShadow: "none",
  }),
  menuList: (provided: any) => ({
    ...provided,
    "& > div": {
      backgroundColor: "#fff",
      color: "#5A5757",
      cursor: "pointer",
    },

    "& > div:hover": {
      cursor: "pointer",
    },
  }),
}
