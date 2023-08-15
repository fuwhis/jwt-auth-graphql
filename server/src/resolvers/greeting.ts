import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';
import { User } from '../entities/User';
import { checkAuth } from '../middleware/checkAuth';
import { Context } from '../types/Context';

@Resolver()
export class GreetingResolver {
  @Query((_return) => String)
  @UseMiddleware(checkAuth)
  async hello(@Ctx() context: Context): Promise<string> {
    // console.log('Context: ', context);
    const { user } = context;
    const existingUser = await User.findOne(user.userId);

    return `Hi, ${existingUser ? existingUser.username : 'World'}`;
  }
}
