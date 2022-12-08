import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/user';
import LogoImage from '../../assets/images/logo.png';
import './styles.scss';

function Header() {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({});
    sessionStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <Navbar bg="light" expand="lg" className={user.uid && 'navbar-logged'}>
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            src={LogoImage}
            alt="brand-logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user.uid
              ? (
                <>
                  <div className="email text-muted me-3">{user.uid && user.email}</div>
                  <Link to="/notes" className="nav-link">My Notes</Link>
                  <Button className="btn" variant="outline-dark" onClick={handleLogout}>Logout</Button>
                </>
              )
              : (
                <>
                  <Link to="/register" className="nav-link">Register</Link>
                  <Link to="/login" className="btn btn-outline-dark">Login</Link>
                </>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
