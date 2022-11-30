import { getDbConnection } from "../db";
import bcrypt, { hash } from "bcrypt";
import { sendEmail } from "../util/sendEmail";
import { ObjectId } from "mongodb";

export const otpVerification = {
  path: "/api/send-otp",
  method: "post",

  handler: async (req, res) => {
    const { email } = req.body;
    try {
      const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
      const db = getDbConnection("cols");
      const user = await db.collection("users").findOne({ email });

      console.log(user);
      if (user) {
        if (
          user.isVerified === true &&
          user.otpVerification.otpVerifed === true
        ) {
          return res
            .status(200)
            .json({ message: "your have been already verified" });
        }
        const verificationString = user.verificationString;

        const hashedOpt = await bcrypt.hash(otp, 10);
        const response = await db.collection("users").findOneAndUpdate(
          { email },
          {
            $set: {
              otpVerification: {
                hashedOtp: hashedOpt,
                createdAt: new Date(),
                expireAt: new Date() + 360,
                otpVerified: false,
              },
            },
          },
          {
            new: true,
          }
        );

        const id = ObjectId(response._id);
        sendEmail({
          from: "robert.david2540@gmail.com",
          to: email,
          subject: "please verify your email",
          html: `<p>Enter <b> ${otp} </b>in the app to verify your email address and complete the sign up</p>`,
        });

        res.status(200).json({
          status: "PENDING",
          message: "Verification otp email sent",
          data: {
            userId: id,
            email,
            verificationString,
          },
        });
      } else {
        return res
          .status(400)
          .json({ message: "Error in creatting account please try again..." });
      }
    } catch (e) {
      res.status(500).json({
        status: "FAILED",
        message: e.message,
      });
      return;
    }
  },
};
