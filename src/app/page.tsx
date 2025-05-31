'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { useState } from 'react'
import { useCart } from '@/lib/CartContext'
// No import needed for public images

const featuredProducts = [
  {
    id: '1',
    name: 'Indica Dream',
    description: 'Relaxing, smooth, and perfect for winding down.',
    category: 'Indica',
    price: 19.99,
    image_url: '/products/indica-dream-illustration.png',
    strain_type: 'Indica',
    thc_percent: 20,
  },
  {
    id: '2',
    name: 'Tangie Sunrise',
    description: 'Citrusy, uplifting, and energizing.',
    category: 'Sativa',
    price: 22.99,
    image_url: '/products/tangie-sunrise-illustration.png',
    strain_type: 'Sativa',
    thc_percent: 18,
  },
  {
    id: '3',
    name: 'Purple Haze',
    description: 'Classic, creative, and euphoric.',
    category: 'Hybrid',
    price: 21.99,
    image_url: '/products/purple-haze-illustration.png',
    strain_type: 'Hybrid',
    thc_percent: 19,
  },
]

const testimonials = [
  {
    name: 'Maya',
    avatar: '/avatars/maya.png',
    quote: 'Super fast delivery and the quality is top notch! Will order again.'
  },
  {
    name: 'Alex',
    avatar: '/avatars/alex.png',
    quote: 'Discreet, friendly, and the best selection in Bangkok.'
  },
  {
    name: 'Nina',
    avatar: '/avatars/nina.png',
    quote: 'Love the packaging and the freshness. Highly recommended!'
  },
]

const trustBadges = [
  { icon: '🚚', label: 'Fast Delivery' },
  { icon: '🔒', label: '100% Legal' },
  { icon: '🌱', label: 'Freshness Guaranteed' },
  { icon: '⭐', label: 'Top Rated' },
]

export default function HomePage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const { cart, addToCart } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  // Helper to get total items in cart
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen flex flex-col bg-[#583e8d]">
      <Navbar />

      {/* Floating Cart Button */}
      <button
        className="fixed bottom-8 right-8 z-50 bg-goldYum text-white rounded-full shadow-lg w-16 h-16 flex flex-col items-center justify-center text-xl font-bold hover:bg-yellow-400 transition"
        onClick={() => setCartOpen(true)}
        aria-label="View cart"
      >
        🛒
        <span className="text-xs mt-1">{cartCount}</span>
      </button>

      {/* Cart Modal */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-goldYum"
              onClick={() => setCartOpen(false)}
              aria-label="Close cart"
            >
              ×
            </button>
            <h2 className="text-2xl font-display text-purpleYum mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="divide-y divide-gray-200 mb-4">
                {cart.map((item) => (
                  <li key={item.id} className="py-2 flex justify-between items-center">
                    <span className="font-semibold text-purpleYum">{item.name}</span>
                    <span className="text-goldYum">x{item.quantity}</span>
                    <span className="text-purpleYum">${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-goldYum">${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
              </div>
              <button
                className="bg-goldYum text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full"
                disabled={cart.length === 0}
                onClick={() => { setCartOpen(false); window.location.href = '/checkout'; }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow flex flex-col items-center text-center px-6 py-12 space-y-16">
        {/* Hero Section */}
        <div className="bg-[#f8e7c4] rounded-3xl shadow-[0_8px_32px_0_rgba(88,62,141,0.15)] border-4 border-[#efad00] p-10 w-full max-w-xl flex flex-col items-center relative overflow-hidden">
          {/* Animated background sparkles */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Example: floating sparkles or shapes could go here */}
          </div>
          <Image
            src="/logo.png"
            alt="YumYum Logo"
            width={220}
            height={220}
            priority
            className="mx-auto w-[180px] md:w-[220px] relative z-10 animate-bounce"
          />

          <h1 className="text-5xl md:text-6xl font-bold font-display text-[#efad00] mt-4 relative z-10">
            YUMYUM
          </h1>

          <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#583e8d] relative z-10">
            Thailand's Premium Cannabis Delivery
          </h2>

          <div className="flex items-center space-x-3 mt-2 relative z-10">
            <div className="bg-[#e14d96] text-white font-bold rounded-full px-4 py-1 text-sm shadow-md animate-pulse">
              Fresh!
            </div>
          </div>

          <p className="max-w-md text-base font-sans text-[#583e8d] mt-4 relative z-10">
            Fast, discreet, and 100% legal cannabis products delivered to your door in Bangkok and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full relative z-10">
            <a
              href="/products"
              className="bg-[#efad00] hover:bg-yellow-400 text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e14d96] w-full sm:w-auto animate-glow"
            >
              Shop Now
            </a>
            <input
              type="text"
              placeholder="Enter zip code"
              className="px-4 py-3 rounded-xl text-[#583e8d] bg-white border-2 border-gray-200 shadow-inner text-base w-full sm:w-auto focus:border-[#efad00] focus:ring-2 focus:ring-[#e14d96]"
            />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-2xl">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow p-4 min-w-[120px] border-2 border-goldYum">
              <span className="text-3xl mb-1">{badge.icon}</span>
              <span className="text-sm font-bold text-purpleYum">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <section className="w-full max-w-4xl mx-auto">
          <h3 className="text-3xl font-display text-goldYum mb-6">Featured Products</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                imgClassName="w-full h-48 object-contain bg-[#f8e7c4] rounded-t-xl p-4"
                onAddToCart={() => addToCart({ id: product.id, name: product.name, price: product.price })}
              />
            ))}
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="w-full max-w-xl mx-auto mt-10">
          <h3 className="text-2xl font-display text-[#583e8d] mb-4">What our customers say</h3>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 border-goldYum">
            <p className="text-lg font-sans text-purpleYum italic mb-2">“{testimonials[testimonialIdx].quote}”</p>
            <span className="font-bold text-goldYum">{testimonials[testimonialIdx].name}</span>
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${idx === testimonialIdx ? 'bg-goldYum' : 'bg-gray-300'} transition`}
                  onClick={() => setTestimonialIdx(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Newsletter Signup in Footer area */}
      <div className="flex flex-col items-center justify-center py-8 bg-[#f8e7c4] border-t-4 border-goldYum">
        <h4 className="text-xl font-display text-purpleYum mb-2">Get fresh deals & updates!</h4>
        <form className="flex flex-col sm:flex-row gap-2 w-full max-w-md justify-center">
          <input type="email" placeholder="Your email" className="px-4 py-3 rounded-xl border-2 border-goldYum focus:outline-none text-purpleYum w-full" />
          <button className="bg-goldYum text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full sm:w-auto">Subscribe</button>
        </form>
      </div>

      <Footer />
    </div>
  )
}
