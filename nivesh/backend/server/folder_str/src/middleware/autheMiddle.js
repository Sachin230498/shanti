import jwt from "jsonwebtoken";



const authenticationToken = (req,res,next)=>{
    const token = req.header("Auth");

    if(!token)
        return res.status(401).send("access Denied")

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next()
    } catch (error) {
        res.status(400).send("invalid Token")
    }
}

export default authenticationToken;

