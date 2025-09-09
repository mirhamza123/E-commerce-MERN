
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Signup
exports.signup = async (req, res) => {
  try {
    const { name, emailOrPhone, password } = req.body;

    const userExists = await User.findOne({ emailOrPhone });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const user = new User({ name, emailOrPhone, password });
    await user.save();

    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    const user = await User.findOne({ emailOrPhone });
    if (!user) return res.status(400).json({ success: false, message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      message: 'Login successful',
      data: { user: { id: user._id, name: user.name, emailOrPhone: user.emailOrPhone }, token },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
  
