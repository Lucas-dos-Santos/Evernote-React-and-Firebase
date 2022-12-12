import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from 'components/Header';
import LogoImage from 'assets/images/logo.png';
import FormRegister from 'components/FormRegister';
import './styles.scss';

function RegisterPage() {
  return (
    <>
      <Header />
      <Row className="register-container">
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
              <FormRegister />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default RegisterPage;
