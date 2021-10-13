import React, { useState } from 'react'
import ReactQuill from "react-quill";
import { FormContext } from "../../Contexts/FormContext"

import "react-quill/dist/quill.snow.css";
import "./QuillEditor.css";

export const QuillEditor = () => {
  const [stateText, setStateText] = useState({ value: null });
  const { setStateEditor } = FormContext()

  const handleChange = value => {
    setStateText({ value });
    setStateEditor(value)
  };

  /*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }

  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

  const renderQuillEditor = () => {
    return (
      <div className="text-editor">
        {/* <EditorToolbar /> */}
        <ReactQuill
          theme="snow"
          value={stateText.value}
          onChange={handleChange}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
        />
      </div>
    );
  }

  return renderQuillEditor();

};

export default QuillEditor;
