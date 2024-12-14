import * as React from "react";
import { Box, Button, Typography, CssBaseline, Grid, Card, CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import CustomAppBar from "../layout/CustomAppbar";
import Sidebar, { AdminMenu } from "../layout/Sidebar";
import CustomBottomBar from "../layout/CustomBottombar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

// Mock Data
const mockInventoryData = [
  { id: 1, product: "Product 1", quantity: 50, price: 20.0 },
  { id: 2, product: "Product 2", quantity: 200, price: 15.0 },
  { id: 3, product: "Product 3", quantity: 100, price: 30.0 },
];

const mockSalesData = [
  { id: 1, product: "Product 1", quantity: 5, price: 20.0, total: 100.0 },
  { id: 2, product: "Product 2", quantity: 3, price: 15.0, total: 45.0 },
  { id: 3, product: "Product 3", quantity: 2, price: 30.0, total: 60.0 },
];

// Metrics and Columns for the Dashboard
const inventoryColumns = [
  { field: "product", headerName: "Product", width: 180, headerAlign: "center" },
  { field: "quantity", headerName: "Quantity", width: 180, headerAlign: "center" },
  { field: "price", headerName: "Price", width: 180, headerAlign: "center" },
];

const salesColumns = [
  { field: "product", headerName: "Product", width: 180, headerAlign: "center" },
  { field: "quantity", headerName: "Quantity", width: 180, headerAlign: "center" },
  { field: "price", headerName: "Price", width: 180, headerAlign: "center" },
  { field: "total", headerName: "Total", width: 180, headerAlign: "center" },
];

export default function Dashboard() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

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
            maxWidth: { xs: "100%", md: "calc(100% - 300px)" },
            overflowX: "auto",
            marginTop: "4em",
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Dashboard
          </Typography>

          {/* Overview Section */}
          <Grid container spacing={2}>
            {/* Total Earnings */}
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Earnings</Typography>
                  <Typography variant="h5">$500.00</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Orders */}
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Orders</Typography>
                  <Typography variant="h5">$961</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Income */}
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Income</Typography>
                  <Typography variant="h5">$203K</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Growth Chart */}
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Growth</Typography>
                  <Typography variant="h5">$2,324.00</Typography>
                  {/* Insert a growth chart component here */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Inventory Section */}
          <Typography variant="h6" gutterBottom>
            Inventory
          </Typography>
          <DataGrid
            rows={mockInventoryData}
            columns={inventoryColumns}
            pageSize={5}
            loading={false}
            getRowId={(row) => row.id}
            sx={{
              height: 300,
              "& .MuiDataGrid-cell": {
                textAlign: "center",
              },
            }}
          />

          {/* Sales Section */}
          <Typography variant="h6" gutterBottom>
            Sales
          </Typography>
          <DataGrid
            rows={mockSalesData}
            columns={salesColumns}
            pageSize={5}
            loading={false}
            getRowId={(row) => row.id}
            sx={{
              height: 300,
              "& .MuiDataGrid-cell": {
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
