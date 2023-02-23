import { Box, useTheme } from "@mui/material";
import nbtv from "../img/channels.png"
import gn from "../img/GN.png"
import petportal from "../img/petportal.png"
import sn from "../img/SN.png"
import { tokens } from "../theme"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const Resources = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //toggle
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    const toggleOpen1 = () => { setIsOpen1(!isOpen1); }
    const toggleOpen2 = () => { setIsOpen2(!isOpen2); }

    return (
        <Box m="20px">

            {/* HEADER */}
            < Box display="flex" flexDirection="row" alignItems="left" >

                <button style={{ backgroundColor: 'transparent', color: colors.grey[100], borderWidth: 0 }}

                    onClick={toggleOpen1}>{isOpen1 ? <KeyboardArrowDownOutlinedIcon /> : <ArrowForwardIosOutlinedIcon />}
                </button>

                <span><h1>Keynotes</h1></span>
            </Box >

            {isOpen1 && (
                <div className="image-row" >
                    <a href={"https://www.icloud.com/iclouddrive/0c9fTgbHcKLrxqSYve9Bd9CgQ#NBTV_CHANNELS"}><img src={nbtv} alt="nbtv channels" /></a>
                    <a href={"https://www.icloud.com/iclouddrive/0e6BNEAN50Buo9noobhwlYiZw#SPIRITS_NETWORK"}><img src={sn} alt="spirits network" /></a>
                    <a href={"https://www.icloud.com/iclouddrive/033JqPifoQtmEPoKVumNXvaRQ#GOLF_NATION"}><img src={gn} alt="golf nation" /></a>

                    <a href={"https://www.icloud.com/iclouddrive/04ayyuYZoxKaI5FFHGA05GYlg#PET_NETWORK"}><img src={petportal} alt="pet portal" /></a >
                </div >)
            }

            <Link to="https://docsend.com/view/p8hcenbddzxve9nv">
                <button style={{
                    height: "25px",
                    padding: "20px",
                    fontFamily: "Arial",
                    fontSize: "1.3em",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "25px",
                    fontWeight: 700

                }}><InfoOutlinedIcon />&nbsp; How To Upload To DocSend</button>
            </Link>

            <br></br>

            < Box display="flex" flexDirection="row" alignItems="left" >
                <button style={{ backgroundColor: 'transparent', color: colors.grey[100], borderWidth: 0 }} onClick={toggleOpen2}>
                    {isOpen2 ? <KeyboardArrowDownOutlinedIcon /> : <ArrowForwardIosOutlinedIcon />}
                </button>
                <span><h1>Sizzle Videos</h1></span> </Box >
            {isOpen2 && (<div>
                <li>Investor Sizzle</li>
                <li>Spirits, Golf & Cannabis</li>
                <li>Spirits Network</li>
                <li>Golf Nation</li>

            </div>)}

        </Box >
    );
};

export default Resources