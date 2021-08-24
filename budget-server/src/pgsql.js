import pg from "pg";
const { Pool, Client } = pg;

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Allows for passing a normal query or query config object
export async function query(text, params) {
  try {
    const res = await pool.query(text, params);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
}
