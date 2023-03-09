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
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

// import { Kgolf } from "../components/Fetch/routes"


const Resources = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //toggle
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleOpen1 = () => { setIsOpen1(!isOpen1); }
    const toggleOpen2 = () => { setIsOpen2(!isOpen2); }


    function handleClick() {
        window.location.href = 'https://docs.google.com/spreadsheets/d/14iURe81JuMUMh0kViVpwnvyUUcTGRHfTJTRTmtngevk/edit?usp=sharing';
    }

    function contacts() {
        window.location.href = 'https://docs.google.com/spreadsheets/d/1JRVNRSwo-pBaeK4Y6qNCehsSAPOtM6fxf20oo6wymVw/edit?usp=sharing';
    }


    return (
        <Box m="20px">

            {/* HEADER */}
            < Box display="flex" flexDirection="row" alignItems="left" >

                <button style={{ backgroundColor: 'transparent', color: colors.grey[100], borderWidth: 0 }}

                    onClick={toggleOpen1}>{isOpen1 ? <KeyboardArrowDownOutlinedIcon /> : <ArrowForwardIosOutlinedIcon />}
                </button>

                <span><h3>Keynotes</h3></span>
            </Box >

            {isOpen1 && (
                <div>
                    <div className="image-row" >
                        <a href={"https://www.icloud.com/iclouddrive/0c9fTgbHcKLrxqSYve9Bd9CgQ#NBTV_CHANNELS"}><img src={nbtv} alt="nbtv channels" /></a>
                        <a href={"https://www.icloud.com/iclouddrive/0e6BNEAN50Buo9noobhwlYiZw#SPIRITS_NETWORK"}><img src={sn} alt="spirits network" /></a>
                        <a href={"https://www.icloud.com/iclouddrive/033JqPifoQtmEPoKVumNXvaRQ#GOLF_NATION"}><img src={gn} alt="golf nation" /></a>
                        <a href={"https://www.icloud.com/iclouddrive/04ayyuYZoxKaI5FFHGA05GYlg#PET_NETWORK"}><img src={petportal} alt="pet portal" /></a >
                        <a href={"https://www.icloud.com/iclouddrive/06bmzMVrJxvQYKNrPEUL6Sw2A#WIP"}><img src={wip} alt="pet portal" /></a >
                    </div >
                    <Link to="https://docsend.com/view/p8hcenbddzxve9nv">
                        <button style={{
                            height: "25px",
                            padding: "20px",
                            fontSize: "1.2em",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "25px",
                            fontWeight: 500,
                            // dropShadow: ("16px", "16px", "10px", "#000"),

                        }}><InfoOutlinedIcon />&nbsp; How To Upload To DocSend</button>
                    </Link>
                </div>)
            }

            < Box display="flex" flexDirection="row" alignItems="left" >
                <button style={{ backgroundColor: 'transparent', color: colors.grey[100], borderWidth: 0 }} onClick={toggleOpen2}>
                    {isOpen2 ? <KeyboardArrowDownOutlinedIcon /> : <ArrowForwardIosOutlinedIcon />}
                </button>
                <span><h3>Sizzle Videos</h3></span> </Box >
            {
                isOpen2 && (<div>
                    <li><a href=' https://vimeo.com/672698676/a652a940d9'>NBTV Channels 2023 Sizzle</a></li>
                    <li><a href='https://vimeo.com/676012054'>Spirits Network</a></li>
                    <li><a href='https://vimeo.com/693683492'>Golf Nation</a></li>

                </div>)
            }

            < Box display="flex" flexDirection="row" alignItems="left" >
                <button style={{ backgroundColor: 'transparent', color: colors.grey[100], borderWidth: 0 }} onClick={handleClick}>
                    {<CampaignOutlinedIcon />}
                </button>
                <h3 style={{ cursor: 'pointer' }} onClick={handleClick}>Press</h3>
            </Box >

            < Box display="flex" flexDirection="row" alignItems="left" >
                <button style={{ backgroundColor: 'transparent', color: colors.grey[100], borderWidth: 0 }} onClick={contacts}>
                    {<PeopleOutlineOutlinedIcon />}
                </button>
                <h3 style={{ cursor: 'pointer' }} onClick={contacts}>Employee Directory</h3>
            </Box >

        </Box >
    )
}

export default Resources