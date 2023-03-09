import React from "react";
import { useEffect, useState } from "react"
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

import SaleCol from "../visuals/SaleCol";

function TastingKits() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [sales, setSales] = useState([])

  useEffect(() => {
    const fetchSales = async () => {

      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/sales/tasting`)
      const json = await response.json()

      const formattedBrands = json.map(brand => {
        for (const [key, value] of Object.entries(brand)) {
          if (typeof value === 'number' && ['salesT', 'sales23', 'sales22', 'sales21', 'sales20'].includes(key)) {
            brand[key] = value.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            });
          }
        }
        return brand;
      })

      if (response.ok) { setSales(formattedBrands) }
    }
    fetchSales()
  }, [])


  return (

    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="50vh"
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
        <h3>Tasting Kits</h3>
        <DataGrid
          getRowId={(row) => row._id}
          rows={sales}
          columns={SaleCol}
          components={{ Toolbar: GridToolbar }}
          sortingOrder={['desc', 'asc']}
        />
      </Box>
    </Box>
  );
};


export default TastingKits;