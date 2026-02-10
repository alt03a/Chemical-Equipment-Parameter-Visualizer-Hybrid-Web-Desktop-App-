import bcrypt from "bcryptjs";
import session from "express-session";

export const hashPassword = (p) => bcrypt.hashSync(p, 10);
export const comparePassword = (p, hash) => bcrypt.compareSync(p, hash);

export const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: false,
});
