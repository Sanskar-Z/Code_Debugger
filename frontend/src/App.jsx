import Header from './components/Header'
import Features from './components/Features'
import Debugger from './components/Debugger'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Home/></>
    },
    {
      path: "/Debugger",
      element: <><Debugger/></>
    },
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App