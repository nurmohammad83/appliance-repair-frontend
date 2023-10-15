import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const decodeToken = (token: string): JwtPayload => {
  return jwt.decode(token) as JwtPayload;
};

const verifyToken = (token: string, secret: Secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};

export const jwtHelpers = { decodeToken, verifyToken };
