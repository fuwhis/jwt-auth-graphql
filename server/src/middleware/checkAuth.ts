import { AuthenticationError } from 'apollo-server-express';
import { Secret, verify } from 'jsonwebtoken';
import { MiddlewareFn } from 'type-graphql';
import { Context } from '../types/Context';
import { UserAuthPayload } from '../types/UserAuthPayload';

export const checkAuth: MiddlewareFn<Context> = ({ context }, next) => {
  // const username: string = context.username || "guest";
  // console.log(`Logging access: ${username} -> ${info.parentType.name}.${info.fieldName}`);
  //   console.log('CONTEXT', context);
  try {
    // authHeader here is "Bearer accessToken"
    const authHeader = context.req.header('Authorization');
    const accessToken = authHeader && authHeader.split(' ')[1];

    if (!accessToken) {
      throw new AuthenticationError(
        'Not authenticated to perform GraphQL operations'
      );
    }

    const decodedUser = verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET as Secret
    ) as UserAuthPayload;

    context.user = decodedUser;
    // console.log('DECODED USER: ', decodedUser);

    return next();
  } catch (error) {
    throw new AuthenticationError(
      `Error authenticating user, ${JSON.stringify(error)}`
    );
  }
};
