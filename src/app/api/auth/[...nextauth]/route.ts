import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '../../../../db';
import { users } from '../../../../db/schema';
import { eq } from 'drizzle-orm';
import argon2 from 'argon2';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        user_name: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        const user = await db.query.users.findFirst({
          where: eq(users.user_name, credentials.user_name),
        });

        if (!user) return null;

        const validPass = await argon2.verify(
          user.password!, //puedo garantizar que la password existe porque el usuario existe
          credentials.password
        );

        if (!validPass) return null;

        return { id: user.user_id, name: user.user_name } as any; //as any :c bug de next-auth
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
