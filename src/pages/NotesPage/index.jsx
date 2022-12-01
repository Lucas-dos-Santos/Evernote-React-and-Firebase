import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase.utils';
import Header from '../../components/Header';
import Note from '../../components/Note';

function NotesPage() {
  const [notes, setNotes] = useState([]);

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

  return (
    <>
      <Header />
      { notes.map((note) => (
        <Note key={note.id} title={note.title} body={note.body} />
      ))}
      <div>Notes Page</div>
    </>
  );
}

export default NotesPage;
