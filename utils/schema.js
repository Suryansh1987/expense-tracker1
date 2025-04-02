import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Budgets = pgTable("budgets", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(), // Fix: `.notNull()` is the correct method
  amount: varchar("amount").notNull(),
  icon: varchar("icon"),
  createdBy: varchar("createdBy").notNull() // Fix: `.notNull()` needs parentheses
});
