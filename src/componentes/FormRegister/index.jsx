import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './styles.scss';

function FormRegister() {
  return (
    <Container className="form-register">
      <Form>
        <Form.Group className="mb-1" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="buttons">
          <Link href="/login">Login or</Link>
          <Button variant="outline-dark">Register</Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormRegister;
