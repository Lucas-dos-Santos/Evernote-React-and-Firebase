import React, { useState } from 'react';
import Header from '../../components/Header';
import Note from '../../components/Note';

function NotesPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Note setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}

export default NotesPage;
