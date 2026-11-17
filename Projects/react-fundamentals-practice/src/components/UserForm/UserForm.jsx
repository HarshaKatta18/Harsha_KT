import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>User Form</h2>

      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
        />
      </div>

      <br />

      <div>
        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />
      </div>

      <hr />

      <h3>Preview</h3>

      <p>Name: {name}</p>

      <p>Email: {email}</p>
    </div>
  );
}

export default UserForm;

