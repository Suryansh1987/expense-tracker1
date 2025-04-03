import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.js",  
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "sqldatabase"
  }
});
