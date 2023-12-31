import Link from 'next/link';
import { UserNav } from './UserNav';
import { COMPANY_NAME } from '../types/variables.d';

export const NavBar = () => {
  return (
    <nav className="border-b bg-scheme_background border-scheme_borders">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <div className="flex gap-5 text-scheme_text_titles">
          <Link className="hover:text-scheme_text_highlight" href="/">
            <p className="text-2xl font-bold">{COMPANY_NAME}</p>
          </Link>
          <Link className="hover:text-scheme_text_highlight" href="/areas">
            Areas
          </Link>
          <Link
            className="hover:text-scheme_text_highlight"
            href="/areas/production"
          >
            Produccion
          </Link>
          <Link
            className="hover:text-scheme_text_highlight"
            href="/areas/sales"
          >
            Ventas
          </Link>
          <Link
            className="hover:text-scheme_text_highlight"
            href="/areas/attention"
          >
            Atencion
          </Link>
          <Link className="hover:text-scheme_text_highlight" href="/users">
            Agregar usuario
          </Link>
        </div>
        <UserNav />
      </div>
    </nav>
  );
};
