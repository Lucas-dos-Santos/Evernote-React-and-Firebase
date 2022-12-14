import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { push as Menu } from 'react-burger-menu';
import NotesUtils from 'services/notes.utils';
import Editor from 'components/Editor';
import ListNotes from './ListNotes';
import './styles.scss';

function Notes({ setIsOpen, isOpen }) {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({});

  const getNotes = async () => {
    const data = await NotesUtils.getAll();
    setNotes(data);
    if (data.length >= 1) {
      setCurrentNote(data[0]);
    }
  };

  const createNote = () => {
    NotesUtils.create();
    getNotes();
  };

  const deleteNote = (id) => {
    NotesUtils.delete(id);
    getNotes();
  };

  const updateNote = async (content) => {
    const oldNote = currentNote;
    const updatedNote = await NotesUtils.update(currentNote, content);

    const newNotes = notes;
    newNotes[notes.indexOf(oldNote)] = updatedNote;
    setNotes(newNotes);
    setCurrentNote(updatedNote);
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
          createNote={createNote}
          currentNote={currentNote}
          deleteNote={deleteNote}
        />
      </Menu>
      <Container className="notes-editor" id="notes-editor">
        <Editor note={currentNote} updateNote={updateNote} />
      </Container>
    </Row>
  );
}

export default Notes;
