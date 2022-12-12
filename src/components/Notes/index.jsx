import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { push as Menu } from 'react-burger-menu';
import { firestore } from 'services/firebase.utils';
import ListNotes from './ListNotes';
import './styles.scss';

function Notes({ setIsOpen, isOpen }) {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: '', body: '', id: '' });

  const getNotes = async () => {
    const collection = await firestore.collection('notes').get();
    const data = [];
    collection.forEach((doc) => {
      const obj = doc.data();
      obj.id = doc.id;
      data.push(obj);
    });
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const selectNote = (id) => {
    const note = notes.find((n) => n.id === id);
    setCurrentNote(note);
  };

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
        <ListNotes
          notes={notes}
          selectNote={selectNote}
          currentNote={currentNote}
        />
      </Menu>
      <Container className="notes-editor" id="notes-editor">
        Editor...
      </Container>
    </Row>
  );
}

export default Notes;
