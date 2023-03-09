import React from "react";
import Header from "../components/visuals/Header";


//page components
import Proximobottles from "../components/Brands/Proximobottles";
import Proximocampaigns from "../components/Brands/Proximocampaigns";
// import MainCard from "../components/visuals/MainCard",
import Proximocard from "../components/Brands/Proximocard"

//architecture
import { Box, useTheme } from "@mui/material";



//functiionality
const Proximo = () => {

    const theme = useTheme();


    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Proximo Ricard" subtitle="Stranahans" />
            </Box>

            <Proximocard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Proximocampaigns />
                <Proximobottles />

            </Box>
        </Box>



    );
};

export default Proximo;
