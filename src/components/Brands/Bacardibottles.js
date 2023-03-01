import React from "react";
import { useEffect, useState } from "react"
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import { useTheme } from "@mui/material";

function Bacardibottles() {
  const columns = [
    {
      field: "product",
      headerName: "PRODUCT",
      flex: 1,
      minWidth: 200
    },
    {
      field: "unitsT",
      headerName: "ALL UNITS SOLD",
      flex: 1,
      sortComparator: (row1, row2) => {
        if (!row1) {
          return true;
        }
        if (!row2) {
          return true;
        }
        return parseInt(row1.replaceAll(',', '')) - parseInt(row2.replaceAll(',', ''));
      }
    },
    {
      field: "salesT",
      headerName: "ALL SALES",
      flex: 1,
      sortComparator: (row1, row2) => {
        if (!row1) {
          return true;
        }
        if (!row2) {
          return true;
        }
        return parseInt(row1.replaceAll(',', '')) - parseInt(row2.replaceAll(',', ''));
      }
    },
    {
      field: "units23",
      headerName: "2023",
      flex: 1,
      sortComparator: (row1, row2) => {
        if (!row1) {
          return true;
        }
        if (!row2) {
          return true;
        }
        return parseInt(row1.replaceAll(',', '')) - parseInt(row2.replaceAll(',', ''));
      }
    },
    {
      field: "sales23",
      headerName: "",
      flex: 1,
      sortComparator: (row1, row2) => {
        if (!row1) {
          return true;
        }
        if (!row2) {
          return true;
        }
        return parseInt(row1.replaceAll(',', '')) - parseInt(row2.replaceAll(',', ''));
      }
    },
    {
      field: "units22",
      headerName: "2022",
      flex: 1,
      sortComparator: (row1, row2) => {
        if (!row1) {
          return true;
        }
        if (!row2) {
          return true;
        }
        return parseInt(row1.replaceAll(',', '')) - parseInt(row2.replaceAll(',', ''));
      }
    },
    {
      field: "sales22",
      headerName: "",
      flex: 1,
      sortComparator: (row1, row2) => {
        if (!row1) {
          return true;
        }
        if (!row2) {
          return true;
        }
        return parseInt(row1.replaceAll(',', '')) - parseInt(row2.replaceAll(',', ''));
      }
    },
    {
      field: "units21",
      headerName: "2021",
      flex: 1,
      sortComparator: (row1, row2) => {
        if (!row1) {
          return true;
        }
        if (!row2) {
          return true;
        }
        return parseInt(row1.replaceAll(',', '')) - parseInt(row2.replaceAll(',', ''));
      }
    },
    {
      field: "sales21",
      headerName: "",
      flex: 1,
      sortComparator: (row1, row2) => {
        if (!row1) {
          return true;
        }
        if (!row2) {
          return true;
        }
        return parseInt(row1.replaceAll(',', '')) - parseInt(row2.replaceAll(',', ''));
      }
    },
  ];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [sales, setSales] = useState([])

  useEffect(() => {
    const fetchSales = async () => {

      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/sales/bacardi`)
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

  //gross
  // const sum = sales.reduce(())

  //accessing object properties




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
        <DataGrid
          getRowId={(row) => row._id}
          rows={sales}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};


export default Bacardibottles;