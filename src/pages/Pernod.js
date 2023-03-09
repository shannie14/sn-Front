import React from "react";
import Header from "../components/visuals/Header";


//page components
import Pernodbottles from "../components/Brands/Pernodbottles";
import Pernodcampaigns from "../components/Brands/Pernodcampaigns";
// import MainCard from "../components/visuals/MainCard",
import Pernodcard from "../components/Brands/Pernodcard"

//architecture
import { Box, useTheme } from "@mui/material";



//functiionality
const Pernod = () => {

    const theme = useTheme();


    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Pernod Ricard" subtitle="Jeffersons, Ramazotti, Royal Salute" />
            </Box>

            <Pernodcard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Pernodcampaigns />
                <Pernodbottles />

            </Box>
        </Box>



    );
};

export default Pernod;
