import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert"
const validationSchema = yup.object({
  randomId: yup.string().required("Enter Id"),
  randomPassword: yup.string().required("Enter Password"),
});

const defaultTheme = createTheme();

export default function Signin() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      randomId: "",
      randomPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:7786/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            credentials: 'include',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          const data = await response.json();
          const user = data.UserResponse;
          sessionStorage.setItem("currentUser", JSON.stringify(user));

          if (user.isApproved === true) {
            navigate("/enroll");
          } else {
            if (user.isRegistered === true) {
              navigate("/waiting");
            } else {
              navigate("/selectCourse");
            }
          }
        } else {
          swal({
            icon: 'error',                      
            title: 'Error',
            text: `Invalid Credentials`,
          });
        }
      } catch (error) {
        swal({
          icon: 'error',
          title: 'Error',
          text: `Something Went wrong!`,
        });
      }
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://www.mpnvva.in/Image/UniversityPicture?instituteID=12)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              STUDENT SIGN IN
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={formik.handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="randomId"
                label="Enter Id"
                name="randomId"
                autoComplete="off"
                autoFocus
                value={formik.values.randomId}
                onChange={formik.handleChange}
                error={
                  formik.touched.randomId && Boolean(formik.errors.randomId)
                }
                helperText={formik.touched.randomId && formik.errors.randomId}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="randomPassword"
                label="Enter Password"
                type="password"
                id="randomPassword"
                autoComplete="off"
                value={formik.values.randomPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.randomPassword &&
                  Boolean(formik.errors.randomPassword)
                }
                helperText={
                  formik.touched.randomPassword && formik.errors.randomPassword
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Typography variant="body2">
                    Don't have an account?{" "}
                    <Link to="/studentregister">Sign Up</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
