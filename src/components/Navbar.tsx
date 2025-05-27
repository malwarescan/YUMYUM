export default function Navbar() {
    return (
      <nav className="bg-white text-purpleYum py-4 px-6 flex justify-between items-center shadow-md">
        <div className="font-display text-2xl text-goldYum">YUM<span className="text-purpleYum">YUM</span></div>
        <div className="space-x-6 text-sm font-semibold">
          <a href="/" className="hover:underline">Home</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </nav>
    )
  }