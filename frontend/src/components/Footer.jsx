export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col px-5 py-10 text-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#" className="text-base text-[#60758a]">Privacy Policy</a>
          <a href="#" className="text-base text-[#60758a]">Terms of Service</a>
        </div>
        <p className="text-base text-[#60758a]">© 2023 Code Debugger. All rights reserved.</p>
      </div>
    </footer>
  )
}
