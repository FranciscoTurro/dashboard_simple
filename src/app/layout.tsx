import '@/styles/globals.css';
import type { Metadata } from 'next';
import Provider from './_trpc/Provider';
import SessionProvider from '../components/SessionProvider';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: 'Tablero de admin',
  description: 'Tablero',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <Provider>
          <SessionProvider session={session}>{children}</SessionProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
