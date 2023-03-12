import React from "react";
import Pitch from "../components/visuals/carousel";
import Grid from '@material-ui/core/Grid';


const BD = () => {

    return (

        <Grid container spacing={3} className="single">
            <Grid item xs={12}>
                <Pitch />
            </Grid>
            <Grid item xs={3}>
                <ul className="BDsteps">
                    <li>1. Schedule a kick-off meeting</li>
                    <li>2. Create and share project brief <a className="BDlinks" href="https://example.com">example of what AJ writes</a></li>
                    <li>3. Set-up the campaign in
                        <a className="BDlinks" href="https://example.com"> Monday.com</a>
                    </li>
                </ul>
            </Grid>
            <Grid item xs={6}>
                <p>testing</p>
            </Grid>
        </Grid>


    );

}
export default BD;

