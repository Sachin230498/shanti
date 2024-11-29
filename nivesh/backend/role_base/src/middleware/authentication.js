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
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(req.user)
    next();
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
}

export default authenticateToken;
