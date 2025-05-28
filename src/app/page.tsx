import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-creamYum text-purpleYum">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-6xl font-display font-bold text-goldYum mb-2 tracking-tight">YUMYUM</h1>
        <p className="text-2xl font-display text-purpleYum font-semibold mb-3">Thailand's Premium Cannabis Delivery</p>
        <p className="text-base font-sans text-purpleYum max-w-md mb-6">
          Fast, discreet, and 100% legal cannabis products delivered to your door in Bangkok and beyond.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <a href="/products" className="bg-goldYum text-white px-6 py-3 text-sm rounded-xl font-semibold shadow-sm hover:bg-yellow-500 transition">
            Shop Now
          </a>
          <input
            type="text"
            placeholder="Enter Zip Code"
            className="px-4 py-3 rounded-xl border border-gray-300 text-black shadow-sm w-full sm:w-auto"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}