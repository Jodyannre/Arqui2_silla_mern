import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [peso, setPeso] = useState("");

  function validateForm() {
    return user.length > 0 && password.length > 0 && peso.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
    <div class="text-center"> <h3>Login</h3></div>
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="user">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="ubicacion">
          <Form.Label>Ubicación</Form.Label>
          <Form.Control
            type="text"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="peso">
          <Form.Label>Peso (Kg)</Form.Label>
          <Form.Control
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" className="Submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
    </>
  );
}