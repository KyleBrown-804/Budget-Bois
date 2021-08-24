import express from "express";
import { query } from "./pgsql.js";
const app = express();

console.log(process.env.PGPASSWORD);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

console.log("http://localhost:8080/");

// Test query
const m_query = {
  // name: "fetch-bills",
  text: "SELECT * FROM bills WHERE fk_users = $1",
  values: ["gono2g92ugowv"],
};

query(m_query);
