import { useEffect, useState } from "react";

function About() {
  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((msg) => setMessage(msg))
      .catch((err) => console.log(err));
  }, []);

  const [message, setMessage] = useState("Nothing loaded yet");

  return (
    <div className="About">
      <h1>{message}</h1>
    </div>
  );
}

export default About;
