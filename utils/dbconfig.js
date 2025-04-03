import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
config({ path: ".env" }); 
import * as schema from './schema';

const sql = neon("sqldatabase");
export const db = drizzle(sql, {schema});