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
import { useEffect } from 'react';


function Home () {

    const { items, setItems } = useItemStore();
    const { showModal } = useModal();

    useEffect(() => {
        const data = localStorage.getItem("items");
        if (data) {
            const newItems = JSON.parse(data);
            setItems(newItems);
        }
    }, [])
    
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
                {items.length < 1 && <Typography variant='body2'>Please Add Memo</Typography>}
                {items.map((item) => {
                    return <Item {...item} key={item.id}/>
                })}
            </Grid>
        </Container>
    )
}

export default Home;