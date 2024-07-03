const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register = async (req, res) => {
  const { username, password ,email, mobile} = req.body;

  if (!username || !password || !email || !mobile) {
    return res.status(400).send("Username and password are required");
  }

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = new User({ username, password: hashedPassword,email,mobile});
    await newUser.save();

    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send("Server error");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ username }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

          res
            .status(200)
            .send({ message: "Login successful", token });
  } catch (err) {
    res.status(500).send("Server error");
  }
};


const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Failed to fetch users");
  }
};

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { register, login,getAllUser, authenticateJWT };
