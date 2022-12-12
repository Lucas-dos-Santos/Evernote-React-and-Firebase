import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Moment from 'moment';

function ListNotes({ notes, selectNote, currentNote }) {
  return (
    <>
      <p>Search...</p>
      <p>
        {notes.length}
        {' '}
        Notes
      </p>
      <ListGroup>
				{notes.map(item) => (
					<ListGroup.Item key={item.id} onClick={() => selectNote(item.id)} active={item == currentNote}>
						{item.title.replace(/(<([^>]+)>)/ig, '').substring(0, 15)}
						{item.body.replace(/(<([^>]+)>)/ig, '').substring(0, 30)}
						{Moment(item.created_at).format('DD/MM')}
					</ListGroup.Item>
				)
				}
      </ListGroup>
    </>
  );
}

export default ListNotes;
