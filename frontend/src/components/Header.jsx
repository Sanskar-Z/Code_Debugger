import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { MdCode, MdLightMode, MdDarkMode } from "react-icons/md";
import { modeContext } from "../context/context";
import { useContext, useState } from "react";

export default function Header() {
  const [mode, setMode] = useContext(modeContext)

  return (
    <header className={"flex items-center justify-between px-10 py-3" + (mode?" border-b border-[#f0f2f5]": " py-4 bg-gray-800 text-gray-100")}>
      <NavLink to="/" className={"flex items-center space-x-2 text-xl font-bold" + (mode?"text-gray-800": " text-gray-100")}>
        <span className="text-indigo-600">
          <MdCode size={30} />
        </span> 
        <span className="text-lg font-bold tracking-tight">Code Debugger</span>
      </NavLink>
      <div className="flex gap-8 items-center p-0.5">
        <nav className={"flex items-center  " + (mode?" gap-9": " gap-13")}>
          <NavLink to="/" className={"text-sm font-medium"+(mode? " text-gray-600 transform hover:bg-gray-100 hover:text-indigo-600 rounded-xl p-2 transition active:bg-gray-200": " text-gray-400 transfom hover:text-indigo-400 hover:transition")}>Home</NavLink>
          <NavLink to="/features" className={"text-sm font-medium"+(mode? " text-gray-600 transform hover:bg-gray-100 hover:text-indigo-600 rounded-xl p-2 transition active:bg-gray-200": " text-gray-400 transfom hover:text-indigo-400 hover:transition")}>Features</NavLink>
          <NavLink to="/Debugger" className={"text-sm font-medium"+(mode? " text-gray-600 transform hover:bg-gray-100 hover:text-indigo-600 rounded-xl p-2 transition active:bg-gray-200": " text-gray-400 transfom hover:text-indigo-400 hover:transition")}>Debugger</NavLink>
          <NavLink to="/support" className={"text-sm font-medium"+(mode? " text-gray-600 transform hover:bg-gray-100 hover:text-indigo-600 rounded-xl p-2 transition active:bg-gray-200": " text-gray-400 transfom hover:text-indigo-400 hover:transition")}>Support</NavLink>
        </nav>
      </div>
      <div className="flex gap-6">
        <button onClick={() => setMode(!mode)} className="transform hover:text-indigo-600 transition">
          {mode ? (
            <>
              <MdLightMode size={20} /> 
            </>
          ) : (
            <>
              <MdDarkMode size={20} /> 
            </>)}
        </button>
        <FaCircleUser size={30} color="#d3d3d3" />
      </div>
    </header>
  )
}
