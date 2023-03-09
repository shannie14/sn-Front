import React from "react";
import Header from "../components/visuals/Header";

//page components
import Camparibottles from "../components/Brands/Camparibottles";
import Camparicampaigns from "../components/Brands/Camparicampaigns";
// import MainCard from "../components/visuals/MainCard"
import Camparicard from "../components/Brands/Camparicard";

//architecture
import { Box } from "@mui/material";

//functiionality
const Campari = () => {


    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Campari" subtitle="Espolon" />
            </Box>

            <Camparicard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Camparicampaigns />
                <Camparibottles />

            </Box>
        </Box>



    );
};

export default Campari;
