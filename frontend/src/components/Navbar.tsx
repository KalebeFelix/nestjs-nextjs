import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <h2>Meu App</h2>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}