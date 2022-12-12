import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import UserContext from 'contexts/user';
import LogoImage from 'assets/images/logo.png';
import WhiteImage from 'assets/images/logo-white.png';
import './styles.scss';

function Header({ setIsOpen, isOpen }) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({});
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg" className={user.uid && 'navbar-logged'}>
      <Container>
        <Link to={user.uid ? '/notes' : '/'} className="navbar-brand">
          <img
            src={user.uid ? WhiteImage : LogoImage}
            alt="brand-logo"
          />
        </Link>
        {user.uid && (
        <Button variant="outline-dark" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faList} />
        </Button>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user.uid
              ? (
                <>
                  <div className="email">{user.uid && user.email}</div>
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
