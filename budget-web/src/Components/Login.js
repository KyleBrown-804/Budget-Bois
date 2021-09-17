import React from "react";
import AuthForm from "./AuthForm";

export default function Login() {
  return (
    <div style={{ marginTop: 100 }}>
      <AuthForm isSignUp={false} />
    </div>
  );
}
