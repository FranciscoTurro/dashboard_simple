'use client';
import { SessionProvider } from 'next-auth/react';
export default SessionProvider;

//hace falta hacer esto porque el Session Provider de next auth no esta marcado como
//componente de cliente, no va a funcionar bien con esta version de Next a menos que haga esto
