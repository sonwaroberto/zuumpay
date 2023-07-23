import { Request, Response, NextFunction } from "express";

type User = { role: String };

interface CustomRequest extends Request {
  user: User;
}

module.exports = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role !== "superadmin") {
<<<<<<< HEAD
    res.status(403).send("Not the superadmin");
=======
    res.status(403).send("Not the suderadmin");
>>>>>>> a8d0c9b30339e46493c7b5214911f1ff3656f953
    return;
  }
  next();
};
