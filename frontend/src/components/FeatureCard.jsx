import { modeContext } from "../context/context";
import { useContext } from "react";

export default function FeatureCard({ icon, title, description }) {
  const [mode, setMode] = useContext(modeContext)

  return (
    <div className={"p-8 rounded-2xl shadow-md " + (mode? " bg-white hover:shadow-xl transition-shadow duration-300": " bg-gray-800 hover:shadow-indigo-500/10 transition-shadow duration-300")}>
      <div className={"flex items-center justify-center h-16 w-16 rounded-full  mb-6" + (mode?" bg-indigo-100 text-indigo-600": " bg-gray-700 text-indigo-400")}>
        <span className="material-icons text-3xl ">{icon}</span>
      </div>
      <h3 className={"text-2xl font-semibold mb-3" + (mode?"":" text-white")}>{title}</h3>
      <p className={mode?"text-gray-600": "text-gray-400"}>{description}</p>
    </div>

  )
}
