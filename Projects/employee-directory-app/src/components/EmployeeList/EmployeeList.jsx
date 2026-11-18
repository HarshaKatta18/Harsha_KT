import EmployeeCard from "../EmployeeCard/EmployeeCard";

function EmployeeList({ employees }) {
  return (
    <div className="employee-grid">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          role={employee.role}
          department={
            employee.department
          }
        />
      ))}
    </div>
  );
}

export default EmployeeList;