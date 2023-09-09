import { publicProcedure, router } from './trpc';
import { db } from '../db';
import { companies, company_areas, users } from '../db/schema';
import { z } from 'zod';

export const appRouter = router({
  //argon2 para passwords
  getUsers: publicProcedure.query(async () => {
    return await db.select().from(users);
  }),
  addUser: publicProcedure.input(z.string()).mutation(async (opts) => {
    await db
      .insert(users)
      .values({ user_name: opts.input, password: 'password' });
    return true;
  }),
});

export type AppRouter = typeof appRouter;
