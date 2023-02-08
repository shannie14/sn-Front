import React from "react";
import Header from "../components/visuals/Header";
import { tokens } from "../theme";


//page components
import Bacardibottles from "../components/Brands/Bacardibottles";
import Bacardicampaigns from "../components/Brands/Bacardicampaigns";
// import MainCard from "../components/visuals/MainCard"
import Bacardicard from "../components/Brands/Bacardicard"

//architecture
import { Box, useTheme } from "@mui/material";



//functiionality
const Bacardi = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Bacardi" />
            </Box>

            <Bacardicard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Bacardicampaigns />
                <Bacardibottles />

            </Box>
        </Box>



    );
};

export default Bacardi;
