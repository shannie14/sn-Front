import React from "react";
import { useEffect, useState } from "react"
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../visuals/Header";
import { useTheme } from "@mui/material";


const Waterford = () => {

  const columns = [
    {
      field: "campaign",
      headerName: "CAMPAIGN",
      flex: 1,
      minWidth: 200
    },

    {
      field: "live",
      headerName: "LAUNCH",
      flex: 1,
    },
    {
      field: "imp_total",
      headerName: "IMPRESSIONS",
      flex: 1,
    },
    {
      field: "view_total",
      headerName: "VIEWS",
      flex: 1,
    },
    {
      field: "signup",
      headerName: "SIGN-UPS",
      flex: 1,
    },
  ];


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [brands, setBrands] = useState([])

  //occurs after render
  useEffect(() => {
    const fetchBrands = async () => {
      //initiate HTTP request
      const response = await fetch('/campaigns/waterford')
      const json = await response.json()

      const formattedBrands = json.map(brand => {
        for (const [key, value] of Object.entries(brand)) {
          if (typeof value === 'number') {
            brand[key] = value.toLocaleString();
          }
        }
        return brand;
      })

      if (response.ok) {
        setBrands(formattedBrands)
      }
    }

    fetchBrands()
  }, []);


  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="30vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "16px",

          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: "14px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
            maxHeight: 50,
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

export default Waterford;