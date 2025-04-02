import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
config({ path: ".env" }); 
import * as schema from './schema';

const sql = neon("postgresql://neondb_owner:npg_THe1ldzBVhI4@ep-square-haze-a5eh5wft-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");
export const db = drizzle(sql, {schema});