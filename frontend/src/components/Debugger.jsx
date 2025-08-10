import React from "react"
import { useState } from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import LanguageSelector from "./LanguageSelector";
import CodeEditor from "./CodeEditor";
import { counterContext, snippetContext } from "../context/context";

export default function Debugger() {
  const [language, setLanguage] = useState("javascript");
  const [snippet, setSnippet] = useState("// Write your code here");
  
  return (
    <>
    <counterContext.Provider value={[language, setLanguage]}>
      <snippetContext.Provider value={{snippet, setSnippet}}> 

      <Header className="relative"/>
      <main className="px-20 flex flex-1 flex-col justify-center py-5">
        <div className="flex flex-col max-w-[95vw] flex-1">
        <LanguageSelector />
      </div>
        <div className="py-2 max-w-[100vw]">
          <CodeEditor />
        </div> 

      </main>
      <Footer className="absolute bottom-0 w-full" />
      </snippetContext.Provider>
    </counterContext.Provider>
    </>
  );
}
