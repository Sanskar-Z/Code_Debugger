import FeatureCard from './FeatureCard'
import { modeContext } from "../context/context";
import { useContext } from "react";

const featureData = [
  {
    title: 'Real-time Error Detection',
    description: "Instantly identify and get detailed reports on errors as they happen in your application's lifecycle.",
    icon: "bug_report"
  },
  {
    title: 'Component State Inspection',
    description: "Dive deep into your components' state and props at any point in time to understand their behavior.",
    icon: "data_usage"
  },
  {
    title: 'Performance Monitoring',
    description: "Analyze component render times and identify performance bottlenecks to optimize your app's speed.",
    icon: "timeline"
  },
  {
    title: 'Network Request Logging',
    description: "Track and inspect all network requests made by your application, complete with headers and payloads.",
    icon: "network_check"
  },
  {
    title: 'Redux Store Visualization',
    description: "Visualize your entire Redux store, track actions, and see state changes in real-time for easier state management.",
    icon: "memory"
  },
  {
    title: 'Seamless Integration',
    description: "Easily integrate with your existing React development environment and popular frameworks like React.js",
    icon: "integration_instructions"
  },
  
]

export default function Features() {
  const [mode, setMode] = useContext(modeContext)

  return (
    <section className="flex flex-col gap-10 px-4 py-10">
      <div className="text-center mb-6">
        <h2 className={"text-4xl font-bold text-gray-800 mb-4"+ (mode?" ": " text-white")}>
          Key Features
        </h2>
        <p class={"text-lg text-gray-600 max-w-3xl mx-auto" + (mode?" ": " text-gray-400")}>Explore the powerful features that make our React debugger a must-have tool for developers.</p>
      </div>
      <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-8"}>
        {featureData.map((feature, index) => (
          <FeatureCard key={index} {...feature}/>
        ))}
      </div>
    </section>
  )
}
