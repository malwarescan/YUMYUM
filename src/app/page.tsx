import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-creamYum text-purpleYum">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-5xl font-display text-goldYum mb-4">YUMYUM</h1>
        <p className="text-2xl font-bold">Thailand's Premium Cannabis Delivery</p>
        <p className="mt-4 text-lg max-w-xl">Fast, discreet, and 100% legal cannabis products delivered to your door in Bangkok and beyond.</p>
        <div className="mt-6 flex gap-4">
          <a href="/products" className="bg-goldYum text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">Shop Now</a>
          <input type="text" placeholder="Enter Zip Code" className="px-4 py-2 rounded-lg border text-black" />
        </div>
      </main>
      <Footer />
    </div>
  )
}