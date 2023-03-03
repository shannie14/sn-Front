import { Box, useTheme } from "@mui/material";
import nbtv from "../img/channels.png"
import gn from "../img/GN.png"
import petportal from "../img/petportal.png"
import sn from "../img/SN.png"
import wip from "../img/WIP.png"
import { tokens } from "../theme"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// import { Kgolf } from "../components/Fetch/routes"


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

                <span><h2>Keynotes</h2></span>
            </Box >

            {isOpen1 && (
                <div className="image-row" >
                    <a href={"https://www.icloud.com/iclouddrive/0c9fTgbHcKLrxqSYve9Bd9CgQ#NBTV_CHANNELS"}><img src={nbtv} alt="nbtv channels" /></a>
                    <a href={"https://www.icloud.com/iclouddrive/0e6BNEAN50Buo9noobhwlYiZw#SPIRITS_NETWORK"}><img src={sn} alt="spirits network" /></a>
                    <a href={"https://www.icloud.com/iclouddrive/033JqPifoQtmEPoKVumNXvaRQ#GOLF_NATION"}><img src={gn} alt="golf nation" /></a>
                    <a href={"https://www.icloud.com/iclouddrive/04ayyuYZoxKaI5FFHGA05GYlg#PET_NETWORK"}><img src={petportal} alt="pet portal" /></a >
                    <a href={"https://www.icloud.com/iclouddrive/06bmzMVrJxvQYKNrPEUL6Sw2A#WIP"}><img src={wip} alt="pet portal" /></a >
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
                <span><h2>Sizzle Videos</h2></span> </Box >
            {isOpen2 && (<div>
                <li><a href='https://vimeo.com/762788390/4c7bd6d482'>Investor Sizzle</a></li>
                <li><a href='https://vimeo.com/676012054'>Spirits Network</a></li>
                <li><a href='https://vimeo.com/693683492'>Golf Nation</a></li>

            </div>)}

        </Box >
    );
};

export default Resources