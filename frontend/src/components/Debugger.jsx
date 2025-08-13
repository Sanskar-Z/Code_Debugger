import React, { useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import LanguageSelector from "./LanguageSelector";
import CodeEditor from "./CodeEditor";
import { counterContext, themeContext, codeContext } from "../context/context";
import OutputConsole from "./OutputConsole";



export default function Debugger() {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState(false);
  const [value, setValue] = useState("// Write your code here")


  return (
    <>
      <counterContext.Provider value={[language, setLanguage]}>
          <themeContext.Provider value={[theme, setTheme]}>
            <codeContext.Provider value={[value, setValue]}>


          <Header className="relative" />
          <main className="px-15 flex gap-15 py-2 max-w-[100vw] bg-[#f8fafc]">
            <div className="w-[50vw] bg-white p-6 rounded-lg shadow-sm">
              <LanguageSelector />
              <CodeEditor />
            </div>

            <div className="w-[40vw] bg-white p-6 rounded-lg shadow-sm">
              <OutputConsole />

            </div>

          </main>
          <Footer className="absolute bottom-0 w-full" />
          </codeContext.Provider>
          </themeContext.Provider>
      </counterContext.Provider>
    </>
  );
}
