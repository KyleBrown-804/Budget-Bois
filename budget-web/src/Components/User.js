import { useEffect, useState } from "react";

function User() {
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((msg) => setMessage(msg))
      .catch((err) => console.log(err));
  }, []);

  const [message, setMessage] = useState("Nothing loaded yet");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default User;
