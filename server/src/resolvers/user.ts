import * as bcrypt from 'bcrypt';
import { Arg, Ctx, ID, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../entities/User';
import { Context } from '../types/Context';
import { LoginInput } from '../types/LoginInput';
import { RegisterInput } from '../types/RegisterInput';
import { UserMutationResponse } from '../types/UserMutationResponse';
import {
  createToken,
  generateRefreshToken,
  sendRefreshToken,
} from '../utils/auth';

@Resolver()
export class UserResolver {
  @Query((_return) => [User])
  async users(): Promise<User[]> {
    return await User.find();
  }

  @Mutation((_return) => UserMutationResponse)
  async register(
    @Arg('registerInput')
    registerInput: RegisterInput
  ): Promise<UserMutationResponse> {
    const { username, password } = registerInput;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return {
        code: 400,
        success: false,
        message: 'Duplicated username',
      };
    }
    const salt: string = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    // console.log('logging: ', salt, hashedPassword);
    const newUser = User.create({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return {
      code: 200,
      success: true,
      message: 'User registration successful',
      user: newUser,
    };
  }

  @Mutation((_return) => UserMutationResponse)
  async login(
    @Arg('loginInput') { username, password }: LoginInput,
    @Ctx() context: Context
  ): Promise<UserMutationResponse> {
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return {
        code: 400,
        success: false,
        message: 'User not found',
      };
    }

    const isPwdValid = await bcrypt.compare(password, existingUser.password);

    if (!isPwdValid) {
      return {
        code: 400,
        success: false,
        message: 'Incorrect password',
      };
    }
    const { res } = context;
    // refresh_token
    sendRefreshToken(res, existingUser);

    return {
      code: 200,
      success: true,
      message: 'Logged in successfully',
      user: existingUser,
      accessToken: createToken('accessToken', existingUser),
      refreshToken: generateRefreshToken(existingUser),
    };
  }

  @Mutation((_return) => UserMutationResponse)
  async logout(
    @Arg('userId', (_type) => ID) userId: number,
    @Ctx() { res }: Context
  ): Promise<UserMutationResponse> {
    const existingUser = await User.findOne(userId);

    if (!existingUser) {
      return {
        code: 400,
        success: false,
      };
    }

    existingUser.tokenVersion += 1;

    await existingUser.save();

    res.clearCookie(process.env.REFRESH_TOKEN_COOKIE_NAME as string, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/refresh_token',
    });

    return {
      code: 200,
      success: true,
    };
  }
}
