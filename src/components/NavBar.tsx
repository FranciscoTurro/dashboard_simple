import Link from 'next/link';
import { UserNav } from './UserNav';

export const NavBar = () => {
  return (
    <nav className="border-b bg-scheme_background border-scheme_borders">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <div className="flex gap-5 text-scheme_text_titles">
          <Link className="hover:text-scheme_text_highlight" href="/">
            <p className="text-2xl font-bold">LOGO</p>
          </Link>
          <Link className="hover:text-scheme_text_highlight" href="">
            General
          </Link>
          <Link className="hover:text-scheme_text_highlight" href="">
            Produccion
          </Link>
          <Link className="hover:text-scheme_text_highlight" href="">
            Ventas
          </Link>
          <Link className="hover:text-scheme_text_highlight" href="">
            Atencion
          </Link>
        </div>
        <UserNav />
      </div>
    </nav>
  );
};
