import React, { useContext, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { themeContext, counterContext, codeContext } from "../context/context";

const OutputConsole = () => {
    const [theme, setTheme] = useContext(themeContext);
    const [language] = useContext(counterContext);
    const [value] = useContext(codeContext);
    const [output, setOutput] = useState(null)

    const toggleTheme = () => setTheme(!theme);

    const runCode = async () => {
        try {
            const res = await fetch("http://localhost:3000", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ language, value })
            });

            const text = await res.text();
            console.log(text)
            setOutput(text);
    
        } catch (err) {
            console.error("Error running code:", err);
        }
    }

    return (
        <>
            {/* Buttons */}
            {/* <h6 className='pt-2  p-1 rounded-xl text-[95%] text-gray-500'>Output</h6> */}
            <div className="flex justify-end gap-6 my-2 items-center">
                <button onClick={runCode} className="h-10 px-4 rounded-lg bg-[#1cd71a] active:bg-green-500 text-white text-sm font-bold transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer transition">
                    Run Code
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

            {/* Output Console */}
            <div className='h-[80vh] w-[100%] border-1 my-5 py-2.5 px-1.5 rounded-xl'>
                {output? output:`Click on "Run Code" to see the output here`}
            </div>
        </>
    );
}

export default OutputConsole
