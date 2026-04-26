import React, { useState } from "react";

function Child(props) {
  return <h4>Name from Parent: {props.name}</h4>;
}

function StateProps() {
  const [name, setName] = useState("Madhulika");

  return (
    <div>
      <h3>State & Props Example</h3>

      <button onClick={() => setName("CBIT Student")}>
        Change Name
      </button>

      <Child name={name} />
    </div>
  );
}

export default StateProps;