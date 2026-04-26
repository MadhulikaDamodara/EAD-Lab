import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Controlled Form</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <p>You typed: {name}</p>
    </div>
  );
}

export default ControlledForm;