import '@/styles/globals.css';
import type { Metadata } from 'next';
import Provider from './_trpc/Provider';

export const metadata: Metadata = {
  title: 'Tablero de admin',
  description: 'Tablero',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
