import { AlertColor } from "@mui/material"

interface alert {
    [key: string]: string,
    severity: AlertColor,
    content: string,
}

export default alert