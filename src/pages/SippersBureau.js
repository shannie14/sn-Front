import React from "react";

//page components
import TastingKits from "../components/Brands/TastingKits"

//architecture
import { Box } from "@mui/material";


//functiionality
const SippesBureau = () => {


    //display
    return (
        <Box m="20px">

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <TastingKits />

            </Box>
        </Box>



    );
};

export default SippesBureau;
