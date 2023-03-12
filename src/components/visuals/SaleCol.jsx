import { GridColDef} from "@mui/x-data-grid";

const SaleCol: GridColDef[] = [
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
      valueFormatter: ({ value }) => (value ?? 0).toLocaleString(),
      sortComparator: (v1, v2) => Number(v1) - Number(v2),
    },
    {
      field: "salesT",
      headerName: "ALL SALES",
      flex: 1,
  valueFormatter: ({ value }) => (value ?? 0).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
            }),
      sortComparator: (v1, v2) => Number(v1) - Number(v2),

    },
    {
      field: "units23",
      headerName: "2023",
      flex: 1,
      cellClassName: 'years',
      valueFormatter: ({ value }) => (value ?? 0).toLocaleString(),
      sortComparator: (v1, v2) => Number(v1) - Number(v2),

    },
    {
      field: "sales23",
      headerName: "",
      flex: 1,
      cellClassName: 'years',
  valueFormatter: ({ value }) => (value ?? 0).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
            }),
      sortComparator: (v1, v2) => Number(v1) - Number(v2),

    },
    {
      field: "units22",
      headerName: "2022",
      flex: 1,
      valueFormatter: ({ value }) => (value ?? 0).toLocaleString(),
      sortComparator: (v1, v2) => Number(v1) - Number(v2),
    },
    {
      field: "sales22",
      headerName: "",
      flex: 1,
  valueFormatter: ({ value }) => (value ?? 0).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
            }),
      sortComparator: (v1, v2) => Number(v1) - Number(v2),    

    },
    {
      field: "units21",
      headerName: "2021",
      flex: 1,
      cellClassName: 'years',
      valueFormatter: ({ value }) => (value ?? 0).toLocaleString(),
      sortComparator: (v1, v2) => Number(v1) - Number(v2),

    },
    {
      field: "sales21",
      headerName: "",
      flex: 1,
      cellClassName: 'years',
   valueFormatter: ({ value }) => (value ?? 0).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
            }),
      sortComparator: (v1, v2) => Number(v1) - Number(v2), 
    }
  ];

  export default SaleCol;