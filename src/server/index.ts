import { dataRouter } from './routers/data';
import { usersRouter } from './routers/users';
import { router } from './trpc';

export const appRouter = router({
  users: usersRouter,
  data: dataRouter,
});

export type AppRouter = typeof appRouter;
