export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4">
      <div className="text-[#111418]">{icon}</div>
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-bold text-[#111418]">{title}</h2>
        <p className="text-sm font-normal text-[#60758a]">{description}</p>
      </div>
    </div>
  )
}
