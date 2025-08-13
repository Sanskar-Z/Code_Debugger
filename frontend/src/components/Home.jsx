import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-40 flex flex-col items-center justify-center py-5 bg-gray-100">
        <div className="flex flex-col max-w-[960px] flex-1">
          <Hero />
        </div>
        <Features />
      </main>
      <Footer />
    </>
  );
}
