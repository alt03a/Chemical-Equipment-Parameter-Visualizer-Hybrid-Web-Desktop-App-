import { db } from "./db";
import { users, datasets, equipmentData } from "../shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  createUser: (user) => db.insert(users).values(user).returning(),
  findUser: (username) =>
    db.select().from(users).where(eq(users.username, username)),
  saveDataset: (data) => db.insert(datasets).values(data).returning(),
  getDatasets: (userId) =>
    db.select().from(datasets).where(eq(datasets.userId, userId)),
  saveEquipment: (rows) => db.insert(equipmentData).values(rows),
};
