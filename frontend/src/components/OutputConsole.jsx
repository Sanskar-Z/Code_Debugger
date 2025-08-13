import React, { useContext, useState, useEffect } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { themeContext, counterContext, codeContext } from "../context/context";
import { GrPowerReset } from "react-icons/gr";

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

    useEffect(() => {
        setOutput(null)

    }, [language])


    return (
        <>
            {/* Buttons */}
            <div className="flex justify-between gap-6 my-2 items-center pt-5">
                <h6 className='pt-2  p-1 rounded-xl text-[95%]text-sm font-medium text-gray-700'>Output:</h6>
                <div className='flex gap-6 items-center'>
                    <button className="flex items-center p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                        <span className="material-icons">refresh</span>
                    </button>
                    <button onClick={runCode} className="h-10 px-4 rounded-lg bg-green-500 active:bg-green-600 text-white text-sm font-bold transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer transition">
                        Run Code
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="h-10 px-4 rounded-lg bg-[#258df4] hover:bg-blue-500 text-white text-sm font-bold transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer transition flex items-center gap-1">
                        {theme ? (
                            <>
                                <MdLightMode size={20}/> Light
                            </>
                        ) : (
                            <>
                                <MdDarkMode size={20}/> Dark
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Output Console */}
            <div className={'h-[86vh] w-[100%] border-1 border-gray-200 my-5 py-2.5 px-2.5 rounded-xl' + (theme ? " bg-gray-50" : " bg-[#1e1d1d] text-white")}>
                {output ? output : <p className='text-gray-400'>Click on "Run Code" to see the output here</p>}
            </div>
        </>
    );
}

export default OutputConsole
