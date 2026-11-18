function LoginToggle() {
  const loggedIn = true;

  return (
    <h2>
      {loggedIn
        ? "Welcome User"
        : "Please Login"}
    </h2>
  );
}

export default LoginToggle;