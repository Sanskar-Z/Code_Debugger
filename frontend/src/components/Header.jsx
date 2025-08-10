import { FaFireFlameCurved } from "react-icons/fa6";    
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[#f0f2f5] px-10 py-3">
      <div className="flex items-center gap-4 text-[#111418]">
        <div className="w-4 h-4 font-bold">
            <FaFireFlameCurved />
        </div>
        <h2 className="text-lg font-bold tracking-tight">Code Debugger</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
            <NavLink to="/" className="text-sm font-medium text-[#111418]  hover:bg-gray-100 rounded-xl p-2 transition active:bg-gray-200">Home</NavLink>
            <NavLink to="/features" className="text-sm font-medium text-[#111418] hover:bg-gray-100 rounded-xl p-2 transition active:bg-gray-200">Features</NavLink>
            <NavLink to="/Debugger" className="text-sm font-medium text-[#111418] hover:bg-gray-100 rounded-xl p-2 transition active:bg-gray-200">Debugger</NavLink>
            <NavLink to="/support" className="text-sm font-medium text-[#111418] hover:bg-gray-100 rounded-xl p-2 transition active:bg-gray-200">Support</NavLink> 
        </nav>
        <button className="h-10 px-4 rounded-lg bg-[#258df4] text-white text-sm font-bold hover:-translate-y-1 hover:scale-105 hover:cursor-pointer transition-transform">
          Get Started
        </button>
      </div>
    </header>
  )
}
