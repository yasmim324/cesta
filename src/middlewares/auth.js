const jwt = require("jsonwebtoken");
//jvl jsontoken
const { promisify } = require("util");
const authConfig = require("../config/auth");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(req.headers);
  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }
  const [, token] = authHeader.split("");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    console.log(decoded);
    //ded
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido" });
  }
};
