export default function Navbar() {
  return (
    <nav className="bg-purpleYum rounded-b-3xl shadow-lg px-8 py-4 flex items-center justify-between">
      <span className="text-goldYum font-display text-2xl font-bold tracking-wide drop-shadow-sm">YUMYUM</span>
      <div className="space-x-6">
        <a href="/products" className="text-white font-semibold text-lg hover:text-goldYum transition-colors">Shop</a>
        <a href="/about" className="text-white font-semibold text-lg hover:text-goldYum transition-colors">About</a>
        <a href="/login" className="text-white font-semibold text-lg hover:text-goldYum transition-colors">Login</a>
      </div>
    </nav>
  )
}