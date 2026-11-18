function EmployeeList() {
  const employees = [
    { id: 1, name: "Harsha" },
    { id: 2, name: "Ayesha" },
  ];

  return (
    <>
      {employees.map((employee) => (
        <div key={employee.id}>
          {employee.name}
        </div>
      ))}
    </>
  );
}

export default EmployeeList;