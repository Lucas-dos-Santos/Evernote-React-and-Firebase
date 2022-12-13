import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
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

  return <ReactQuill value="currentContent" modules={modules} />;
}

export default Editor;
