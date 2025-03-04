import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();
    const onClickHome = () => {
        navigate("/", {replace: true});
    }

    return (
        <Container sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2, paddingTop: 10}}>
            <Typography variant="h4">Page Not Found</Typography>
            <Button variant="outlined" onClick={onClickHome}>Go to Home</Button>
        </Container>
    )
}

export default NotFound;