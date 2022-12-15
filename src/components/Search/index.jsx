import React from 'react';
import Container from 'react-bootstrap/Container';

function Search({ handleChange }) {
  return (
    <Container>
      <input
        type="search"
        placeholder="Search note..."
        onChange={handleChange}
      />
    </Container>
  );
}

export default Search;
