"use client"

import { useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/navigation';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/auth/signup', { email, password });
      alert('Usuário cadastrado com sucesso!');
      redirect('/login')
    } catch (err) {
      alert('Erro ao cadastrar!');
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
      <p>Já tem uma conta? <a href="/login">Login</a></p>
    </div>
  );
}
