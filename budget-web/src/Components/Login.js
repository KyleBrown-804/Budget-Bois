import React from "react";
import AuthForm from "./AuthForm";

export default function Login() {
  return (
    <div>
      <h1>Budget How You Want!</h1>
      <AuthForm isSignUp={false} />
    </div>
  );
}
