import { NextFunction, Request, Response } from 'express';
import { ERROR_CODES } from '../types';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log({ statusCode });
  switch (statusCode) {
    case ERROR_CODES.VALIDATION_ERROR:
      res.json({
        title: 'Validation Failed',
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case ERROR_CODES.UNAUTHORIZED:
      res.json({
        title: 'Unauthorized',
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case ERROR_CODES.FORBIDDEN:
      res.json({
        title: 'Forbidden',
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case ERROR_CODES.NOT_FOUND:
      res.json({
        title: 'Not Found',
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case ERROR_CODES.SERVER_ERROR:
      res.json({
        title: 'Internal Server error',
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case ERROR_CODES.BAD_GATEWAY:
      res.json({
        title: 'Bad Gateway',
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case ERROR_CODES.GATEWAY_TIMEOUT:
      res.json({
        title: 'Gateway time out',
        message: err.message,
        stackTrace: err.stack
      });
      break;
    default:
      console.info('No error occurred, All Good!');
      break;
  }
};
