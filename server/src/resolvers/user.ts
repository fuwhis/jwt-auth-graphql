import * as bcrypt from 'bcrypt';
import { Mutation, Resolver } from 'type-graphql';
import { User } from '../entities/User';
import { RegisterInput } from '../types/RegisterInput';

@Resolver()
export class UserResolver {
  @Mutation()
  async register(registerInput: RegisterInput) {
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

    const newUser = User.create({
      username,
      password: hashedPassword,
    });

    return {
      code: 200,
      success: true,
      data: newUser,
    };
  }
}
