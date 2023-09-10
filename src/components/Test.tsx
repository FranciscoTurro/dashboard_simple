'use client';

import { useState } from 'react';
import { trpc } from '../app/_trpc/client';
import { useSession, signIn, signOut } from 'next-auth/react';

const AuthButton = () => {
  const { data: sessionData } = useSession();
  if (sessionData)
    return (
      <div>
        <h1>{sessionData.user?.name}</h1>
        <button className="bg-red-900" onClick={() => signOut()}>
          Sign OUT
        </button>
      </div>
    );
  else
    return (
      <div>
        <h1>not signed in chief</h1>
        <button className="bg-red-900" onClick={() => signIn()}>
          Sign IN
        </button>
      </div>
    );
};

export const Test = () => {
  const [user_name, setUser_name] = useState('');
  const [password, setPassword] = useState('');

  const { data } = trpc.users.getUsers.useQuery();
  const addUser = trpc.users.addUser.useMutation();

  if (!data) return <div>error</div>;
  return (
    <div>
      <div className="flex gap-4">
        <AuthButton />
        <input
          type="text"
          className="bg-black text-white"
          onChange={(e) => {
            setUser_name(e.target.value);
          }}
        />
        <input
          type="text"
          className="bg-black text-white"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        className="bg-red-500"
        onClick={async () => {
          addUser.mutate({ user_name, password });
        }}
      >
        Add user
      </button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
