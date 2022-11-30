import { ObjectId } from "mongodb";
import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const verifyOtpRoute = {
  path: "/api/verify-otp",
  method: "post",

  handler: async (req, res) => {
    const { verificationString, otp } = req.body;
    console.log(verificationString);

    const db = getDbConnection("cols");
    const user = await db.collection("users").findOne({ verificationString });
    console.log(user);

    if (!user) {
      return res.status(401).json({ mesage: "user not found fdfdsafd!!" });
    }

    const { _id: id, name, email, isVerified } = user;

    if (
      user.email !== email ||
      user.verificationString !== verificationString
    ) {
      return res.status(401).json({ message: "email does't match" });
    }

    const hashedOpt = user.otpVerification.hashedOtp;
    const optIsCorrect = await bcrypt.compare(otp, hashedOpt);

    if (optIsCorrect) {
      console.log("reached");
      const stat = await db.collection("users").updateOne(
        { _id: ObjectId(id) },
        {
          $set: {
            otpVerification: {
              otpVerifed: true,
            },
          },
        }
      );

      jwt.sign(
        {
          id,
          name,
          email,
          isVerified: true,
        },
        process.env.JWT_SECRET,
        { expiresIn: "2d" },
        (err, token) => {
          if (err) {
            return res.status(500).json(err);
          }

          res.status(200).json({ token });
        }
      );
    } else {
      return res.status(300).json({ message: "wrong otp entered" });
    }
  },
};
