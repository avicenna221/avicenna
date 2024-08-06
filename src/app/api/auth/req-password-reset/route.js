import connect from "@/lib/mongodb";
import User from "@/lib/models/User";
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { method } = req;

  await connect();

  switch (method) {
    case 'POST':
      try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ success: false, message: 'User not found' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL,
          to: user.email,
          subject: 'Password Reset',
          text: `Please use the following link to reset your password: ${process.env.BASE_URL}/reset-password?token=${token}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Email sent' });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(404).json({ success: false });
      break;
  }
}
