import { getDbConnection } from "../db";
import { sendEmail } from "../util/sendEmail";

export const resetPasswordEmailRoute = {
  path: "/api/send-email/password-reset",
  method: "post",

  handler: async (req, res) => {
    const { email, verificationString } = req.body;

    const db = await getDbConnection("cols");
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.status(400).json({
        message:
          "This Email id is not registerd with us please try again with correct email address !!",
      });
    }

    const { isVerified } = user;

    if (user.otpVerification.otpVerifed === false) {
      return res
        .status(400)
        .json({ message: "user is not verified with the otp" });
    }

    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    const result = await db.collection("users").findOneAndUpdate(
      { email },
      {
        $set: {
          resetPassword: {
            otp: otp,
            isOtpVerified: false,
          },
        },
      }
    );

    if (!result) {
      return res.status(400).json({
        message: "error in insering otp to the field",
      });
    }
    sendEmail({
      from: "robert.david2540@gmail.com",
      to: email,
      subject: "please verify your email",
      html: `<p>Enter <b> ${otp} </b>in the webpage to Reset the password</p>`,
    });

    res
      .status(200)
      .json({ message: "successfull otp send to the registered email id" });
  },
};
