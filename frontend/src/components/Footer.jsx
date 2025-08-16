import { MdCode } from "react-icons/md";
import { NavLink } from "react-router";
import { modeContext } from "../context/context";
import { useContext } from "react";

export default function Footer() {
  const [mode, setMode] = useContext(modeContext)

  return (
    <footer className={(mode?"": " bg-gray-800 text-gray-100")}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={"flex items-center space-x-2 text-xl font-bold" + (mode?"text-gray-800": " text-gray-100")} >
            <span className="text-indigo-600">
              <MdCode size={30} />
            </span>
            <span className="text-lg font-bold tracking-tight">Code Debugger</span>
          </div>
          <div className="flex space-x-8 text-gray-600 mb-6 md:mb-0">
            <NavLink className="hover:text-indigo-600 transition-colors" href="">About</NavLink>
            <NavLink className="hover:text-indigo-600 transition-colors" href="">Privacy Policy</NavLink>
            <NavLink className="hover:text-indigo-600 transition-colors" href="">Contact</NavLink>
          </div>
          <div className="text-gray-500">
            © 2025 Code Debugger. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
