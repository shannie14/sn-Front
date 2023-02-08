import React from "react";
import { useEffect, useState } from "react"
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";

import Header from "./visuals/Header";
import { useTheme } from "@mui/material";

const SNcampaigns = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [brands, setBrands] = useState([])

    //occurs after render
    useEffect(() => {
        const fetchBrands= async () => {
            //initiate HTTP request
            const response = await fetch('/campaigns')
            const json = await response.json()
            // Loop through each object returned from backend
            const formattedBrands = json.map(brand => {
              // Loop through each key and check to see if its a number, if it is, convert it to have commas
              for (const [key, value] of Object.entries(brand)) {
                if (typeof value === 'number') {
                  brand[key] = value.toLocaleString();
                }
              }
              return brand;
            });

              if (response.ok) {
                  setBrands(formattedBrands)
              }
          }

        fetchBrands()
    }, [])

    const columns = [
        {
            field: "client", 
            headerName: "Client", 
            flex: 1,
            cellClassName: "client-column--cell",
        },
        {
            field: "campaign", 
            headerName: "Campaign",
            flex: 1,
        },
        {
            field: "live", 
            headerName: "Launch Date",
            flex: 1,
        },
        {
            field: "imp_total", 
            headerName: "Impressions",
            flex: 1,
        },
        {
            field: "view_total", 
            headerName: "Views",
            flex: 1,
        },
        {
            field: "signup", 
            headerName: "Sign-ups",
            flex: 1,
        },
  ];

  return (
    <Box m="20px">
      <Header
        title="SN CLIENT CAMPAIGNS"
        subtitle="since 2021"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row._id}
          rows={brands}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default SNcampaigns;