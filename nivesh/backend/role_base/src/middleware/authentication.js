// Middleware to authenticate token
import jwt from "jsonwebtoken";
function authenticateToken(req, res, next) {
    const authHeader = req.header("Auth");
    if (!authHeader) {
      return res.status(401).send("Access denied. No token provided.");
    }
    
      const token = authHeader.replace("Bearer ", "");
      if (!token) {
        return res.status(401).send("Access denied. No token provided.");
      }


  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}

export default authenticateToken;
