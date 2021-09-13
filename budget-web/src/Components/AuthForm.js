import { React, useState } from "react";
import {
  Button,
  Card,
  TextField,
  Box,
  Container,
  Link,
  Grid,
} from "@material-ui/core";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from "@material-ui/icons/LockOutlined";
import { Formik, Form, Field, useFormik } from "formik";
import * as yup from "yup";

const AuthForm = (props) => {
  const [showSignUp, setShowSignUp] = useState(props.isSignUp);

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
      // firebase auth sign in here
      alert(JSON.stringify(values));
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
                }}
                variant="body2"
                component="button"
              >
                {showSignUp ? "Login here" : "Sign up here"}
              </Link>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default AuthForm;
