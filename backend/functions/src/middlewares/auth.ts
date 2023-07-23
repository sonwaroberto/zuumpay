import { Request, Response, NextFunction } from "express";
const admin = require("firebase-admin");

interface CustomRequest extends Request {
  user?: any;
}

module.exports = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (
    !req.headers ||
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    res.status(401).send("Unauthorized");
    return;
  }
  const idToken = req.headers.authorization.split(" ")[1];
  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (e) {
    res.status(401).send("Unauthorized");
    return;
  }
};
