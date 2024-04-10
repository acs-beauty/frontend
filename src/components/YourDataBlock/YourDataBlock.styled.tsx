import styled from "@emotion/styled"
import { Field } from "formik"

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
