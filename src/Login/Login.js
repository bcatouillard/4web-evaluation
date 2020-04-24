import React from "react";
import "./Login.css";
import {Button, Form, Alert} from 'react-bootstrap';

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  formHandler,
  hideErrorMessage
}) => (
  <>
    <div className="login">
      <Form onSubmit={formHandler}>
      <Form.Group controlId="email">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="login__email"
            placeholder="Email"
            />
        </Form.Group>
        <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            className="login__password"
            placeholder="Password"
          />
        </Form.Group>
        <Alert variant="danger"style={hideErrorMessage}>
          Bad credentials
        </Alert>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </div>
  </>
);

export default Login;
