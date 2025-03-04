import item from "@/interfaces/item";
import useItemStore from "@/store/itemStore";
import Container from "@mui/material/Container/Container";
import Divider from "@mui/material/Divider/Divider";
import Typography from "@mui/material/Typography/Typography";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail () {

    const params = useParams();
    const { getItem } = useItemStore();
    const navigate = useNavigate();
    const [ item, setItem ] = useState<item>({} as item);

    useEffect(() => {
        
        if (params.id === undefined) { 
            navigate("/"); 
            return;
        }

        const currentItem = getItem(params.id);
        if (currentItem === undefined) {
            navigate("/"); 
            return;
        }

        setItem(currentItem);

    }, [])
    

    return (
        <Container sx={{paddingTop: 10}}>  
            <Typography variant="h3">
                {item.title}
            </Typography>
            <Typography variant="caption">
                {item.last_modified}
            </Typography>
            <Divider sx={{mb: 4}}/>
            <Typography variant="body1">
                {item.content}
            </Typography>
        </Container>
    )
}

export default Detail;