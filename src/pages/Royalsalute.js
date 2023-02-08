import React from "react";
import Header from "../components/visuals/Header";
import { tokens } from "../theme";


//page components
import Royalsalutebottles from "../components/Brands/Royalsalutebottles";
import Royalsalutecampaigns from "../components/Brands/Royalsalutecampaigns";
// import MainCard from "../components/visuals/MainCard"
import Royalsalutecard from "../components/Brands/Royalsalutecard";

//architecture
import { Box, useTheme } from "@mui/material";



//functiionality
const Royalsalute = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Royal Salute" />
            </Box>

            <Royalsalutecard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Royalsalutecampaigns />
                <Royalsalutebottles />

            </Box>
        </Box>



    );
};

export default Royalsalute;
