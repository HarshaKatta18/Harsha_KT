import { useEffect, useState } from "react";

function ApiUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      // Artificial delay of 10 seconds
      await new Promise((resolve) =>
        setTimeout(resolve, 10000)
      );

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>API Users</h2>

      <button onClick={fetchUsers}>
        Fetch Users
      </button>

      <br />
      <br />

      {loading && <h3>Loading...</h3>}

      {!loading &&
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default ApiUsers;