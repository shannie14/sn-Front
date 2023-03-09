import React from "react";
import Header from "../components/visuals/Header";

//page components
import Whipbottles from "../components/Brands/Whipbottles";
import Whipcampaigns from "../components/Brands/Whipcampaigns";
import Whipcard from "../components/Brands/Whipcard"

//architecture
import { Box } from "@mui/material";


//functiionality
const Whipshots = () => {


    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="WhipShots" />
            </Box>

            <Whipcard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Whipcampaigns />
                <Whipbottles />

            </Box>
        </Box>



    );
};

export default Whipshots;
