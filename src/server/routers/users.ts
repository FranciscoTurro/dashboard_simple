import { z } from 'zod';
import { db } from '../../db';
import { users } from '../../db/schema';
import { publicProcedure, router } from '../trpc';
import argon2 from 'argon2';

export const usersRouter = router({
  getUsers: publicProcedure.query(async () => {
    return await db.select().from(users);
  }),
  addUser: publicProcedure
    .input(
      z.object({
        user_name: z.string(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      const hashedPass = await argon2.hash(opts.input.password);
      await db.insert(users).values({
        user_name: opts.input.user_name,
        password: hashedPass,
      });
    }),
});
