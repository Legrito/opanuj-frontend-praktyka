import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGetUsersWithTimeout = () => {
    const handleGetUsers = () => {
      setLoading(true);
      setError(false);

      fetch(API_URL)
        .then((res) => {
          console.log('Responce 10000 timeout', res);
          if (!res.ok || res.status !== 200) {
            setError(true);
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(({ users }) => {
          if (users.length < 1) {
            setError(true);
          }
          setUsers(users);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    };

    return Promise.race([
      handleGetUsers(),
      new Promise((_, reject) =>
        setTimeout(() => {
          setError(true);
          setLoading(false);
          return reject(new Error('Timeout'));
        }, 5000)
      ),
    ]);
  };

  useEffect(() => {
    handleGetUsersWithTimeout();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        {loading && <p>Loading Users...</p>}
        {error && (
          <div className="flex flex-row items-center">
            <p className="mr-2">
              Sorry, there seems to be connectivity issues...
            </p>
            <button
              onClick={handleGetUsersWithTimeout}
              className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
            >
              Try again
            </button>
          </div>
        )}
      </div>
      {users.length > 0 && (
        <ul className="space-y-2">
          {users.map((user, index) => (
            <li
              className="bg-white p-4 rounded-md border border-gray-100"
              key={index}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
