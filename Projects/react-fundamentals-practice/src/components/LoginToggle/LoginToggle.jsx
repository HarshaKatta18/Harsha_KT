import { useState } from "react";

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Login / Logout Toggle</h2>

      <h3>
        {isLoggedIn
          ? "Welcome Harsha"
          : "Please Login"}
      </h3>

      <button
        onClick={() =>
          setIsLoggedIn(!isLoggedIn)
        }
      >
        {isLoggedIn
          ? "Logout"
          : "Login"}
      </button>
    </div>
  );
}

export default LoginToggle;