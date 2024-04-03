import GoogleIcon from "@/UI/icons/GoogleIcon"
import { Button, Text } from "./GoogleAuth.styled"
import { FC } from "react"
import { IGoogleAuth } from "@/types/components"

const GoogleAuth: FC<IGoogleAuth> = ({ title }) => {
  return (
    <Button>
      <GoogleIcon />
      <Text>{title}</Text>
    </Button>
  )
}

export default GoogleAuth
