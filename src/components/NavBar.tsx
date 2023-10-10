import Link from 'next/link';
import { UserNav } from './UserNav';

export const NavBar = () => {
  return (
    <nav className="border-b bg-background border-border">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-5">
          <Link href="/">
            <p className="text-2xl font-bold">LOGO</p>
          </Link>
          <Link href="">General</Link>
          <Link href="">Produccion</Link>
          <Link href="">Ventas</Link>
          <Link href="">Atencion</Link>
        </div>
        <UserNav />
      </div>
    </nav>
  );
};
