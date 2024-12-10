import React, { useState } from "react";
import Image from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import {
  FormControlLabel,
  Card,
  Typography,
  Box,
  Button,
  CardContent,
  TextField,
  Checkbox,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GoogleIcon from "@mui/icons-material/Google";
import Grid from "@mui/material/Grid2";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../assets/logo.png";

export default function Auth() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      // Navigate or handle login logic here
      navigate("/dashboard"); // Example navigation
    },
  });

  return (
    <Box
      sx={{
        minHeight: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        columns={16}
        sx={{ maxWidth: 1300, width: "100%" }}
      >
        {/* Left Image Grid */}
        <Grid
          item
          xs={16}
          md={8}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={Image}
            alt="Illustration"
            sx={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>

        {/* Right Card Grid */}
        <Grid
          item
          xs={16}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "100%",
              maxWidth: 500,
              p: 3,
              backgroundColor: "#ffffff"
            }}
          >
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb={3}
              >
                {/* Logo at the Top */}
                <Box
                  component="img"
                  src={Logo}
                  alt="Sales and Inventory Logo"
                  sx={{
                    width: 230, // Adjust the size as needed
                    height: 120,
                    objectFit: "contain",
                    mb: 2, // Add spacing between the logo and the text
                  }}
                />

                {/* Heading */}
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  align="center"
                >
                  Welcome to Sales and Inventory
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                >
                  Log in to your account and manage your business effectively!
                </Typography>
              </Box>

              {/* Form */}
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...formik.getFieldProps("email")}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...formik.getFieldProps("password")}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="rememberMe"
                      checked={formik.values.rememberMe}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Remember Me"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2, borderRadius: 1, textTransform: "none" }}
                >
                  Sign in
                </Button>
              </form>

              <Link
                component="button"
                type="button"
                variant="body2"
                underline="none"
                sx={{ mt: 1 }}
                onClick={() => alert("Forgot Password?")}
              >
                Forgot your password?
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
