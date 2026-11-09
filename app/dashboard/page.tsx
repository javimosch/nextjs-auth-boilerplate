import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [accountInfo, setAccountInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAccountInfo = async () => {
      const token = localStorage.getItem('jwt');
      const res = await fetch('/api/account', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const { error } = await res.json();
        setError(error);
      } else {
        const data = await res.json();
        setAccountInfo(data);
      }
    };

    fetchAccountInfo();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {error && <p>{error}</p>}
      {accountInfo ? (
        <div>
          <h2>Account Information</h2>
          <pre>{JSON.stringify(accountInfo, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading account information...</p>
      )}
    </div>
  );
}
