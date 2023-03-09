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
    },
    {
      field: "salesT",
      headerName: "ALL SALES",
      flex: 1,

    },
    {
      field: "units23",
      headerName: "2023",
      flex: 1,
      cellClassName: 'years',

    },
    {
      field: "sales23",
      headerName: "",
      flex: 1,
      cellClassName: 'years',

    },
    {
      field: "units22",
      headerName: "2022",
      flex: 1,

    },
    {
      field: "sales22",
      headerName: "",
      flex: 1,
     

    },
    {
      field: "units21",
      headerName: "2021",
      flex: 1,
       cellClassName: 'years',

    },
    {
      field: "sales21",
      headerName: "",
      flex: 1,
       cellClassName: 'years',
    }
  ];

  export default SaleCol;