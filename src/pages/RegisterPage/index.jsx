import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from '../../componentes/Header';
import LogoImage from '../../assets/images/logo.png';
import FormRegister from '../../componentes/FormRegister';
import './styles.scss';

function RegisterPage() {
  return (
    <>
      <Header />
      <Row className="register-container">
        <Col md={{ span: 6, offset: 3 }}>
          <Card style={{ width: '18rem' }}>
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
