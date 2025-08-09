import React from "react"
import { useState } from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import LanguageSelector from "./LanguageSelector";
import CodeEditor from "./CodeEditor";
import { counterContext } from "../context/context";


export default function Debugger() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Write your code here");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
 
  
  return (
    <>
    <counterContext.Provider value={[language, setLanguage]}>

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
    </counterContext.Provider>
    </>
  );
}
