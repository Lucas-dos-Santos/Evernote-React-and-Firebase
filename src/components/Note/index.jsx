import React from 'react';

function Note({ title, body }) {
  return (
    <>
      <h1>{title}</h1>
      <h4>{body}</h4>
    </>
  );
}

export default Note;
