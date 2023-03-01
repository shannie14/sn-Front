import React from "react";
import { useEffect, useState } from "react"
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import Header from "../components/visuals/Header"

import campaignColumns from "../components/visuals/CampaignCol"

const SNcampaigns = () => {
  console.log('server url is: ', process.env.REACT_APP_SERVER_URL)

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [brands, setBrands] = useState([])
  console.log(brands);

  //occurs after render
  useEffect(() => {
    const fetchBrands = async () => {
      //initiate HTTP request
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/campaigns`)
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
  }, []);

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
          columns={campaignColumns}
          components={{ Toolbar: GridToolbar }}
          sortingOrder={['desc', 'asc']}
        />
      </Box>
    </Box>
  );
};

export default SNcampaigns;