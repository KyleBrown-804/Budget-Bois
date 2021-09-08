import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import {
  Button,
  ButtonGroup,
  AppBar,
  Toolbar,
  Menu,
  Typography,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

function App() {
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((msg) => setMessage(msg))
      .catch((err) => console.log(err));
  }, []);

  const [message, setMessage] = useState("Nothing loaded yet");

  return (
    <div className="App">
      {/* <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Budget Boi
          </Typography>
          <ButtonGroup
            variant="text"
            color="inherit"
            aria-label="text primary button group"
          >
            <Button>Overview</Button>
            <Button>Budget</Button>
            <Button>Bills</Button>
            <Button>Transactions</Button>
            <Button>Goals</Button>
            <Button>Debts</Button>
            <Button>Credit Score</Button>
            <Button>Schedule</Button>
            <Button>Investments</Button>
          </ButtonGroup>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}

      <p>{message}</p>

      {/* <form action="../../about" method="post" className="form">
        <button type="submit">Connected?</button>
      </form> */}
    </div>
  );
}

export default App;
