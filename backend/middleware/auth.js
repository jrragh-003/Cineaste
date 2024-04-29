const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createJWT = (user) => {
  const token = jwt.sign(
    {
      mail: user.email,
      name: user.name,
    },
    process.env.JWT_SECRET
  );

  return token;
};

const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  const tokenFromHeader = bearer && bearer.split(" ")[1]; // Extract token from Authorization header

  const tokenFromCookie = req.cookies.token; // Get token from cookies
  const token = tokenFromHeader || tokenFromCookie;

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: "Invalid token" });
  }
};

const comparePasswords = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 5);
};

module.exports = { comparePasswords, hashPassword, createJWT, protect };
