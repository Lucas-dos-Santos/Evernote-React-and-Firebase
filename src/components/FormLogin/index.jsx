import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase.utils';
import UserContext from '../../contexts/user';
import './styles.scss';

function FormLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  if (user.uid) { return navigate('/notes'); }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await auth.signInWithEmailAndPassword(email, password);
      const { uid } = resp.user;
      setUser({ uid, email });
      sessionStorage.setItem('user', JSON.stringify({ uid, email }));
      navigate('/');
      toast.success('Login efetuado com sucesso!');
    } catch (err) {
      toast.error('Email ou senha inválido!');
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
          <Link to="/register">Register or</Link>
          <Button type="submit" variant="outline-dark">Login</Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormLogin;
