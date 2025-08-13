export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mb-6">
        <span className="material-icons text-3xl text-indigo-600">{icon}</span>
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>

  )
}
