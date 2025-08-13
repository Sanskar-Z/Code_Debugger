import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { MdCode } from "react-icons/md";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[#f0f2f5] px-10 py-3">
      <div className="flex  gap-4">
        <div className="text-indigo-600">
            <MdCode size={30}/>
        </div>
        <h2 className="text-lg font-bold tracking-tight">Code Debugger</h2>
      </div>
      <div className="flex gap-8 items-center p-0.5">
        <nav className="flex items-center gap-9 justify-center">
            <NavLink to="/" className="text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-xl p-2 transition active:bg-gray-200">Home</NavLink>
            <NavLink to="/features" className="text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-xl p-2 transition active:bg-gray-200">Features</NavLink>
            <NavLink to="/Debugger" className="text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-xl p-2 transition active:bg-gray-200">Debugger</NavLink>
            <NavLink to="/support" className="text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-xl p-2 transition active:bg-gray-200">Support</NavLink> 
        </nav>
      </div>
          <FaCircleUser size={30} color="#d3d3d3"/>
    </header>
  )
}
