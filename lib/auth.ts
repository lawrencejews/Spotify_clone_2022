import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

// Check for a valid cookie when signing in.
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.LUBS_ACCESS_TOKEN;

    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not authorized" });
      }
      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: "Not authorized" });
  };
};

// Check for verification for a user playlist
export const validateToken = (token) => {
  const user = jwt.verify(token, "hello");
  return user;
};
