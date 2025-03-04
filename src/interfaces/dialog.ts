interface dialog {
    [key: string]: string | Function | undefined,
    title?: string,
    content?: string,
    action_text?: string,
    action_func?: () => void,
    cancel_text?: string
}

export default dialog;