import { NavLink } from "react-router"

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 items-center justify-center p-4 rounded-lg min-h-[480px] bg-cover bg-center bg-no-repeat bg-gray-900 text-gray-100 m-5 shadow-lg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://png.pngtree.com/thumb_back/fh260/background/20240621/pngtree-rubber-duck-debugging-code-or-rubberducking-photo-illustration-image_15805385.jpg")`
      }}
    >
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-4xl font-black text-white tracking-tight">
          Code Debugger React Apps
        </h1>
        <h2 className="text-base font-normal text-white">
          Our debugger simplifies the process of identifying and resolving issues in your React applications, allowing you to focus on building great user experiences.
        </h2>
      </div>
        <NavLink to="/debugger"><button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-md">Debug</button></NavLink>
      
    </section>
  )
}
