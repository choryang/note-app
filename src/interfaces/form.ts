import item from "@/interfaces/item";

interface form {
    [key: string]: string | boolean | item,
    is_modal: boolean,
    default_value: item,
    submit_text: string
}

export default form