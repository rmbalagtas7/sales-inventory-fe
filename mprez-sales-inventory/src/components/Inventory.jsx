import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, Typography, CssBaseline } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import CustomAppBar from "../layout/CustomAppbar";
import Sidebar, { AdminMenu } from "../layout/Sidebar";
import CustomBottomBar from "../layout/CustomBottombar";

const mockData = [
  {
    id: 1,
    date: "2024-10-09",
    papermill: "BPC (BUTTROLLS)",
    mpstWeight: 5188,
    paidWeight: 5188,
    pricePerKilo: 18.0,
    amount: 93384.0,
  },
  {
    id: 2,
    date: "2024-10-09",
    papermill: "BPC (GR T2 - 200)",
    mpstWeight: 812,
    paidWeight: 812,
    pricePerKilo: 27.0,
    amount: 21924.0,
  },
  {
    id: 3,
    date: "2024-10-09",
    papermill: "BPC (GR T1 - 200)",
    mpstWeight: 2253,
    paidWeight: 2253,
    pricePerKilo: 28.0,
    amount: 63084.0,
  },
  {
    id: 4,
    date: "2024-10-09",
    papermill: "BPC (CM-125)",
    mpstWeight: 6220,
    paidWeight: 6220,
    pricePerKilo: 23.0,
    amount: 143060.0,
  },
  {
    id: 5,
    date: "2024-10-09",
    papermill: "BPC (T1-200 HOLD)",
    mpstWeight: 1141,
    paidWeight: 1141,
    pricePerKilo: 25.0,
    amount: 28525.0,
  },
  {
    id: 6,
    date: "2024-10-15",
    papermill: "PACKAGEWORLD",
    mpstWeight: 6650,
    paidWeight: 6650,
    pricePerKilo: 19.25,
    amount: 128012.5,
  },
  {
    id: 7,
    date: "2024-10-17",
    papermill: "BPC (T2-140 HOLD)",
    mpstWeight: 2167,
    paidWeight: 2167,
    pricePerKilo: 24.0,
    amount: 52008.0,
  },
  {
    id: 8,
    date: "2024-10-17",
    papermill: "BPC (T2-140 MINI)",
    mpstWeight: 9376,
    paidWeight: 9376,
    pricePerKilo: 23.5,
    amount: 220336.0,
  },
  {
    id: 9,
    date: "2024-10-17",
    papermill: "BPC (T2-140 MINI)",
    mpstWeight: 4418,
    paidWeight: 4418,
    pricePerKilo: 24.0,
    amount: 106032.0,
  },
  {
    id: 10,
    date: "2024-10-30",
    papermill: "MALINTA",
    mpstWeight: 7960,
    paidWeight: 7960,
    pricePerKilo: 24.0,
    amount: 191540.0,
  },
  {
    id: 11,
    date: "2024-10-30",
    papermill: "PACKAGEWORLD",
    mpstWeight: 5740,
    paidWeight: 5740,
    pricePerKilo: 19.25,
    amount: 112495.0,
  },
];

const columns = [
  { field: "date", headerName: "Date", width: 180, headerAlign: "center" },
  {
    field: "papermill",
    headerName: "Papermill",
    width: 250,
    headerAlign: "center",
  },
  {
    field: "mpstWeight",
    headerName: "MPST Weight",
    width: 220,
    headerAlign: "center",
  },
  {
    field: "paidWeight",
    headerName: "Paid Weight",
    width: 220,
    headerAlign: "center",
  },
  {
    field: "pricePerKilo",
    headerName: "Price per Kilo",
    width: 220,
    headerAlign: "center",
  },
  { field: "amount", headerName: "Amount", width: 260, headerAlign: "center" },
  {
    field: "action",
    headerName: "Action",
    width: 250,
    headerAlign: "center",
    renderCell: (params) => {
      const handleEdit = () => {
        alert(`Editing row with id: ${params.row.id}`);
      };
      const handleDelete = () => {
        if (
          window.confirm(
            `Are you sure you want to delete row with id: ${params.row.id}?`
          )
        ) {
          alert(`Deleted row with id: ${params.row.id}`);
        }
      };

      return (
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleEdit}
            style={{ marginRight: 8 }}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];

const calculateTotals = (data) => {
  const totalMpstWeight = data.reduce((acc, row) => acc + row.mpstWeight, 0);
  const totalPaidWeight = data.reduce((acc, row) => acc + row.paidWeight, 0);
  const totalPricePerKilo = data.reduce(
    (acc, row) => acc + row.pricePerKilo,
    0
  );
  const totalAmount = data.reduce((acc, row) => acc + row.amount, 0);

  return {
    id: "totals",
    date: "Total",
    papermill: "",
    mpstWeight: totalMpstWeight,
    paidWeight: totalPaidWeight,
    pricePerKilo: totalPricePerKilo,
    amount: totalAmount,
  };
};

export default function Inventory() {
  const [rows, setRows] = React.useState(mockData);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  // Filter rows based on selected date range
  const filteredRows = rows.filter((row) => {
    const rowDate = new Date(row.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && rowDate < start) return false;
    if (end && rowDate > end) return false;
    return true;
  });

  const totalsRow = calculateTotals(filteredRows);

  const rowsWithTotals = [...filteredRows, totalsRow];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <CssBaseline />
      <CustomAppBar />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: { xs: "100%", md: "calc(100% - 300px)" }, // Adjust for smaller screens
            overflowX: "auto",
            marginTop: "4em",
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            BIG ROLLS / BUTT ROLLS
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              gap={2}
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={2}
              >
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => <Box {...params} />}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                />
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  renderInput={(params) => <Box {...params} />}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                />
              </Box>

              {/* Button aligned to the right */}
              <Button
                variant="contained"
                color="primary"
                onClick={() => alert("Apply filter")}
                startIcon={<AddIcon />}
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                Add Product
              </Button>
            </Box>
          </LocalizationProvider>

          <DataGrid
            rows={rowsWithTotals}
            columns={columns}
            pageSize={5}
            loading={false}
            slots={{ toolbar: GridToolbar }}
            getRowId={(row) => row.id}
            sx={{
              "& .MuiDataGrid-cell": {
                textAlign: "center",
              },
              "& .MuiDataGrid-footerCell": {
                fontWeight: "bold",
              },
              "& .MuiDataGrid-columnHeaders": {
                textAlign: "center",
              },
            }}
          />
        </Box>
      </Box>
      <CustomBottomBar menu={AdminMenu} />
    </Box>
  );
}
