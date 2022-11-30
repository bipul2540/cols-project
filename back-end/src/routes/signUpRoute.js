import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";

export const signUpRoute = {
  path: "/api/signup",
  method: "post",

  handler: async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    const db = getDbConnection("cols");

    const user = await db.collection("users").findOne({ email });

    if (user) {
      return res
        .status(409)
        .json({ message: "Email id already exist, please login" });
    }

    const salt = uuid();
    const pepper = process.env.PEPPER_STRING;
    const passwordHash = await bcrypt.hash(salt + password + pepper, 10);
    const confirmPasswordHash = await bcrypt.hash(
      salt + confirmPassword + pepper,
      10
    );

    const verificationString = uuid();
    const result = await db.collection("users").insertOne({
      name,
      email,
      passwordHash,
      confirmPasswordHash,
      salt,
      isVerified: false,
      verificationString,
    });

    const { insertedId } = result;

    jwt.sign(
      {
        id: insertedId,
        name,
        email,
        isVerified: false,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          return res.status(500).send(err);
        }

        res.status(200).json({ token });
      }
    );
  },
};
