import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Auth from "./components/Auth.jsx";
import Inventory from "./components/Inventory.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Sales from "./components/Sales.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f9152", // Custom primary color
      contrastText: "#fff", // Text color
    }
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
