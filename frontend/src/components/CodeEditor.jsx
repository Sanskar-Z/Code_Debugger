import React, { useRef, useState, useContext } from 'react';
import Editor from '@monaco-editor/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import LanguageSelector from './LanguageSelector';
import { counterContext } from '../context/context';

const CodeEditor = () => {
  const editorRef = useRef();
  const [theme, setTheme] = useState(true);
  const [value, setValue] = useState('// some comment');
  const [language] = useContext(counterContext);

  const toggleTheme = () => setTheme(!theme);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

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
      <div className="h-[80vh] border-1 my-5 py-2 px-2 pl-0 rounded-xl">
        <Editor
          height="55vh"
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
