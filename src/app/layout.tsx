import '@/styles/globals.css';
import type { Metadata } from 'next';
import Provider from './trpc/Provider';
import SessionProvider from '../components/session/SessionProvider';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { NavBar } from '../components/NavBar';
import 'react-circular-progressbar/dist/styles.css';

export const metadata: Metadata = {
  title: 'Tablero de admin',
  description: 'Tablero',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();
  // if (!session || !session.user) redirect('/api/auth/signin');
  //esto es un tablero de admin, es comportamiento correcto que no se pueda ver NADA a menos
  //que el usuario este autenticado

  return (
    <html lang="en">
      <body>
        <Provider>
          <SessionProvider session={session}>
            <NavBar />
            {children}
          </SessionProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
