const express = require("express");
const path = require("path");
const db = require("./pgsql.js");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../../budget-web/build")));

app.get("/api", (req, res) => {
  res.json("The Landing Page");
  console.log("Served landing page");
});

app.get("/api/dashboard", (req, res) => {
  res.json("The Dashboard Screen");
  console.log("Served dashboard page");
});

app.get("/api/about", (req, res) => {
  res.json("The About Page");
  console.log("Served about page");
});

app.get("/api/bills", (req, res) => {
  const m_query = {
    name: "fetch-bills",
    text: "SELECT * FROM bills WHERE fk_users = $1",
    values: ["gono2g92ugowv"],
  };

  db.query(m_query)
    .then((query_res) => {
      console.log("rows[0]", query_res.rows);
      res.json(query_res.rows);
    })
    .catch((e) => {
      console.error(e.stack);
    });

  console.log("Served user data");
});

app.get("/api/users", (req, res) => {
  res.json("User Data Page");
  console.log("Served user data");
});

app.post("/api/about", (req, res) => {
  console.log("Post request recieved on server");
});

app.post("/api/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../budget-web/build/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

console.log("http://localhost:8080/");
