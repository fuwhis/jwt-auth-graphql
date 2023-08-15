import * as bcrypt from 'bcrypt';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../entities/User';
import { LoginInput } from '../types/LoginInput';
import { RegisterInput } from '../types/RegisterInput';
import { UserMutationResponse } from '../types/UserMutationResponse';
import { createToken } from '../utils/auth';

@Resolver()
export class UserResolver {
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
    @Arg('loginInput') { username, password }: LoginInput
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

    return {
      code: 200,
      success: true,
      message: 'Logged in successfully',
      user: existingUser,
      accessToken: createToken(existingUser),
    };
  }
}
