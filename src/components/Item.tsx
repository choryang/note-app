import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid2';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import item from '@/interfaces/item';
import useModal from '@/hooks/useModal';
import Form from '@/components/Form';
import form from '@/interfaces/form';
import useItemStore from '@/store/itemStore';

function Item (props: item) {

    const navigate = useNavigate();
    const { showModal, hideModal } = useModal();
    const { deleteItem, setItems } = useItemStore();

    const handleClickDetail = () => {
        navigate(`/detail/${props.id}`);
    }

    const handleDeleteSuccessAlert = () => {
        showModal({
            modal_type: "AlertModal",
            modal_props: {
                severity: "success",
                content: "Deletion successful."
            }
        })
    }

    const handleDelete = () => {
        const newItems = deleteItem(props.id);
        setItems(newItems);
        hideModal();
        handleDeleteSuccessAlert();
    }

    const handleOpenDeleteDialog = () => {
        showModal({
            modal_type: "DialogModal",
            modal_props: {
                title: "Are you sure you want to delete the note?",
                action_text: "Yes",
                action_func: handleDelete,
                cancel_text: "Cancel",
            }
        })
    }

    const handleOpenEditModal = () => {
        showModal({
            modal_type: "DrawerModal",
            modal_props: {
                children: <Form {...{
                        is_modal: true, 
                        default_value: props,
                        submit_text: "Update"} as form}/>,
            }
        })
    }

    return (
        <Grid size={{sm: 12, md: 6}} sx={{width: "100%"}}>
             <Card sx={{display: "flex", flexDirection: "row", width: "100%"}}>
                <CardActionArea onClick={handleClickDetail}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                           {props.last_modified}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Button size="small" color="primary" onClick={handleOpenEditModal}>
                        <EditIcon />
                    </Button>
                    <Button size="small" color="primary" onClick={handleOpenDeleteDialog}>
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Item