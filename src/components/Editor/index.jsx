import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({ note, updateNote }) {
  const [currentContent, setCurrentContent] = useState('');
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setCurrentContent(note.body);
  }, [note]);

  const handleChange = (content, delta, source) => {
    clearTimeout(timer);
    if (source === 'user') {
      setCurrentContent(content);
      setTimer(setTimeout(() => updateNote(content), 5000));
    }
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [('bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block')],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      [{ align: [] }],
      ['link'],
      ['clean'],
    ],
  };

  return (
    <ReactQuill
      value={currentContent}
      modules={modules}
      onChange={handleChange}
    />
  );
}

export default Editor;
