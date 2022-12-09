import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import PresentationImage from '../../assets/images/presentation.png';
import './styles.scss';

function HomePage() {
  return (
    <>
      <Header />
      <Row className="home-container">
        <Col>
          <h1>
            Create notes easily and access when you wants on the cloud
          </h1>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs.
          </p>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
          </p>
          <div>
            <Link to="/register" className="btn btn-outline-light">Register for free Now</Link>
          </div>
        </Col>
        <Col>
          <img
            src={PresentationImage}
            alt="presentation"
          />
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
