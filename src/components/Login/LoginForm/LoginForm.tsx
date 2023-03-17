import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/auth/auth";
import { QueryClientProvider, QueryClient } from "react-query";
import { toast, ToastContainer } from "react-toastify";

import { useAuthContext } from "../../../context/AuthContext/AuthContext";
import { useLoginFormik } from "./useLoginFormik";

export const LoginForm = () => {
  const authCtx = useAuthContext();
  const navigate = useNavigate();

  console.log("contex value in login form component", authCtx);

  // const formik = useLoginFormik({
  //   async onSubmit(values, formikHelpers) {
  //     try {
  //       const response = await login(values.username, values.password);

  //       const json = await response.json();

  //       console.log("login response", json);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     authCtx.login();
  //   },
  // });

  const formik = useLoginFormik({
    async onSubmit(values, formikHelpers) {
      try {
        await login(values.username, values.password);

        toast.success("You have been logged in");

        authCtx.login();
      } catch (error) {
        toast.error("You have error");
        console.log(error);
      }
    },
  });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 4,
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        sx={{ marginBottom: 2 }}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={
          formik.touched.username && Boolean(formik.errors.username)
            ? formik.errors.username
            : ""
        }
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        sx={{ marginBottom: 2 }}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={
          formik.touched.password && Boolean(formik.errors.password)
            ? formik.errors.password
            : ""
        }
      />

      <Button type="submit" variant="contained" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </Box>
  );
};
