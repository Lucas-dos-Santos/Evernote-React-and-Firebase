import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './styles.scss';
import { push as Menu } from 'react-burger-menu';

function Note({ setIsOpen, isOpen }) {
  return (
    <Row className="notes" id="notes">
      <Menu
        pageWrapId="notes-editor"
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        disableAutoFocus
        outerContainerId="notes"
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </Menu>
      <Container className="notes-editor" id="notes-editor">
        Editor...
      </Container>
    </Row>
  );
}

export default Note;
