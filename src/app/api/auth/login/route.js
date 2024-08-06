import connect from "@/lib/mongodb";
import User from "@/lib/models/User";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { method } = req;

  await connect();

  switch (method) {
    case 'POST':
      try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, token });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(404).json({ success: false });
      break;
  }
}
