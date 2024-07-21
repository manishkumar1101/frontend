import React, { useEffect, useState } from "react";
import { Input, Button, Row, Col } from "antd";

const InputHandler = ({ onSubmit, editingUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
  if (editingUser) {
    setName(editingUser.name);
    setEmail(editingUser.email);
  } else {
    setName("");
    setEmail("");
  }
}, [editingUser]);

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
    <div>
      <form onSubmit={handleSubmit}>
      <Row justify="center" style={{ marginBottom: '10px' }}>
        <Col>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: 200, marginBottom: 10 }}

          />
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: '10px' }}>
        <Col>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: 200, marginBottom: 10 }}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Button type="primary" onClick={handleSubmit}>
            {editingUser ? "Update user" : "Add user"}
          </Button>
        </Col>
      </Row>
      </form>
    </div>
  );
};

export default InputHandler;
