import React from "react";
import Pitch from "../components/visuals/carousel";
import Grid from '@material-ui/core/Grid';


const BD = () => {

    return (

        <Grid container spacing={3} className="single">
            <Grid item xs={12} style={{ marginLeft: '20px', marginTop: '-20px' }}>
                <Pitch />
                <h2 style={{ marginLeft: '20px', marginBottom: '-10px' }}>Once the Deal is Closed:</h2>
                <ul className="BDsteps">
                    <li>1. Schedule a kick-off meeting</li>
                    <li>2. Create and share project brief • <a className="BDlinks" href="https://docs.google.com/document/d/1RiU1dsyLjOoNVJ97LwivAaJkFUrbNtoxTww8_0COzRE/edit?usp=share_link">click for example</a></li>
                    <li>3. Set-up the campaign in
                        <a className="BDlinks" href="https://spiritsnetwork-team.monday.com/"> Monday.com</a>
                    </li>
                </ul>
            </Grid>
        </Grid>


    );

}
export default BD;

