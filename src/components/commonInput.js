import React, { useState } from "react";
import "../assets/css/style.css";

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Name and Email cannot be empty!");
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid email format!");
      return;
    }
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="header-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">
          {editMode ? "Edit user" : "Add user"}
        </button>
      </form>
    </div>
  );
};

export default InputHandler;
