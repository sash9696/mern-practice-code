import React, { useEffect, useState } from "react";

// useEffect
// React components must be pure
// Rendering should only calculate the UI

// Side effects that must happen separately
// side effects:
// Api Calls
// WEbsockets
// Timers
// Subscriptions
// Manual DOM manipulation
// Logging

// Data fetching

const url = "https://jsonplaceholder.typicode.com/users";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     try {
  //       const response = await fetch(url);

  //       const data = await response.json();
  //       // console.log('data',data)

  //       setUsers(data);
  //     } catch (err) {
  //       setError("Failed to fetch users");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchUsers();
  // }, []);

  useEffect(() => {
   

    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => setError('failed to fetch users'))
      .finally(() => setLoading(false))


  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Users />
    </div>
  );
}

export default App;
