function EmployeeList() {
  const employees = [
    {
      id: 1,
      name: "Harsha",
      role: "Software Engineer",
    },
    {
      id: 2,
      name: "Milan",
      role: "Tester",
    },
    {
      id: 3,
      name: "Ayesha",
      role: "Lead",
    },
  ];

  return (
    <div>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;