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

// Updated Mock Data with New Fields
const mockData = [
  {
    id: 1,
    date: "2024-10-09",
    customer: "Customer A",
    address: "123 Street, City",
    items: "Item 1, Item 2",
    qty: 10,
    unit: "kg",
    receiptNo: "R12345",
    unitPrice: 18.0,
    amount: 180.0,
    paymentTerms: "Net 30",
    notes: "Urgent delivery",
  },
  {
    id: 2,
    date: "2024-10-09",
    customer: "Customer B",
    address: "456 Avenue, City",
    items: "Item 3",
    qty: 5,
    unit: "pcs",
    receiptNo: "R12346",
    unitPrice: 27.0,
    amount: 135.0,
    paymentTerms: "Net 15",
    notes: "Special discount",
  },
  {
    id: 3,
    date: "2024-10-09",
    customer: "Customer C",
    address: "789 Road, City",
    items: "Item 2, Item 4",
    qty: 8,
    unit: "kg",
    receiptNo: "R12347",
    unitPrice: 25.0,
    amount: 200.0,
    paymentTerms: "Net 45",
    notes: "Standard delivery",
  },
  {
    id: 4,
    date: "2024-10-10",
    customer: "Customer D",
    address: "101 Blvd, Town",
    items: "Item 1, Item 5",
    qty: 12,
    unit: "kg",
    receiptNo: "R12348",
    unitPrice: 22.0,
    amount: 264.0,
    paymentTerms: "Net 30",
    notes: "Priority delivery",
  },
  {
    id: 5,
    date: "2024-10-11",
    customer: "Customer E",
    address: "202 Lane, Village",
    items: "Item 3, Item 6",
    qty: 15,
    unit: "pcs",
    receiptNo: "R12349",
    unitPrice: 30.0,
    amount: 450.0,
    paymentTerms: "Net 60",
    notes: "Late delivery accepted",
  },
  {
    id: 6,
    date: "2024-10-12",
    customer: "Customer F",
    address: "303 Road, City",
    items: "Item 7",
    qty: 20,
    unit: "kg",
    receiptNo: "R12350",
    unitPrice: 18.5,
    amount: 370.0,
    paymentTerms: "Net 30",
    notes: "Urgent restock",
  },
  {
    id: 7,
    date: "2024-10-13",
    customer: "Customer G",
    address: "404 Ave, City",
    items: "Item 1, Item 8",
    qty: 9,
    unit: "kg",
    receiptNo: "R12351",
    unitPrice: 20.0,
    amount: 180.0,
    paymentTerms: "Net 45",
    notes: "Requires custom packaging",
  },
  {
    id: 8,
    date: "2024-10-14",
    customer: "Customer H",
    address: "505 Street, City",
    items: "Item 9, Item 10",
    qty: 7,
    unit: "pcs",
    receiptNo: "R12352",
    unitPrice: 40.0,
    amount: 280.0,
    paymentTerms: "Net 30",
    notes: "Need for expedited delivery",
  },
  {
    id: 9,
    date: "2024-10-15",
    customer: "Customer I",
    address: "606 Road, Town",
    items: "Item 11, Item 12",
    qty: 6,
    unit: "kg",
    receiptNo: "R12353",
    unitPrice: 50.0,
    amount: 300.0,
    paymentTerms: "Net 30",
    notes: "Bulk order",
  },
  {
    id: 10,
    date: "2024-10-16",
    customer: "Customer J",
    address: "707 Ave, Village",
    items: "Item 13, Item 14",
    qty: 14,
    unit: "pcs",
    receiptNo: "R12354",
    unitPrice: 33.0,
    amount: 462.0,
    paymentTerms: "Net 15",
    notes: "High priority",
  },
  {
    id: 11,
    date: "2024-10-17",
    customer: "Customer K",
    address: "808 Blvd, City",
    items: "Item 15, Item 16",
    qty: 10,
    unit: "kg",
    receiptNo: "R12355",
    unitPrice: 15.0,
    amount: 150.0,
    paymentTerms: "Net 30",
    notes: "Standard delivery",
  },
  {
    id: 12,
    date: "2024-10-18",
    customer: "Customer L",
    address: "909 Road, City",
    items: "Item 17",
    qty: 11,
    unit: "pcs",
    receiptNo: "R12356",
    unitPrice: 26.0,
    amount: 286.0,
    paymentTerms: "Net 60",
    notes: "Discount applied",
  },
  {
    id: 13,
    date: "2024-10-19",
    customer: "Customer M",
    address: "1001 Street, Town",
    items: "Item 18, Item 19",
    qty: 5,
    unit: "kg",
    receiptNo: "R12357",
    unitPrice: 24.0,
    amount: 120.0,
    paymentTerms: "Net 30",
    notes: "Packaging required",
  },
  {
    id: 14,
    date: "2024-10-20",
    customer: "Customer N",
    address: "1102 Ave, City",
    items: "Item 1, Item 2",
    qty: 6,
    unit: "pcs",
    receiptNo: "R12358",
    unitPrice: 22.5,
    amount: 135.0,
    paymentTerms: "Net 30",
    notes: "No special requirements",
  },
  {
    id: 15,
    date: "2024-10-21",
    customer: "Customer O",
    address: "1203 Road, Village",
    items: "Item 20",
    qty: 4,
    unit: "kg",
    receiptNo: "R12359",
    unitPrice: 30.0,
    amount: 120.0,
    paymentTerms: "Net 15",
    notes: "Expedited shipping",
  },
  {
    id: 16,
    date: "2024-10-22",
    customer: "Customer P",
    address: "1304 Blvd, Town",
    items: "Item 2, Item 5",
    qty: 9,
    unit: "kg",
    receiptNo: "R12360",
    unitPrice: 40.0,
    amount: 360.0,
    paymentTerms: "Net 30",
    notes: "Priority delivery",
  },
  {
    id: 17,
    date: "2024-10-23",
    customer: "Customer Q",
    address: "1405 Ave, City",
    items: "Item 7, Item 6",
    qty: 8,
    unit: "pcs",
    receiptNo: "R12361",
    unitPrice: 19.0,
    amount: 152.0,
    paymentTerms: "Net 30",
    notes: "Restock",
  },
  {
    id: 18,
    date: "2024-10-24",
    customer: "Customer R",
    address: "1506 Road, Village",
    items: "Item 9",
    qty: 15,
    unit: "pcs",
    receiptNo: "R12362",
    unitPrice: 35.0,
    amount: 525.0,
    paymentTerms: "Net 45",
    notes: "High demand",
  },
  {
    id: 19,
    date: "2024-10-25",
    customer: "Customer S",
    address: "1607 Ave, City",
    items: "Item 3, Item 4",
    qty: 12,
    unit: "kg",
    receiptNo: "R12363",
    unitPrice: 27.5,
    amount: 330.0,
    paymentTerms: "Net 30",
    notes: "No rush",
  },
  {
    id: 20,
    date: "2024-10-26",
    customer: "Customer T",
    address: "1708 Blvd, Town",
    items: "Item 5, Item 10",
    qty: 18,
    unit: "kg",
    receiptNo: "R12364",
    unitPrice: 22.0,
    amount: 396.0,
    paymentTerms: "Net 60",
    notes: "Special handling",
  }
];


// Updated Columns to match the new structure
const columns = [
  { field: "date", headerName: "Date", width: 180, headerAlign: "center" },
  { field: "customer", headerName: "Customer", width: 200, headerAlign: "center" },
  { field: "address", headerName: "Address", width: 300, headerAlign: "center" },
  { field: "items", headerName: "Items", width: 220, headerAlign: "center" },
  { field: "qty", headerName: "Quantity", width: 150, headerAlign: "center" },
  { field: "unit", headerName: "Unit", width: 100, headerAlign: "center" },
  { field: "receiptNo", headerName: "Receipt No", width: 150, headerAlign: "center" },
  { field: "unitPrice", headerName: "Unit Price", width: 150, headerAlign: "center" },
  { field: "amount", headerName: "Amount", width: 180, headerAlign: "center" },
  { field: "paymentTerms", headerName: "Payment Terms", width: 180, headerAlign: "center" },
  { field: "notes", headerName: "Notes", width: 250, headerAlign: "center" },
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
        if (window.confirm(`Are you sure you want to delete row with id: ${params.row.id}?`)) {
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
  const totalAmount = data.reduce((acc, row) => acc + row.amount, 0);

  return {
    id: "totals",
    date: "Total",
    customer: "",
    address: "",
    items: "",
    qty: "",
    unit: "",
    receiptNo: "",
    unitPrice: "",
    amount: totalAmount,
    paymentTerms: "",
    notes: "",
  };
};

export default function Sales() {
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
            marginTop: "em",
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Sales
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              gap={2}
              alignItems="center"
            >
              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
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
                Add Sales
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
