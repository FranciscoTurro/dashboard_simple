import { TRPCError, initTRPC } from '@trpc/server';
import { getServerSession } from 'next-auth';

//consigo la session en la funcion createContext, que es llamada en api/trpc/[trpc]/route.ts
//esto me deja saber si el usuario esta logeado o no para crear procedimientos privados

export const createContext = async () => {
  const session = await getServerSession();
  return { session };
};

const t = initTRPC.context<typeof createContext>().create({});

export const router = t.router;
export const publicProcedure = t.procedure;

const enforceUserAuth = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) throw new TRPCError({ code: 'UNAUTHORIZED' });
  return next({
    ctx: {
      session: ctx.session,
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceUserAuth);
