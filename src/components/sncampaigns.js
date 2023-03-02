import React from "react";
import { useEffect, useState } from "react"
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const SNcampaigns = () => {
  console.log('server url is: ', process.env.REACT_APP_SERVER_URL)

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const sncolumns = [
    {
      field: "client",
      headerName: "Client",
      flex: 0.5,
    },
    {
      field: "brand",
      headerName: "Brand",
      flex: 0.5,
    },
    {
      field: "campaign",
      headerName: "Campaign",
      flex: 0.5,
    },
    {
      field: "live",
      headerName: "Launch Date",
      flex: 0.5,
    },
    {
      field: "imp_total",
      headerName: "Impressions",
      flex: 0.5,
      type: "number",
    },
    {
      field: "view_total",
      headerName: "Views",
      flex: 0.5,
      type: "number"

    },
    {
      field: "signup",
      headerName: "Sign-ups",
      flex: 0.5,
      type: "number"

    },
  ];

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

        // for (const [key, value] of Object.entries(brand)) {
        //   if (typeof value === 'number') {
        //     brand[key] = value.toLocaleString();
        //   }
        // }
        return brand;
      }
      );

      if (response.ok) {
        setBrands(formattedBrands)
      }
    }


    fetchBrands()
  }, []);

  return (
    <Box m="20px">
      <h2>SN CLIENT CAMPAIGNS</h2>
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
          columns={sncolumns}
          components={{ Toolbar: GridToolbar }}
          sortingOrder={['desc', 'asc']}


        />
      </Box>
    </Box>
  );
};

export default SNcampaigns;