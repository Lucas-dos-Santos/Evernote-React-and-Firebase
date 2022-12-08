import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserContext from '../../contexts/user';
import { auth } from '../../firebase/firebase.utils';
import './styles.scss';

function FormRegister() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  if (user.uid) { return <Navigate to="/notes" />; }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await auth.createUserWithEmailAndPassword(email, password);
      const { uid } = resp.user;
      navigate('/notes');
      setUser({ uid, email });
      sessionStorage.setItem('user', JSON.stringify({ uid, email }));
      toast.success('Registro efetuado com sucesso!');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        toast.error('O email já está em uso!');
      } else {
        toast.error('Email Inválido!');
      }
    }
  };

  return (
    <Container className="form-register">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div className="buttons">
          <Link to="/login">Login or</Link>
          <Button type="submit" variant="outline-dark">Register</Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormRegister;
