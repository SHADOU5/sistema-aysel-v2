import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
  host    : process.env.MYSQL_ADDON_HOST     || process.env.DB_HOST     || 'localhost',
  user    : process.env.MYSQL_ADDON_USER     || process.env.DB_USER     || 'root',
  password: process.env.MYSQL_ADDON_PASSWORD || process.env.DB_PASS     || '',
  database: process.env.MYSQL_ADDON_DB       || process.env.DB_NAME     || 'BD_TIENDA_AYSEL',
  port    : Number(process.env.MYSQL_ADDON_PORT) || 3306,
  waitForConnections: true,
  connectionLimit   : 3,   // ← Clever Cloud free = máx 5 (dejamos 1 para DBeaver + 1 margen)
  queueLimit        : 0,
  timezone          : '-05:00',
});

export default db;
