import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About";
import User from "./Components/User";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Bills from "./Components/Bills";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route path="/bills" component={Bills} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
