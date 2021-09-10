import { Link } from "react-router-dom";
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

function Navbar() {
  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Budget Boi
        </Typography>
        <ButtonGroup
          variant="text"
          color="inherit"
          aria-label="text primary button group"
        >
          <Button component={Link} to="/">
            Overview
          </Button>
          <Button>Budget</Button>
          <Button component={Link} to="/bills">
            Bills
          </Button>
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
    </AppBar>
  );
}

export default Navbar;
