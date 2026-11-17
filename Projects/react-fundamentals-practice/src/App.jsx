import Counter from "./components/Counter/Counter";
import UserForm from "./components/UserForm/UserForm";
import LoginToggle from "./components/LoginToggle/LoginToggle";
import ShowHide from "./components/ShowHide/ShowHide";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import ProductCards from "./components/ProductCards/ProductCards";
import ApiUsers from "./components/ApiUsers/ApiUsers";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">
        React Fundamentals Practice
      </h1>

      <div className="section">
        <Counter />
      </div>

      <div className="section">
        <UserForm />
      </div>

      <div className="section">
        <LoginToggle />
      </div>

      <div className="section">
        <ShowHide />
      </div>

      <div className="section">
        <EmployeeList />
      </div>

      <div className="section">
        <ProductCards />
      </div>

      <div className="section">
        <ApiUsers />
      </div>
    </div>
  );
}

export default App;