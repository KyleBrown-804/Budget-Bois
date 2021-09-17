import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About";
import User from "./Components/User";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Bills from "./Components/Bills";
import Login from "./Components/Login";
import PasswordReset from "./Components/PasswordReset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={PasswordReset} />
            {/* <Navbar /> */}
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/about" component={About} />
            <PrivateRoute path="/user" component={User} />
            <PrivateRoute path="/bills" component={Bills} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
