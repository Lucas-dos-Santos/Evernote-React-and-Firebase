import React, { useState } from 'react';
import Header from '../../components/Header';
import Notes from '../../components/Notes';

function NotesPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}

export default NotesPage;
