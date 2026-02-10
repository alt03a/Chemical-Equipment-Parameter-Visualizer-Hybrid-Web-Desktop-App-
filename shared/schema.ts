import { pgTable, text, serial, integer, timestamp, jsonb, real } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const datasets = pgTable("datasets", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  filename: text("filename").notNull(),
  uploadDate: timestamp("upload_date").defaultNow(),
  summary: jsonb("summary").notNull(),
});

export const equipmentData = pgTable("equipment_data", {
  id: serial("id").primaryKey(),
  datasetId: integer("dataset_id").notNull(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  flowrate: real("flowrate"),
  pressure: real("pressure"),
  temperature: real("temperature"),
});
