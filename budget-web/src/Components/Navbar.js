import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  AppBar,
  Toolbar,
  Menu,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";

function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6">Budget Bois</Typography>
        </Link>

        <ButtonGroup
          variant="string"
          color="inherit"
          aria-label="text primary button group"
          style={{ marginLeft: "auto" }}
        >
          {/* <Button>Budget</Button> */}
          <Button component={Link} to="/bills">
            Bills
          </Button>
          <Button>Transactions</Button>
          {/* <Button>Goals</Button>
            <Button>Debts</Button>
            <Button>Credit Score</Button>
            <Button>Schedule</Button>
            <Button>Investments</Button> */}
        </ButtonGroup>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
