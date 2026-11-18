function Welcome() {
  return <h1>Hello React</h1>;
}

function Header() {
  return <h2>Employee Portal</h2>;
}

function App() {
  return (
    <>
      <Header />
      <Welcome />
    </>
  );
}

export default App;