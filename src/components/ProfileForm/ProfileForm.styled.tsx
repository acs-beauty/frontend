import styled from "@emotion/styled"

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 12px;
  label {
    font-size: 12px;
    margin-bottom: 12px;
  }
  input {
    padding: 16px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #c1baba;
  }
`

export const StyledSubmit = styled.button`
  background-color: #453e42;
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
  width: 100%;
  padding: 14px;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 20px;
`
export const StyledErrorMessage = styled.div`
  color: #f52323;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.63px;
  margin-top: 8px;
`
