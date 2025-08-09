
import React from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 

export default function Debugger() {
  return (
    <>
      <Header className="relative"/>
      <main className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          <h1 className="text-2xl font-bold">Debugger Page</h1>
          {/* Your debugger UI here */}
        </div>
      </main>
      <Footer className="absolute bottom-0 w-full" />
    </>
  );
}
