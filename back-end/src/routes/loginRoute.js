import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginRoute = {
  path: "/api/login",
  method: "post",

  handler: async (req, res) => {
    const { email, password } = req.body;

    const db = await getDbConnection("cols");

    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "This Email id is not registered with us",
      });
    }
    if (user) {
      await db.collection("users").findOneAndUpdate(
        { email },
        {
          $set: {
            isVerified: true,
          },
        }
      );
    }

    const { _id: id, name, passwordHash, salt, isVerified } = user;
    const pepper = process.env.PEPPER_STRING;

    const isPassCorrect = await bcrypt.compare(
      salt + password + pepper,
      passwordHash
    );

    if (!isPassCorrect) {
      return res
        .status(401)
        .json({ message: "Either email address or password is incorrect" });
    }

    jwt.sign(
      {
        id,
        name,
        email,
        isVerified,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) {
          return res.status(500).json({ message: "server error" });
        }
        res.status(200).json({ token });
      }
    );
  },
};
