import React, { useState, useEffect, useRef } from 'react'
import ReactQuill, { Quill } from "react-quill";
import { FormContext } from "../../Contexts/FormContext"

import Counter from "./QuillCounter";
import CharacterLimiter from "./QuillCharacterLimiter";

import "react-quill/dist/quill.snow.css";
import "./QuillEditor.css";

export const QuillEditor = (props) => {

  Quill.register('modules/counter', Counter);
  Quill.register('modules/characterLimiter', CharacterLimiter);


  const [stateText, setStateText] = useState(null);
  const { setStateEditor } = FormContext()

  const reactQuillRef = useRef();

  const handleChange = value => {
    setStateText(value);
    setStateEditor(value)
  };

  /*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
  const modules = {
    characterLimiter: {
      max: 500
    },
    counter: {
      container: '#counter',
      unit: 'character'
    },
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ size: [] }],
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
      <>
        <div className="text-editor">
          <ReactQuill
            theme="snow"
            onChange={handleChange}
            placeholder={props.placeholder}
            ref={reactQuillRef}
            value={stateText}
            modules={modules}
            formats={formats}
          />
        </div>
        <div id="counter">0</div>
      </>
    );
  }

  return renderQuillEditor();

};

export default QuillEditor;
