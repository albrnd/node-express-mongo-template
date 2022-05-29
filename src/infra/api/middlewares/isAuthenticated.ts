import { NextFunction, Request, Response } from 'express';

const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // TODO: Check authentication

  next();
};

export { isAuthenticated };
