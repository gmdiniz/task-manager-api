import jwt from "jsonwebtoken";
import RouterHandler from "../interface/routerHandler";
import CustomRequest from "../interface/customRequest";

const config = process.env;

const verifyJWT: RouterHandler = (req: CustomRequest, res, next) => {
  const token = req.headers["authorization"];

  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  if (!config.SECRET)
    return res.status(500).json({
      auth: false,
      message:
        "Internal server error: SECRET environment variable is not defined.",
    });

  try {
    jwt.verify(token, config.SECRET, function (err, decoded) {
      if (err) {
        return res
          .status(500)
          .json({ auth: false, message: "Failed to authenticate token." });
      }

      req.userId = parseInt((decoded as { id: string }).id, 10);

      if (next) {
        next();
      }
    });
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }
};

export default verifyJWT;
