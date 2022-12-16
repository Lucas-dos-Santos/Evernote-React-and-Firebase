import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import './styles.scss';
import 'react-quill/dist/quill.snow.css';
import ReactLoading from 'react-loading';

function Editor({ note, updateNote }) {
  const [currentContent, setCurrentContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setCurrentContent(note.body);
  }, [note]);

  const handleChange = (content, delta, source) => {
    clearTimeout(timer);
    if (source === 'user') {
      setCurrentContent(content);
      // prettier-ignore
      setTimer(setTimeout(() => {
        setSaving(true);
        updateNote(content);
        setTimeout(() => setSaving(false), 1500);
      }, 2500));
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
    <>
      {saving && (
        <div className="saving">
          <ReactLoading type="spin" color="green" height={26} width={26} />
        </div>
      )}
      <ReactQuill
        value={currentContent}
        modules={modules}
        onChange={handleChange}
      />
    </>
  );
}

export default Editor;
