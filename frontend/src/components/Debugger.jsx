import React from "react"
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LanguageSelector from "./LanguageSelector";
import CodeEditor from "./CodeEditor";
import { counterContext, snippetContext } from "../context/context";
import OutputConsole from "./OutputConsole";
import { themeContext } from "../context/context";


export default function Debugger() {
  const [language, setLanguage] = useState("javascript");
  const [snippet, setSnippet] = useState("// Write your code here");
  const [theme, setTheme] = useState(true);


  return (
    <>
      <counterContext.Provider value={[language, setLanguage]}>
        <snippetContext.Provider value={{ snippet, setSnippet }}>
          <themeContext.Provider value={[theme, setTheme]}>


          <Header className="relative" />
          <main className="px-15 flex gap-15 py-2 max-w-[100vw]">
            <div className="w-[50vw]">
              <LanguageSelector />
              <CodeEditor />
            </div>

            <div className="w-[40vw] mt-10.5">
              <OutputConsole />

            </div>

          </main>
          <Footer className="absolute bottom-0 w-full" />
          </themeContext.Provider>
        </snippetContext.Provider>
      </counterContext.Provider>
    </>
  );
}
