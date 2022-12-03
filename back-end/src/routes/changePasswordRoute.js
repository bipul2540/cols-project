import { getDbConnection } from "../db";
import bcrypt from "bcrypt";

export const changePasswordRoute = {
  path: "/api/otp-verified/change-password",
  method: "post",

  handler: async (req, res) => {
    const { email, password, confirmPassword, verificationString } = req.body;

    const db = await getDbConnection("cols");

    const user = await db
      .collection("users")
      .findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found..." });
    }

    if (user.resetPassword.isOtpVerified === false) {
      return res
        .status(400)
        .json({ message: "Otp is not correctly verified, please try again" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "password does't match!!" });
    }
    const { salt } = user;
    const pepper = process.env.PEPPER_STRING;
    const hashPassword = await bcrypt.hash(salt + password + pepper, 10);
    const hashConfirmPassword = await bcrypt.hash(
      salt + confirmPassword + pepper,
      10
    );

    const response = await db.collection("users").findOneAndUpdate(
      { email, verificationString },
      {
        $set: {
          passwordHash: hashPassword,
          confirmPasswordHash: hashConfirmPassword,
          resetPassword: {
            isOtpVerified: true,
            passwordChangedAt: new Date(),
          },
        },
      },
      {
        upsert: true,
      }
    );

    res.status(200).json({
      messsage:
        "Passwod changed !!!Now user can successfully login to to website",
    });
  },
};
