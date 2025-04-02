import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.js",  
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_THe1ldzBVhI4@ep-square-haze-a5eh5wft-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require" // ✅ Fixed key
  }
});
