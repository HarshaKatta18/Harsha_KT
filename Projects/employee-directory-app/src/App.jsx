import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Loading from "./components/Loading/Loading";
import NoData from "./components/NoData/NoData";

import employeesData from "./data/employees";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] =
    useState([]);

  const [loading, setLoading] = useState(true);

  const [searching, setSearching] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  // Initial Load
  useEffect(() => {
    const timer = setTimeout(() => {
      setEmployees(employeesData);

      setFilteredEmployees(employeesData);

      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Search With Random Delay
  useEffect(() => {
    if (loading) return;

    setSearching(true);

    const randomDelay =
      Math.floor(Math.random() * 2000) + 1000;

    const timer = setTimeout(() => {
      const filtered =
        employees.filter((employee) =>
          employee.name
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            )
        );

      setFilteredEmployees(filtered);

      setSearching(false);
    }, randomDelay);

    return () => clearTimeout(timer);
  }, [searchTerm, employees, loading]);

  return (
    <>
      <Header />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {loading ? (
        <Loading />
      ) : searching ? (
        <h2>Filtering Employees...</h2>
      ) : filteredEmployees.length > 0 ? (
        <EmployeeList
          employees={filteredEmployees}
        />
      ) : (
        <NoData />
      )}
    </>
  );
}

export default App;