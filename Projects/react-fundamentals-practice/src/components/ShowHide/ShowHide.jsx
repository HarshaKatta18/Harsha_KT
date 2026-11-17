import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Show / Hide Component</h2>

      <button
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"} Details
      </button>

      {show && (
        <div>
          <h3>Employee Information</h3>

          <p>Name: Harsha</p>

          <p>Role: Software Engineer</p>

          <p>Location: Navi Mumbai</p>
        </div>
      )}
    </div>
  );
}

export default ShowHide;