import React, { useRef, useState, useContext, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { counterContext, themeContext, codeContext, modeContext} from '../context/context';
import { CODE_SNIPPETS } from '../constants';

const CodeEditor = (props) => {
  const editorRef = useRef();
  const [value, setValue] = useContext(codeContext);
  const [language] = useContext(counterContext);
  const [theme] = useContext(themeContext);
  const [mode, setMode] = useContext(modeContext)
  

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    setValue(CODE_SNIPPETS[language])
  }, [language])

  return (
    <>
    
      {/* Code Editor */}
      <div className={"h-[86vh] w-[100%] border-1 border-gray-700 my-5 py-2.5 px-0 rounded-xl " + (theme?" bg-white":" bg-[#1e1d1d]")}>
        <Editor
          height="100%"
          theme={theme ? 'vs' : 'vs-dark'}
          language={language || 'javascript'}
          value={value}   
          onMount={onMount}
          onChange={setValue}
        />
      </div>
      
    </>
  );
};

export default CodeEditor;
