import connect from "@/lib/mongodb";
import User from "@/lib/models/User";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  const { method } = req;

  await connect();

  switch (method) {
    case 'POST':
      try {
        const { token, newPassword } = req.body;
        if (!token) {
          return res.status(400).json({ success: false, message: 'Token is required' });
        }

        let decoded;
        try {
          decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
          return res.status(400).json({ success: false, message: 'Invalid or expired token' });
        }

        const user = await User.findById(decoded.id);
        if (!user) {
          return res.status(400).json({ success: false, message: 'User not found' });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();

        res.status(200).json({ success: true, message: 'Password reset successful' });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(404).json({ success: false });
      break;
  }
}
