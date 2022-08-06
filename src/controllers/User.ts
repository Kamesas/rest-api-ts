import { Request, Response } from "express";

const getUser = (req: Request, res: Response) => {
  res.send("I am the get todos route");
};

module.exports = {
  getUser,
};
