import { Menu, X, UtensilsCrossed } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-green-500 to-lime-400 text-white shadow-sm">
              <UtensilsCrossed size={20} />
            </span>
            <span className="text-xl font-semibold tracking-tight text-gray-900">Foodza</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Docs</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</a>
            <a href="#cta" className="px-4 py-2 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 shadow-sm">Get started</a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 pt-2">
              <a onClick={() => setOpen(false)} href="#features" className="text-gray-700 px-2 py-2 rounded hover:bg-gray-100">Features</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="text-gray-700 px-2 py-2 rounded hover:bg-gray-100">Pricing</a>
              <a onClick={() => setOpen(false)} href="#" className="text-gray-700 px-2 py-2 rounded hover:bg-gray-100">Docs</a>
              <div className="h-px bg-gray-200 my-1" />
              <a onClick={() => setOpen(false)} href="#" className="px-2 py-2 text-gray-700">Sign in</a>
              <a onClick={() => setOpen(false)} href="#cta" className="px-3 py-2 rounded-lg text-center font-semibold text-white bg-gray-900 hover:bg-gray-800">Get started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
