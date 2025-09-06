// // server.js
// const express = require('express');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/exclusive_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 2,
//   },
//   email: {
//     type: String,
//     required: function() {
//       return !this.phone;
//     },
//     unique: true,
//     sparse: true,
//     trim: true,
//     lowercase: true,
//   },
//   phone: {
//     type: String,
//     required: function() {
//       return !this.email;
//     },
//     unique: true,
//     sparse: true,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 8,
//   },
// }, {
//   timestamps: true,
// });

// // Pre-save middleware to hash password
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
  
//   try {
//     const salt = await bcrypt.genSalt(12);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Method to compare passwords
// userSchema.methods.comparePassword = async function(candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// // Helper function to generate JWT
// const generateToken = (userId) => {
//   return jwt.sign(
//     { userId },
//     process.env.JWT_SECRET || 'your-secret-key',
//     { expiresIn: '7d' }
//   );
// };

// // Helper function to validate email
// const isValidEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

// // Helper function to validate phone
// const isValidPhone = (phone) => {
//   const phoneRegex = /^\+?[\d\s-()]{10,}$/;
//   return phoneRegex.test(phone);
// };

// // Helper function to validate password strength
// const isValidPassword = (password) => {
//   return password.length >= 8 && 
//          /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password);
// };

// // ROUTES

// // 1. SIGNUP ROUTE
// app.post('/api/auth/signup', async (req, res) => {
//   try {
//     const { name, emailOrPhone, password } = req.body;

//     // Validation
//     if (!name || !emailOrPhone || !password) {
//       return res.status(400).json({
//         success: false,
//         message: 'All fields are required'
//       });
//     }

//     if (name.trim().length < 2) {
//       return res.status(400).json({
//         success: false,
//         message: 'Name must be at least 2 characters'
//       });
//     }

//     if (!isValidPassword(password)) {
//       return res.status(400).json({
//         success: false,
//         message: 'Password must be at least 8 characters and contain uppercase, lowercase, and number'
//       });
//     }

//     // Determine if emailOrPhone is email or phone
//     let email = null;
//     let phone = null;

//     if (isValidEmail(emailOrPhone)) {
//       email = emailOrPhone.toLowerCase().trim();
//     } else if (isValidPhone(emailOrPhone)) {
//       phone = emailOrPhone.trim();
//     } else {
//       return res.status(400).json({
//         success: false,
//         message: 'Please enter a valid email or phone number'
//       });
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({
//       $or: [
//         { email: email },
//         { phone: phone }
//       ]
//     });

//     if (existingUser) {
//       return res.status(409).json({
//         success: false,
//         message: 'User with this email or phone already exists'
//       });
//     }

//     // Create new user
//     const userData = {
//       name: name.trim(),
//       password,
//     };

//     if (email) userData.email = email;
//     if (phone) userData.phone = phone;

//     const user = new User(userData);
//     await user.save();

//     // Generate token
//     const token = generateToken(user._id);

//     // Return success response (don't send password)
//     res.status(201).json({
//       success: true,
//       message: 'Account created successfully',
//       data: {
//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email || null,
//           phone: user.phone || null,
//         },
//         token,
//       }
//     });

//   } catch (error) {
//     console.error('Signup error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error. Please try again later.'
//     });
//   }
// });

// // 2. LOGIN ROUTE
// app.post('/api/auth/login', async (req, res) => {
//   try {
//     const { emailOrPhone, password } = req.body;

//     // Validation
//     if (!emailOrPhone || !password) {
//       return res.status(400).json({
//         success: false,
//         message: 'Email/phone and password are required'
//       });
//     }

//     // Determine if emailOrPhone is email or phone
//     let query = {};
//     if (isValidEmail(emailOrPhone)) {
//       query.email = emailOrPhone.toLowerCase().trim();
//     } else if (isValidPhone(emailOrPhone)) {
//       query.phone = emailOrPhone.trim();
//     } else {
//       return res.status(400).json({
//         success: false,
//         message: 'Please enter a valid email or phone number'
//       });
//     }

//     // Find user
//     const user = await User.findOne(query);
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }

//     // Check password
//     const isPasswordValid = await user.comparePassword(password);
//     if (!isPasswordValid) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }

//     // Generate token
//     const token = generateToken(user._id);

//     // Return success response
//     res.status(200).json({
//       success: true,
//       message: 'Login successful',
//       data: {
//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email || null,
//           phone: user.phone || null,
//         },
//         token,
//       }
//     });

//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error. Please try again later.'
//     });
//   }
// });

// // 3. MIDDLEWARE TO VERIFY TOKEN
// const authenticateToken = async (req, res, next) => {
//   try {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: 'Access denied. No token provided.'
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
//     const user = await User.findById(decoded.userId).select('-password');
    
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid token. User not found.'
//       });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(403).json({
//       success: false,
//       message: 'Invalid token'
//     });
//   }
// };

// // 4. PROTECTED ROUTE EXAMPLE
// app.get('/api/auth/profile', authenticateToken, async (req, res) => {
//   res.json({
//     success: true,
//     data: {
//       user: {
//         id: req.user._id,
//         name: req.user.name,
//         email: req.user.email || null,
//         phone: req.user.phone || null,
//         createdAt: req.user.createdAt,
//       }
//     }
//   });
// });

// // 5. FORGOT PASSWORD ROUTE (basic implementation)
// app.post('/api/auth/forgot-password', async (req, res) => {
//   try {
//     const { emailOrPhone } = req.body;

//     if (!emailOrPhone) {
//       return res.status(400).json({
//         success: false,
//         message: 'Email or phone is required'
//       });
//     }

//     // Find user
//     let query = {};
//     if (isValidEmail(emailOrPhone)) {
//       query.email = emailOrPhone.toLowerCase().trim();
//     } else if (isValidPhone(emailOrPhone)) {
//       query.phone = emailOrPhone.trim();
//     } else {
//       return res.status(400).json({
//         success: false,
//         message: 'Please enter a valid email or phone number'
//       });
//     }

//     const user = await User.findOne(query);
//     if (!user) {
//       // Don't reveal if user exists or not
//       return res.status(200).json({
//         success: true,
//         message: 'If an account with this email/phone exists, you will receive reset instructions.'
//       });
//     }

//     // In a real app, you would:
//     // 1. Generate a password reset token
//     // 2. Save it to the database with expiration
//     // 3. Send email/SMS with reset link
    
//     // For now, just return success
//     res.status(200).json({
//       success: true,
//       message: 'Password reset instructions have been sent.'
//     });

//   } catch (error) {
//     console.error('Forgot password error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error. Please try again later.'
//     });
//   }
// });

// // Health check route
// app.get('/api/health', (req, res) => {
//   res.json({
//     success: true,
//     message: 'Server is running!',
//     timestamp: new Date().toISOString()
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     message: 'Something went wrong!'
//   });
// });

// // Handle 404
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found'
//   });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`Health check: http://localhost:${PORT}/api/health`);
// });


//////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/exclusive_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 2,
//   },
//   email: {
//     type: String,
//     required: function() {
//       return !this.phone;
//     },
//     unique: true,
//     sparse: true,
//     trim: true,
//     lowercase: true,
//   },
//   phone: {
//     type: String,
//     required: function() {
//       return !this.email;
//     },
//     unique: true,
//     sparse: true,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 8,
//   },
// }, {
//   timestamps: true,
// });

// // Pre-save middleware to hash password
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
  
//   try {
//     const salt = await bcrypt.genSalt(12);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Method to compare passwords
// userSchema.methods.comparePassword = async function(candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// // Helper function to generate JWT
// const generateToken = (userId) => {
//   return jwt.sign(
//     { userId },
//     process.env.JWT_SECRET || 'your-secret-key',
//     { expiresIn: '7d' }
//   );
// };

// // Helper function to validate email
// const isValidEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

// // Helper function to validate phone
// const isValidPhone = (phone) => {
//   const phoneRegex = /^\+?[\d\s-()]{10,}$/;
//   return phoneRegex.test(phone);
// };

// // Helper function to validate password strength
// const isValidPassword = (password) => {
//   return password.length >= 8 && 
//          /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password);
// };

// // ROUTES

// // 1. SIGNUP ROUTE
// app.post('/api/auth/signup', async (req, res) => {
//   try {
//     const { name, emailOrPhone, password } = req.body;

//     if (!name || !emailOrPhone || !password) {
//       return res.status(400).json({
//         success: false,
//         message: 'All fields are required'
//       });
//     }

//     if (name.trim().length < 2) {
//       return res.status(400).json({
//         success: false,
//         message: 'Name must be at least 2 characters'
//       });
//     }

//     if (!isValidPassword(password)) {
//       return res.status(400).json({
//         success: false,
//         message: 'Password must be at least 8 characters and contain uppercase, lowercase, and number'
//       });
//     }

//     let email = null;
//     let phone = null;

//     if (isValidEmail(emailOrPhone)) {
//       email = emailOrPhone.toLowerCase().trim();
//     } else if (isValidPhone(emailOrPhone)) {
//       phone = emailOrPhone.trim();
//     } else {
//       return res.status(400).json({
//         success: false,
//         message: 'Please enter a valid email or phone number'
//       });
//     }

//     const existingUser = await User.findOne({
//       $or: [{ email: email }, { phone: phone }]
//     });

//     if (existingUser) {
//       return res.status(409).json({
//         success: false,
//         message: 'User with this email or phone already exists'
//       });
//     }

//     const userData = { name: name.trim(), password };
//     if (email) userData.email = email;
//     if (phone) userData.phone = phone;

//     const user = new User(userData);
//     await user.save();

//     const token = generateToken(user._id);

//     res.status(201).json({
//       success: true,
//       message: 'Account created successfully',
//       data: {
//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email || null,
//           phone: user.phone || null,
//         },
//         token,
//       }
//     });

//   } catch (error) {
//     console.error('Signup error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error. Please try again later.'
//     });
//   }
// });

// // 2. LOGIN ROUTE
// app.post('/api/auth/login', async (req, res) => {
//   try {
//     const { emailOrPhone, password } = req.body;

//     if (!emailOrPhone || !password) {
//       return res.status(400).json({
//         success: false,
//         message: 'Email/phone and password are required'
//       });
//     }

//     let query = {};
//     if (isValidEmail(emailOrPhone)) {
//       query.email = emailOrPhone.toLowerCase().trim();
//     } else if (isValidPhone(emailOrPhone)) {
//       query.phone = emailOrPhone.trim();
//     } else {
//       return res.status(400).json({
//         success: false,
//         message: 'Please enter a valid email or phone number'
//       });
//     }

//     const user = await User.findOne(query);
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }

//     const isPasswordValid = await user.comparePassword(password);
//     if (!isPasswordValid) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }

//     const token = generateToken(user._id);

//     res.status(200).json({
//       success: true,
//       message: 'Login successful',
//       data: {
//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email || null,
//           phone: user.phone || null,
//         },
//         token,
//       }
//     });

//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error. Please try again later.'
//     });
//   }
// });

// // 3. MIDDLEWARE TO VERIFY TOKEN
// const authenticateToken = async (req, res, next) => {
//   try {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: 'Access denied. No token provided.'
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
//     const user = await User.findById(decoded.userId).select('-password');
    
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid token. User not found.'
//       });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(403).json({
//       success: false,
//       message: 'Invalid token'
//     });
//   }
// };

// // 4. PROTECTED ROUTE EXAMPLE
// app.get('/api/auth/profile', authenticateToken, async (req, res) => {
//   res.json({
//     success: true,
//     data: {
//       user: {
//         id: req.user._id,
//         name: req.user.name,
//         email: req.user.email || null,
//         phone: req.user.phone || null,
//         createdAt: req.user.createdAt,
//       }
//     }
//   });
// });

// // 5. FORGOT PASSWORD ROUTE
// app.post('/api/auth/forgot-password', async (req, res) => {
//   try {
//     const { emailOrPhone } = req.body;

//     if (!emailOrPhone) {
//       return res.status(400).json({
//         success: false,
//         message: 'Email or phone is required'
//       });
//     }

//     let query = {};
//     if (isValidEmail(emailOrPhone)) {
//       query.email = emailOrPhone.toLowerCase().trim();
//     } else if (isValidPhone(emailOrPhone)) {
//       query.phone = emailOrPhone.trim();
//     } else {
//       return res.status(400).json({
//         success: false,
//         message: 'Please enter a valid email or phone number'
//       });
//     }

//     const user = await User.findOne(query);
//     if (!user) {
//       return res.status(200).json({
//         success: true,
//         message: 'If an account with this email/phone exists, you will receive reset instructions.'
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: 'Password reset instructions have been sent.'
//     });

//   } catch (error) {
//     console.error('Forgot password error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error. Please try again later.'
//     });
//   }
// });

// // Health check route
// app.get('/api/health', (req, res) => {
//   res.json({
//     success: true,
//     message: 'Server is running!',
//     timestamp: new Date().toISOString()
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     message: 'Something went wrong!'
//   });
// });

// // Handle 404 (must be last)
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found'
//   });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`Health check: http://localhost:${PORT}/api/health`);
// });
/////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connect
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
