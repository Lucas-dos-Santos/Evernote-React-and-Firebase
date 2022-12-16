import React from 'react';
import Form from 'react-bootstrap/Form';

function Search({ handleChange }) {
  return (
    <Form.Group>
      <Form.Control
        className="mb-3 border-0"
        type="search"
        placeholder="Search note..."
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default Search;
