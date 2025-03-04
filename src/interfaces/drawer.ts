import { ReactNode } from "react"

interface drawer {
    [key: string]: string | ReactNode
    children: ReactNode
}

export default drawer