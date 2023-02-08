import React from "react";
import Header from "../components/visuals/Header";
import { tokens } from "../theme";


//page components
import Stranahansbottles from "../components/Brands/Stranahansbottles";
import Stranahanscampaigns from "../components/Brands/Stranahanscampaigns";
// import MainCard from "../components/visuals/MainCard"
import Stranahanscard from "../components/Brands/Stranahanscard"

//architecture
import { Box, useTheme } from "@mui/material";



//functiionality
const Stranahans = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Stranahans" />
            </Box>

            <Stranahanscard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Stranahanscampaigns />
                <Stranahansbottles />

            </Box>
        </Box>



    );
};

export default Stranahans;
