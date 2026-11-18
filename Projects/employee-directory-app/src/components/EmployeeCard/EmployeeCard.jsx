function EmployeeCard({
  name,
  role,
  department,
}) {
  return (
    <div className="employee-card">
      <h3>{name}</h3>

      <p>
        <strong>Role:</strong> {role}
      </p>

      <p>
        <strong>Department:</strong>{" "}
        {department}
      </p>
    </div>
  );
}

export default EmployeeCard;