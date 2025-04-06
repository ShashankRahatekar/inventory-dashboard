import dotenv from 'dotenv';
import { Pool } from 'pg';

const {parsed} = dotenv.config();

export const pool = new Pool({
  host: parsed.DB_HOST || 'localhost',      // service name in docker-compose
  user: parsed.DB_USER || 'admin',
  password: parsed.DB_PASSWORD || 'admin',
  database: parsed.DB_NAME || 'inventory_db',
  port: +parsed.DB_PORT || 5432
});