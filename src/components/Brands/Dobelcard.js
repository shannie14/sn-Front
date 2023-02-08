import React from "react";
import { useEffect, useState } from "react"
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import Grid from '@material-ui/core/Grid';

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            dark: '#009688',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    box: {
        backgroundColor: theme.palette.primary.light,
        height: '100px',
        width: '100px',
    },
}));


function Dobelcard() {

    const [sales, setSales] = useState([])
    const classes = useStyles();

    useEffect(() => {
        const fetchSales = async () => {

            const response = await fetch('/sales/dobel')
            const json = await response.json()

            const formattedBrands = json.map(sale => {
                for (const [key, value] of Object.entries(sale)) {
                    if (typeof value === 'number') {
                        sale[key] = value.toLocaleString();
                    }
                }
                return sale;
            })

            if (response.ok) {
                setSales(formattedBrands)
            }
        }

        fetchSales()


    }, []);


    return (

        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            boxShadow: 1,
                            borderRadius: 2,
                            p: 2,
                            maxWidth: 300,
                            color: 'black',
                            marginLeft: 2,
                        }}
                    >
                        <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6} sx={{ color: 'text.secondary' }}> Product Sales</Grid>
                            <Grid item xs={6} sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>Units Sold</Grid>
                            <Grid item xs={6} sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}><h2>$5,388</h2></Grid>
                            <Grid item xs={6} sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}><h2>119</h2></Grid>
                        </Grid>
                    </Box>

                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            boxShadow: 1,
                            borderRadius: 2,
                            p: 2,
                            maxWidth: 300,
                            color: 'black',
                            marginLeft: 2,
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} sx={{ color: 'text.secondary' }}> Impressions</Grid>
                            <Grid item xs={12} sm={6}>Views</Grid>
                            <Grid item xs={12} sm={6} sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}><h2>2,446,302</h2></Grid>
                            <Grid item xs={12} sm={6} sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}><h2>647,583</h2></Grid>
                        </Grid>
                    </Box>

                </Grid>
            </ThemeProvider >

        </div >

    );
}

export default Dobelcard;
