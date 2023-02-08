import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';

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

function MainCard() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    maxWidth: 300,
                    marginBottom: '10px',
                }}
            >
                <Box sx={{ color: 'text.secondary' }}>Product Sales</Box>
                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                    98.3 K
                </Box>

            </Box>
        </ThemeProvider>
    );
}

export default MainCard;
