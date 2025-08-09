import React from "react"
import { useState } from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import LanguageSelector from "./LanguageSelector";


export default function Debugger() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Write your code here");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  
  return (
    <>
      <Header className="relative"/>
      <main className="px-20 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[95vw] flex-1">
          <LanguageSelector className="" />
        </div>
        
      </main>
      <Footer className="absolute bottom-0 w-full" />
    </>
  );
}
