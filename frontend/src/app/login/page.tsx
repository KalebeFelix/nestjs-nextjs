"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');// Redireciona para o dashboard após login
    } catch (error: any) { // Tipagem do erro como 'any' ou um tipo específico, se conhecido
      console.error("Erro na requisição:", error);

      if (error.response) {
          // O servidor respondeu com um status diferente de 2xx
          console.error("Dados da resposta:", error.response.data);
          console.error("Status da resposta:", error.response.status);
          alert(`Erro ao fazer login: ${error.response.data.message || 'Credenciais inválidas'}`); // Exibe mensagem do backend ou genérica
      } else if (error.request) {
          // A requisição foi feita, mas não houve resposta
          console.error("Nenhuma resposta recebida:", error.request);
          alert('Erro ao fazer login: Não foi possível conectar ao servidor.');
      } else {
          // Alguma outra coisa aconteceu ao configurar a requisição
          console.error("Erro de configuração da requisição:", error.message);
          alert('Erro ao fazer login: Erro desconhecido.');
      }
  }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
      <p>Não tem uma conta? <a href="/signup">Cadastre-se</a></p>
    </div>
  );
}
