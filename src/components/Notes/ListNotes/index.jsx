import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

function ListNotes({ notes, selectNote, currentNote, createNote }) {
  return (
    <div>
      <Container>Search...</Container>
      <Container className="new-note">
        {notes.length}
        {' Notes'}
        <Button size="sm" variant="outline-dark" onClick={() => createNote()}>
          {'New '}
          <FontAwesomeIcon icon={faCirclePlus} />
        </Button>
      </Container>
      {notes.map((item) => (
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
            <Badge bg="dark">{Moment(item.created_at).format('DD/MM')}</Badge>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ListNotes;
