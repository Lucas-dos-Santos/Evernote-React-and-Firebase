import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from 'components/Header';
import LogoImage from 'assets/images/logo.png';
import FormLogin from 'components/FormLogin';
import './styles.scss';

function LoginPage() {
  return (
    <>
      <Header />
      <Row className="login-container">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <img
                  src={LogoImage}
                  alt="presentation"
                />
              </Card.Title>
              <Card.Text>Your notes on the cloud</Card.Text>
              <FormLogin />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default LoginPage;
