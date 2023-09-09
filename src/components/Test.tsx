'use client';

import { useState } from 'react';
import { trpc } from '../app/_trpc/client';

export const Test = () => {
  const [content, setContent] = useState('');

  const { data } = trpc.getUsers.useQuery();
  const addUser = trpc.addUser.useMutation();

  if (!data) return <div>error</div>;
  return (
    <div>
      <input
        type="text"
        className="bg-black text-white"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          addUser.mutate(content);
        }}
      >
        Add user
      </button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
