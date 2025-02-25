"use client"

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import { getToken, isAuthenticated } from '../../utils/auth';

export default function Dashboard() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      redirect('/');
      return;
    }

    axios.get('http://localhost:3000/auth/me', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
      .then(res => setUserData(res.data))
      .catch(() => redirect('/'));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Dashboard</h2>
      {userData ? <p>Bem-vindo, {userData.email}!</p> : <p>Carregando...</p>}
    </div>
  );
}
