import express from "express";
import multer from "multer";
import { parse } from "csv-parse/sync";
import { storage } from "./storage";
import { hashPassword, comparePassword } from "./auth";

const upload = multer();
export const router = express.Router();

router.post("/api/register", async (req, res) => {
  const user = await storage.createUser({
    username: req.body.username,
    password: hashPassword(req.body.password),
  });
  req.session.user = user[0];
  res.json(user[0]);
});

router.post("/api/login", async (req, res) => {
  const user = (await storage.findUser(req.body.username))[0];
  if (!user || !comparePassword(req.body.password, user.password))
    return res.status(401).send("Invalid");
  req.session.user = user;
  res.json(user);
});

router.post("/api/datasets", upload.single("file"), async (req, res) => {
  const records = parse(req.file.buffer, { columns: true });

  const stats = { total: records.length };

  const dataset = await storage.saveDataset({
    userId: req.session.user.id,
    filename: req.file.originalname,
    summary: stats,
  });

  await storage.saveEquipment(records.map(r => ({ ...r, datasetId: dataset[0].id })));

  res.json(dataset[0]);
});
