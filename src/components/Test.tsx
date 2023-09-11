'use client';

import { useState } from 'react';
import { trpc } from '../app/_trpc/client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from './Button';
import { Input } from './Input';

const AuthButton = () => {
  const { data: sessionData } = useSession();
  if (sessionData)
    return (
      <div>
        <h1>{sessionData.user?.name}</h1>
        <Button onClick={() => signOut()}>Sign OUT</Button>
      </div>
    );
  else
    return (
      <div>
        <h1>not signed in chief</h1>
        <Button onClick={() => signIn()}>Sign IN</Button>
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
      <AuthButton />
      <div className="flex gap-4">
        <Input
          type="text"
          className="bg-black text-white"
          onChange={(e) => {
            setUser_name(e.target.value);
          }}
        />
        <Input
          type="text"
          className="bg-black text-white"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <Button
        onClick={async () => {
          addUser.mutate({ user_name, password });
        }}
      >
        Add user
      </Button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
