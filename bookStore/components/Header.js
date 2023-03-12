import React, { useState } from "react";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {AppBar, Box, Tab, Tabs, Toolbar} from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    const [value, setValue] = useState();
    const handleChange = (e, val) => {
        setValue(val);
        if(val == 0) {   //Tab clicked is HOME
            router.push("/")  
        } else if (val == 1){
            router.push("/books") //Tab clicked is AllBooks
        }
        else if (val == 2){
            router.push("/api/books") //Tab clicked is AllBooks
        }
    };

    return (
        <AppBar sx={{bgcolor: "#c83576"}}>
            <Toolbar>
                <MenuBookIcon sx={{fontSize: "26px" }} />
                <Box display="flex" margin={"auto"}>
                    <Tabs onChange = {handleChange} value={value} textColor="inherit">                       
                        <Tab label="Home" />
                        <Tab label="All Books" />
                        <Tab label="All Books Data" />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;