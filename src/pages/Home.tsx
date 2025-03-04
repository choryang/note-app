import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Item from '@/components/Item';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Divider } from '@mui/material';
import useItemStore from '@/store/itemStore';
import Form from '@/components/Form';
import useModal from '@/hooks/useModal';
import form from '@/interfaces/form';


function Home () {

    const { items } = useItemStore();
    const { showModal } = useModal();
    
    const handleOpenAddModal = () => {
        showModal({
            modal_type: "DrawerModal",
            modal_props: {
                children: <Form {...{
                        is_modal: true, 
                        default_value: {},
                        submit_text: "Add"} as form}/>,
            }
        })
    }
    

    return (
        <Container sx={{paddingTop: { sm: 10, xs: 5 }}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}}>
                <Typography sx={{ typography: { sm: 'h4', xs: 'h5' } }}>
                    Memo List
                </Typography>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleOpenAddModal}>
                    New memo
                </Button>
            </Box>
            <Divider sx={{mb: 4}}/>
            <Grid container spacing={2}>
                {items.map((item) => {
                    return <Item {...item} />
                })}
            </Grid>
        </Container>
    )
}

export default Home;