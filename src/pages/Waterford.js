import React from "react";
import Header from "../components/visuals/Header";
import { tokens } from "../theme";


//page components
import Waterfordbottles from "../components/Brands/Waterfordbottles";
import Waterfordcampaigns from "../components/Brands/Waterfordcampaigns";
// import MainCard from "../components/visuals/MainCard"
import Waterfordcard from "../components/Brands/Waterfordcard"

//architecture
import { Box, useTheme } from "@mui/material";



//functiionality
const Waterford = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Waterford" />
            </Box>

            <Waterfordcard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Waterfordcampaigns />
                <Waterfordbottles />

            </Box>
        </Box>



    );
};

export default Waterford;
