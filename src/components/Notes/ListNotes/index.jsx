import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Search from 'components/Search';
import Moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

function ListNotes({ notes, selectNote, currentNote, createNote, deleteNote }) {
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  const handleChange = (e) => {
    // prettier-ignore
    const filtereds = notes.filter((n) => n.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredNotes(filtereds);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <Search handleChange={handleChange} />
      <Container className="new-note">
        {notes.length}
        {' Notes'}
        <Button size="sm" variant="outline-dark" onClick={() => createNote()}>
          {'New '}
          <FontAwesomeIcon icon={faCirclePlus} />
        </Button>
      </Container>
      {filteredNotes.map((item) => (
        <Card
          className={`cards-notes ${
            item.id === currentNote.id ? 'active' : ''
          }`}
          key={item.id}
          onClick={() => selectNote(item.id)}
        >
          <Card.Body>
            <Card.Title>
              {item.title.replace(/(<([^>]+)>)/gi, '').substring(0, 15)}
            </Card.Title>
            <Card.Text>
              {item.body.replace(/(<([^>]+)>)/gi, '').substring(0, 30)}
            </Card.Text>
            <div className="footer-card">
              <Badge>
                {Moment(item.createdAt.toDate()).format('DD/MM - h:mm')}
              </Badge>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => deleteNote(item.id)}
                color="gray"
              />
            </div>
          </Card.Body>
        </Card>
      ))}
      <br />
      <br />
    </div>
  );
}

export default ListNotes;
