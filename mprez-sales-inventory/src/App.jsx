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

import DashboardLayoutBasic from './components/Dashboard.jsx'
import Auth from "./components/Auth.jsx";
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
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<DashboardLayoutBasic />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
