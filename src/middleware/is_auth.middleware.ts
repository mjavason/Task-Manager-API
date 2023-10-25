import { NextFunction, Request, Response } from 'express';
import {
  AuthFailureResponse,
  NotFoundResponse,
  ForbiddenResponse,
  BadRequestResponse,
  InternalErrorResponse,
  SuccessMsgResponse,
  FailureMsgResponse,
  SuccessResponse,
  AccessTokenErrorResponse,
  TokenRefreshResponse,
} from '../helpers/response';
import { verifyJwt } from '../utils/jwt';
import { ACCESS_TOKEN_SECRET } from '../constants';

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  // const accessToken = req.headers.authorization?.split(' ')[1] || '';

  const accessToken = req.cookies.token;
  console.log(req.cookies.token);

  if (!accessToken) {
    return AccessTokenErrorResponse(res, 'Please login');
  }
  const decoded = await verifyJwt(accessToken, ACCESS_TOKEN_SECRET);
  if (!decoded) {
    return AccessTokenErrorResponse(res, 'Unauthorized');
  }
  res.locals.user = decoded;

  //verify user actually exists
  // const validUser = await demoService.getUserInfo(res.locals.user);

  console.log(decoded);
  return next();
};

export default isAuth;
