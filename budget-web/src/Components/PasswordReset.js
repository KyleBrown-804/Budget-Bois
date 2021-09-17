import { React, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Container,
  Box,
  Card,
  TextField,
  Link,
  Grid,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@mui/material";
import { useAuth } from "../Contexts/AuthContext";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { useFormik } from "formik";
import * as yup from "yup";

export default function PasswordReset() {
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handlePassReset(values) {
    setError("");
    setMessage("");
    setLoading(true);

    await resetPassword(values.email)
      .then(() => {
        setMessage("Check your inbox for further instructions");
        console.log("successfully sent reset password email");
      })
      .catch((error) => {
        setError("Failed to send password reset email with Google Firebase");
        console.log(error.message);
      });

    setLoading(false);
  }

  const emailSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      handlePassReset(values);
    },
  });

  return (
    <Box component="div" width={1} style={{ marginTop: 100 }}>
      <Container maxWidth="sm">
        <Card
          raised="true"
          style={{ paddingLeft: 25, paddingRight: 25, paddingBottom: 20 }}
        >
          <h1>Password Reset</h1>

          {error && (
            <Alert
              severity="error"
              style={{ textAlign: "left", marginBottom: 15 }}
            >
              <AlertTitle>Authentication Error</AlertTitle>
              {error}
            </Alert>
          )}

          {message && (
            <Alert
              severity="success"
              style={{ textAlign: "left", marginBottom: 15 }}
            >
              <AlertTitle>Success</AlertTitle>
              {message}
            </Alert>
          )}

          <form onSubmit={formik.handleSubmit}>
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
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              style={{ marginBottom: 15 }}
            >
              <Grid item>
                <Button
                  disabled={loading}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Send Email
                </Button>
              </Grid>
            </Grid>
          </form>

          <Link component={RouterLink} to="/login">
            Back to login
          </Link>
        </Card>
      </Container>
    </Box>
  );
}
