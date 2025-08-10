import React, { useRef, useState, useContext, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import LanguageSelector from './LanguageSelector';
import { counterContext, snippetContext } from '../context/context';
import { CODE_SNIPPETS } from '../constants';
import { themeContext } from "../context/context";

const CodeEditor = (props) => {
  const editorRef = useRef();
  const [value, setValue] = useState('// some comment');
  const [language] = useContext(counterContext);
  const [snippet, setSnippet] = useState("");
  const [theme, setTheme] = useContext(themeContext);
  


  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    setSnippet(CODE_SNIPPETS[language])
  }, [language])
  

  return (
    <>

      {/* Code Editor */}
      <div className={"h-[80vh] w-[100%] border-1 my-5 py-2.5 px-0 rounded-xl " + (theme?" ":" bg-[#1e1d1d]")}>
        <Editor
          height="100%"
          theme={theme ? 'vs' : 'vs-dark'}
          language={language || 'javascript'}
          value={snippet}   
          onMount={onMount}
          onChange={setValue}
        />
      </div>
    </>
  );
};

export default CodeEditor;
