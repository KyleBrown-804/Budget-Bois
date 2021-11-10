import { React, useState } from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  TextField,
  Box,
  Container,
  Link,
  Grid,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useAuth } from "../Contexts/AuthContext";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import * as yup from "yup";

const AuthForm = (props) => {
  const [showSignUp, setShowSignUp] = useState(props.isSignUp);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const { signup, login, emailVerification } = useAuth();

  async function firebaseSubmit(values) {
    setError("");
    setLoading(true);

    if (showSignUp) {
      await signup(values.email, values.password)
        .then(() => {
          // emailVerification()
          //   .then(() => {})
          //   .catch((error) => {});
          console.log("signup successful");
          history.push("/");
        })
        .catch((error) => {
          setError("Failed to create an account with Google Firebase");
          console.error(error.message);
        });
    } else {
      await login(values.email, values.password)
        .then(() => {
          history.push("/");
          console.log("login successful");
        })
        .catch((error) => {
          setError("Failed to login with Google Firebase");
          console.error(error.message);
        });
    }
    setLoading(false);
  }

  const loginSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be a minimum of 8 characters")
      .required("Password is required"),
  });

  const signUpSchema = yup.object({
    username: yup
      .string("Enter your username")
      .required("Username is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be a minimum of 8 characters")
      .required("Password is required"),
    confirmpassword: yup
      .string("Confirm your password")
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .min(8, "Password should be a minimum of 8 characters")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: showSignUp ? signUpSchema : loginSchema,
    onSubmit: (values) => {
      firebaseSubmit(values);
    },
  });

  return (
    <Box component="div" width={1}>
      <Container maxWidth="sm">
        <Card
          raised="true"
          style={{ paddingLeft: 25, paddingRight: 25, paddingBottom: 20 }}
        >
          {showSignUp == true ? (
            <h1>Signup and start your budget!</h1>
          ) : (
            <h1>Login and manage your money!</h1>
          )}

          {error && (
            <Alert
              severity="error"
              style={{ textAlign: "left", marginBottom: 15 }}
            >
              <AlertTitle>Authentication Error</AlertTitle>
              {error}
            </Alert>
          )}

          <form onSubmit={formik.handleSubmit}>
            {showSignUp && (
              <TextField
                fullWidth
                style={{ marginBottom: 15 }}
                id="username"
                name="username"
                label="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            )}

            <div
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
                marginBottom: 15,
              }}
            >
              <AlternateEmailIcon
                style={{
                  position: "absolute",
                  right: 0,
                  top: 20,
                }}
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>

            <div
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              <LockIcon
                style={{
                  position: "absolute",
                  right: 0,
                  top: 20,
                }}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>

            {showSignUp && (
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "100%",
                  marginTop: 15,
                }}
              >
                <LockIcon
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 20,
                  }}
                />
                <TextField
                  fullWidth
                  id="confirmpassword"
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  value={formik.values.confirmpassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmpassword &&
                    Boolean(formik.errors.confirmpassword)
                  }
                  helperText={
                    formik.touched.confirmpassword &&
                    formik.errors.confirmpassword
                  }
                />
              </div>
            )}

            <Button
              disabled={loading}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 20, marginBottom: 15 }}
            >
              {showSignUp ? "SignUp!" : "Login!"}
            </Button>
          </form>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing="1"
            wrap="nowrap"
          >
            <Grid item>
              {showSignUp
                ? "Already have an account?"
                : "Need to make an account?"}
            </Grid>
            <Grid item>
              <Link
                onClick={() => {
                  setShowSignUp(!showSignUp);
                  formik.resetForm();
                  setError("");
                }}
                variant="body2"
                component="button"
              >
                {showSignUp ? "Login here" : "Sign up here"}
              </Link>
            </Grid>
          </Grid>
          <Link component={RouterLink} to="/forgot-password">
            Forgot Password?
          </Link>
        </Card>
      </Container>
    </Box>
  );
};

export default AuthForm;
