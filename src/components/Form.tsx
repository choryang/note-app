import form from "@/interfaces/form";
import item from "@/interfaces/item";
import useItemStore from "@/store/itemStore";
import { korDate, timeFormatter } from "@/utils/time";
import useModal from "@/hooks/useModal";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import { useForm } from "react-hook-form";

function Form(props: form) {

    const { register, handleSubmit, getValues, formState: {errors}} = useForm();
    const { items, deleteItem, setItems } = useItemStore();
    const { hideModal, showModal } = useModal();
    // 생성과 수정 모두 동일한 form을 사용하므로 어떤 액션인지 구분하기 위한 타입
    type ActionTypes = "Addition" | "Update";

    const defaultValue = props.default_value;

    const handleSuccessAlert = (action: ActionTypes) => {
        showModal({
            modal_type: "AlertModal",
            modal_props: {
                severity: "success",
                content: `${action} successful.`
            }
        })
    }
    
    const onSubmit = () => {
        const title = getValues("title");
        const content = getValues("content");

        const newItem: item = {
            title,
            content,
            id: defaultValue.id ? defaultValue.id : crypto.randomUUID(),
            created_at: defaultValue.created_at ? defaultValue.created_at : timeFormatter(korDate()),
            last_modified: timeFormatter(korDate())
        }

        let newItems = [];
        let action: ActionTypes = "Addition";

        if(Object.keys(defaultValue).length > 0) {
            newItems = deleteItem(defaultValue.id);
            action = "Update";
        } else {
            newItems = [...items];
        }

        newItems.unshift(newItem);
        setItems(newItems);
        hideModal();
        handleSuccessAlert(action);
    }

    const handleCancel = () => {
        // form 컴포넌트가 모달 내에서 사용되었을 때
        if(props.is_modal) {
            hideModal();
        }
        // form 컴포넌트가 페이지에서 사용되었다면?
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{display: "flex", flexDirection: "column", gap: 3, mb: 4}}>
                <Typography variant="h5">
                    Title
                </Typography>
                <TextField
                    defaultValue={defaultValue.title}
                    label="Title*"
                    fullWidth
                    {...register('title', {
                        required: {
                            message: "Title required",
                            value: true,
                        }, 
                        maxLength: {
                            message: "Maximum 50 characters can be entered",
                            value: 50,
                        }, 
                        minLength: {
                            message: "Enter more than 5 characters",
                            value: 5,
                        }, 
                        validate: (value) => value.trim().length < 1 ? "Title required" : true
                    })}
                    error={Object.keys(errors).length > 0}
                    helperText={Object.keys(errors).length > 0 && <>{errors.title?.message}</>}
                />
                <Typography variant="h5">
                    Content
                </Typography>
                <TextField
                    defaultValue={defaultValue.content}
                    label="Content"
                    multiline
                    fullWidth
                    rows={4}
                    {...register('content')}
                />
            </Box>
            <Box sx={{display: "flex", justifyContent: "flex-end", gap: 2}}>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button variant="contained" type="submit">{props.submit_text}</Button>
            </Box>
        </form>
    )
}

export default Form;