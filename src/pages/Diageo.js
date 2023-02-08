import React from "react";
import Header from "../components/visuals/Header";
import { tokens } from "../theme";


//page components
import Diageobottles from "../components/Brands/Diageobottles";
import Diageocampaigns from "../components/Brands/Diageocampaigns";
// import MainCard from "../components/visuals/MainCard"
import Diageocard from "../components/Brands/Diageocard"

//architecture
import { Box, useTheme } from "@mui/material";



//functiionality
const Diageo = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Diageo" />
            </Box>

            <Diageocard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Diageocampaigns />
                <Diageobottles />

            </Box>
        </Box>



    );
};

export default Diageo;
