import drawer from "@/interfaces/drawer";
import Drawer from "@mui/material/Drawer/Drawer";

function SimpleDrawer(props: drawer) {
    return (
        <Drawer 
            open={true} 
            anchor="right" 
            children={props.children} 
            slotProps={
            {paper: 
                {sx: 
                    {
                        width: {md: "50%", xs: "90%"}, 
                        padding: {md: 4, xs: 2}
                    }
                }
            }}> 
        </Drawer>
    )
}

export default SimpleDrawer