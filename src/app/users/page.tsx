'use client';

import { useState } from 'react';
import { Input } from '../../components/ui/Input';
import { trpc } from '../trpc/client';
import { Button } from '../../components/ui/Button';

const UsersPage = () => {
  const { mutate } = trpc.users.addUser.useMutation();

  const [formData, setFormData] = useState({
    user_name: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formData.user_name.trim() === '' || formData.password.trim() === '') {
      console.log('Please enter both username and password');
      return;
    }

    try {
      await mutate(formData);
      setFormData({
        user_name: '',
        password: '',
      });
      console.log('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="flex p-10 justify-center">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <Input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Agregar usuario</Button>
      </form>
    </div>
  );
};

export default UsersPage;
