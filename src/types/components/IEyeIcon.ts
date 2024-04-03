import { Dispatch, SVGAttributes, SetStateAction } from "react"

export type IEyeIcon = SVGAttributes<SVGSVGElement> & {
  setIsVisible: Dispatch<SetStateAction<boolean>>
}
