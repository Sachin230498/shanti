export const authRole = (...roles) => {
  return (req, res, next) => {
       console.log(req.user.role);
     if (!roles.includes(req.user.role)) {
       return res.status(403).send("NO Admin Access denied");
     }
     next();
 
  };
};


