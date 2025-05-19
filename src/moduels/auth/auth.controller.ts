import { Request, Response } from "express";
import { auth } from "./auth.model";
import jwt from "jsonwebtoken";
import { config } from "../../../config/config";
import { log } from "node:console";
type User = {
  userName: string;
  userEmail: string;
};

const setJwt = (user: User): string => {
  return jwt.sign(user, config.jwtSecret);
};

const getUser: (req: Request, res: Response) => void = async (
  req: Request,
  res: Response
) => {
  try {
    const users: any = await auth.find();
    res.json(users);
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

const signUp: (req: Request, res: Response) => void = async (
  req: Request,
  res: Response
) => {
  const { userName, userEmail, password } = req.body;
  const checkDuplicate = await auth.findOne({ userName });
  if (checkDuplicate) {
    res.send("User already exist");
  }
  auth.create({ userName, userEmail, password });
  const token: string = setJwt({ userName, userEmail });
  console.log(token);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({
    userName,
    userEmail,
  });
};

const verify = (req: Request, res: Response) => {
  // coming from a middleware
  const user = (req as any).user;
  res.json(user);
  console.log(user);
};

export { getUser, signUp, verify };
