import { NextFunction, Response } from "express";
import { prismaClient } from "../apps/database";
import { UserRequest } from "../types/user-request";
import { verifyToken } from "../utilities";
import { ResponseError } from "../errors/response-error";

export const authMiddleware = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];

    if (authHeader) {
      const accessToken = authHeader.split(" ")[1];

      if (!accessToken) {
        res.status(401).json({ errors: "Unauthorized" }).end();
      }

      const decoded = await verifyToken(accessToken, "access");

      if (!decoded) {
        res.status(401).json({ errors: "Unauthorized" }).end();
      }

      const user = await prismaClient.user.findUnique({
        where: {
          username: decoded.username,
        },
      });
      if (!user) {
        throw new ResponseError(404, "User is not found");
      }

      req.user = user;
      next();
      return;
    }

    res
      .status(401)
      .json({
        errors: "Unauthorized",
      })
      .end();
  } catch (error) {
    next(error);
  }
};
