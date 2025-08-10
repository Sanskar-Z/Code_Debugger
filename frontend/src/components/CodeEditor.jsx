import React, { useRef, useState, useContext, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import LanguageSelector from './LanguageSelector';
import { counterContext, snippetContext } from '../context/context';
import { CODE_SNIPPETS } from '../constants';

const CodeEditor = () => {
  const editorRef = useRef();
  const [theme, setTheme] = useState(true);
  const [value, setValue] = useState('// some comment');
  const [language] = useContext(counterContext);
  const [snippet, setSnippet] = useState("");
  
  const toggleTheme = () => setTheme(!theme);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    setSnippet(CODE_SNIPPETS[language])
  }, [language])
  

  return (
    <>

      {/* Buttons */}
      <div className="flex justify-end gap-6 my-2">
        <button className="h-10 px-4 rounded-lg bg-[#1cd71a] hover:bg-green-500 text-white text-sm font-bold transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer transition">
          Run
        </button>
        <button
          onClick={toggleTheme}
          className="h-10 px-4 rounded-lg bg-[#258df4] hover:bg-blue-500 text-white text-sm font-bold transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer transition flex items-center gap-1"
        >
          {theme ? (
            <>
              <MdLightMode /> Light
            </>
          ) : (
            <>
              <MdDarkMode /> Dark
            </>
          )}
        </button>
      </div>

      {/* Code Editor */}
      <div className={"h-[80vh] border-1 my-5 py-2.5 px-0 rounded-xl " + (theme?" ":" bg-[#1e1d1d]")}>
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
