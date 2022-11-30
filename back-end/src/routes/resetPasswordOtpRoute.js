import { getDbConnection } from "../db";

export const resetPasswordOtpRoute = {
  path: "/api/verify-otp/reset-password",
  method: "post",

  handler: async (req, res) => {
    const { email, verficationString, otp } = req.body;

    const db = await getDbConnection("cols");

    const user = await db
      .collection("users")
      .findOne({ email, verficationString });

    if (!user) {
      return res.status(500).json({ message: "user not found" });
    }

    if (otp !== user.resetPassword.otp) {
      return res.status(404).json({ message: "wrong otp entered" });
    }

    const otpVerified = await db.collection("users").findOneAndUpdate(
      { email, verficationString },
      {
        $set: {
          resetPassword: {
            otp: otp,
            isOtpVerified: true,
          },
        },
      }
    );

    res.status(200).json({ message: "otp verified..." });
  },
};
