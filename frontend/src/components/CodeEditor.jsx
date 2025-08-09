import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Editor from '@monaco-editor/react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import LanguageSelector from './LanguageSelector';

const CodeEditor = () => {
    const editorRef = useRef()
    const [theme, setTheme] = useState(true)
    const [value, setValue] = useState("")


    const handleChange = () => {
        setTheme(!theme)
    }

    const onMount = (editor) => {
        editorRef.current = editor
        editor.focus()
    }   

    return (
        <>
            <div className="flex flex-col max-w-[95vw] flex-1">
                      <LanguageSelector />
                    </div>

            {/* Button */}
            <div className='flex justify-end gap-6'>
                <button className="h-10 px-4 rounded-lg bg-[#1cd71a] hover:bg-green-500 text-white text-sm font-bold transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer transition">Run</button>
                <button onClick={handleChange} className="h-10 px-4 rounded-lg bg-[#258df4] hover:bg-blue-500 text-white text-sm font-bold transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer transition flex flex-row items-center gap-1">
                    {theme ? (
                        <><MdLightMode /> Light</>) : 
                        (<><MdDarkMode /> Dark</>)}
                </button>
            </div>

            {/* Code Editor */}
            <div className='h-[80vh] border-1 my-5 py-2 px-2 pl-0 rounded-xl '>
                <Editor
                    height="55vh"
                    theme={theme ? "vs" : "vs-dark"}
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                    value={value}
                    onMount={onMount}
                    onChange={
                        (value) => setValue(value)
                    }
                />
            </div>
        </>
    )
}

export default CodeEditor
