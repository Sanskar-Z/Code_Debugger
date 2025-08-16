import React, { useState, useContext } from "react"
import Header from "./Header";
import Footer from "./Footer";
import LanguageSelector from "./LanguageSelector";
import CodeEditor from "./CodeEditor";
import { counterContext, themeContext, codeContext, modeContext } from "../context/context";
import OutputConsole from "./OutputConsole";



export default function Debugger() {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState(false);
  const [value, setValue] = useState("// Write your code here")
  const [mode, setMode] = useContext(modeContext)


  return (
    <>
      <counterContext.Provider value={[language, setLanguage]}>
        <themeContext.Provider value={[theme, setTheme]}>
          <codeContext.Provider value={[value, setValue]}>

            <Header className="relative" />
            <main className={"px-15 flex gap-10 py-10 max-w-[100vw] bg-[#f8fafc]" + (mode? " ": " bg-gray-900 text-gray-200")}>
              <div className={"w-[50vw] px-6 rounded-lg shadow-sm" + (mode?"  bg-white ": " bg-gray-800")}>
                <LanguageSelector />
                <CodeEditor />
              </div>

              <div className={"w-[50vw] p-6 rounded-lg shadow-sm" + (mode?"  bg-white ": " bg-gray-800")}>
                <OutputConsole />

              </div>

            </main>
            <Footer className="w-full my-5" />

          </codeContext.Provider>
        </themeContext.Provider>
      </counterContext.Provider>
    </>
  );
}
