import sql from "mssql";
import dotenv from "dotenv";
dotenv.config();

const config: sql.config = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  server: process.env.MSSQL_SERVER!,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true,
    trustServerCertificate: true, // ✅ THIS FIXES THE ISSUE
  },
};

export const getPool = async () => {
  const pool = await sql.connect(config);
  return pool;
};
