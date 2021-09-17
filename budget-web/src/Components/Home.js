import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { Button } from "@material-ui/core";

function Home() {
  const [message, setMessage] = useState("Nothing loaded yet");
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((msg) => setMessage(msg))
      .catch((err) => console.log(err));
  }, []);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      console.log("sign out successful");
      history.push("/login");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }

  return (
    <div className="Home">
      <h1>Dashboard</h1>
      <h1>{message}</h1>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
}

export default Home;
