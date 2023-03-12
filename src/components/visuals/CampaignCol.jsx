const campaignColumns = [
    {
      field: "campaign",
      headerName: "CAMPAIGN",
      flex: 0.5,
      minWidth: 200
    },
    {
      field: "live",
      headerName: "LAUNCH",
      flex: 0.3,
    },
    {
      field: "imp_total",
      headerName: "IMPRESSIONS",
      flex: 0.3,
      valueFormatter: ({ value }) => value !== undefined ? value.toLocaleString() : "",
      sortComparator: (v1, v2) => Number(v1) - Number(v2),
      cellClassName: 'years',
    },

    {
      field: "imp_min",
      headerName: "GUARANTEED IMP",
      flex: 0.3,
      valueFormatter: ({ value }) => value !== undefined ? value.toLocaleString() : "",
      sortComparator: (v1, v2) => Number(v1) - Number(v2),     
    },
    {
      field: "view_total",
      headerName: "VIEWS",
      flex: 0.3,
      valueFormatter: ({ value }) => value !== undefined ? value.toLocaleString() : "",
      sortComparator: (v1, v2) => Number(v1) - Number(v2),
      cellClassName: 'years',
    },
     {
      field: "view_min",
      headerName: "GUARANTEED VIEWS",
      flex: 0.3,
      valueFormatter: ({ value }) => value !== undefined ? value.toLocaleString() : "",
      sortComparator: (v1, v2) => Number(v1) - Number(v2),
    },
    {
      field: "signup",
      headerName: "SIGN-UPS",
      flex: 0.2,
      valueFormatter: ({ value }) => value !== undefined ? value.toLocaleString() : "",
      sortComparator: (v1, v2) => Number(v1) - Number(v2),
    },
  ];

  export default campaignColumns