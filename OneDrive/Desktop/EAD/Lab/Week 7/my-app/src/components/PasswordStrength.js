import React, { useState } from "react";

function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pwd) => {
    let score = 0;

    // Without regex
    if (pwd.length >= 6) score++;
    if (pwd.length >= 10) score++;

    // With regex
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 2) return "Weak";
    if (score <= 4) return "Medium";
    return "Strong";
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(checkStrength(pwd));
  };

  return (
    <div>
      <h3>Password Strength Checker</h3>

      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      <p>Strength: {strength}</p>
    </div>
  );
}

export default PasswordStrength;