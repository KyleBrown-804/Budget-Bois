import { React, useState } from "react";
import {
  Button,
  Card,
  TextField,
  Box,
  Container,
  Link,
} from "@material-ui/core";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from "@material-ui/icons/LockOutlined";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const AuthForm = (props) => {
  const [showSignUp, setShowSignUp] = useState(props.isSignUp);

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

          {/* Add Formik and Yup logic for client side form validation */}
          <form onSubmit={() => {}}>
            {showSignUp && (
              <TextField
                id="username"
                name="username"
                label="Username"
                fullWidth
              />
            )}

            <div
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              <AlternateEmailIcon
                style={{
                  position: "absolute",
                  right: 0,
                  top: 20,
                }}
              />
              <TextField id="email" name="email" label="Email" fullWidth />
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
                id="password"
                name="password"
                label="Password"
                fullWidth
                type="password"
              />
            </div>

            {showSignUp && (
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
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  fullWidth
                  type="password"
                />
              </div>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
            >
              {showSignUp ? "SignUp!" : "Login!"}
            </Button>
          </form>

          <p>
            {showSignUp
              ? "Already have an account?"
              : "Need to make an account?"}
            <Link
              component="button"
              onClick={() => {
                setShowSignUp(!showSignUp);
              }}
              style={{ paddingLeft: 10, bottom: 0.5 }}
            >
              {showSignUp ? "Login here" : "Sign up here"}
            </Link>
          </p>
        </Card>
      </Container>
    </Box>
  );
};

export default AuthForm;
