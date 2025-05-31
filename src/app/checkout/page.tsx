'use client'

import { useState, useRef, useEffect } from 'react'
import { useCart } from '@/lib/CartContext'
import { useRouter } from 'next/navigation'
import Confetti from 'react-confetti'

const steps = [
  { key: 'Age', title: 'Age Verification', desc: 'You must be at least 20 years old to order.' },
  { key: 'Delivery', title: 'Delivery Details', desc: 'Where should we deliver your order?' },
  { key: 'Disclaimer', title: 'Legal Disclaimer', desc: 'Confirm you understand the law.' },
  { key: 'Payment', title: 'Payment Method', desc: 'How would you like to pay?' },
  { key: 'Review', title: 'Review & Confirm', desc: 'Almost done! Please review your order.' }
]

const provinces = [
  "Bangkok", "Chiang Mai", "Phuket", "Chonburi", "Khon Kaen", "Nakhon Ratchasima", "Nonthaburi", "Pathum Thani", "Samut Prakan", "Udon Thani", "Surat Thani", "Songkhla", "Nakhon Si Thammarat", "Rayong", "Ayutthaya", "Nakhon Sawan", "Saraburi", "Lampang", "Kanchanaburi", "Pattani", "Trang", "Loei", "Other"
]
const DELIVERY_FEE = 50
const DELIVERY_ESTIMATE = '1-2 hours in Bangkok, 1 day nationwide'

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const [step, setStep] = useState(0)
  const [ageConfirmed, setAgeConfirmed] = useState(false)
  const [delivery, setDelivery] = useState({
    name: '',
    phone: '',
    address: '',
    province: '',
    zip: ''
  })
  const [deliveryErrors, setDeliveryErrors] = useState<Record<string, string>>({})
  const [disclaimer, setDisclaimer] = useState(false)
  const [payment, setPayment] = useState('cod')
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [placingOrder, setPlacingOrder] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const router = useRouter()

  // Autofocus first field of each step
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (step === 1 && nameRef.current) nameRef.current.focus()
    if (step === 1 && phoneRef.current) phoneRef.current.blur() // ensure only first field is focused
  }, [step])

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const grandTotal = total + (cart.length > 0 ? DELIVERY_FEE : 0)

  // Progress bar width
  const progress = ((step + 1) / steps.length) * 100

  // Delivery validation
  function validateDelivery() {
    const errors: Record<string, string> = {}
    if (!delivery.name) errors.name = 'Name is required.'
    if (!delivery.phone) errors.phone = 'Phone is required.'
    if (!delivery.address) errors.address = 'Address is required.'
    if (!delivery.province) errors.province = 'Province/City is required.'
    if (!delivery.zip) errors.zip = 'Zip code is required.'
    setDeliveryErrors(errors)
    return Object.keys(errors).length === 0
  }

  function handleDeliveryNext(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (validateDelivery()) setStep(2)
  }

  function handlePlaceOrder() {
    setPlacingOrder(true)
    setTimeout(() => {
      setOrderPlaced(true)
      clearCart()
      setPlacingOrder(false)
    }, 1500)
  }

  useEffect(() => {
    if (orderPlaced) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [orderPlaced])

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8e7c4] text-purpleYum px-4 animate-fade-in">
        {showConfetti && typeof window !== 'undefined' && (
          <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} />
        )}
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center relative overflow-hidden">
          <h1 className="text-3xl font-display text-goldYum mb-4 relative z-20">Order Placed! 🎉</h1>
          <p className="mb-4 relative z-20">Thank you for your order. Your products will be delivered soon.<br />Estimated delivery: <b>{DELIVERY_ESTIMATE}</b><br />For questions, contact our support team.</p>
          <button className="bg-goldYum text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition relative z-20 focus:outline-goldYum" onClick={() => router.push('/')}>Back to Home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f8e7c4] text-purpleYum px-2 py-6 md:flex-row md:justify-center md:items-start md:gap-12">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-40">
        <div className="h-2 bg-goldYum transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      {/* Main Checkout Card */}
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 max-w-lg w-full mt-8 md:mt-16 animate-slide-up relative z-10">
        <h1 className="text-3xl font-display text-goldYum mb-2">Checkout</h1>
        <div className="flex justify-between mb-4">
          {steps.map((s, i) => (
            <div key={s.key} className={`flex-1 text-center font-bold ${i === step ? 'text-goldYum' : 'text-gray-400'}`}>{s.key}</div>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
          {step === 0 && <span>🔞</span>}
          {step === 1 && <span>🏠</span>}
          {step === 2 && <span>⚖️</span>}
          {step === 3 && <span>💳</span>}
          {step === 4 && <span>📝</span>}
          {steps[step].title}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{steps[step].desc}</p>
        {/* Step Content */}
        <div className="animate-fade-in">
          {step === 0 && (
            <div className="space-y-6">
              <button
                className={`px-6 py-3 rounded-xl font-bold w-full text-lg flex items-center justify-center gap-2 ${ageConfirmed ? 'bg-goldYum text-white' : 'bg-gray-200 text-gray-500'}`}
                onClick={() => setAgeConfirmed(true)}
                autoFocus
              >
                <span>🔞</span> Yes, I am 20+
              </button>
              <button
                className="px-6 py-3 rounded-xl font-bold w-full bg-gray-100 text-gray-400 text-lg flex items-center justify-center gap-2"
                onClick={() => setAgeConfirmed(false)}
              >
                <span>🙅‍♂️</span> No, I am under 20
              </button>
              <button
                className="mt-4 bg-goldYum text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full text-lg"
                onClick={() => ageConfirmed && setStep(1)}
                disabled={!ageConfirmed}
              >
                Next
              </button>
            </div>
          )}
          {step === 1 && (
            <form className="space-y-4" onSubmit={handleDeliveryNext} autoComplete="off">
              <div className="flex items-center gap-2">
                <span className="text-xl">🧑</span>
                <input ref={nameRef} type="text" required placeholder="Full Name" className={`w-full px-4 py-3 rounded-xl border-2 ${deliveryErrors.name ? 'border-red-400' : 'border-goldYum'} focus:ring-2 focus:ring-goldYum`} value={delivery.name} onChange={e => setDelivery({ ...delivery, name: e.target.value })} aria-label="Full Name" />
              </div>
              {deliveryErrors.name && <div className="text-red-500 text-xs ml-8">{deliveryErrors.name}</div>}
              <div className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <input ref={phoneRef} type="tel" required placeholder="Phone Number" className={`w-full px-4 py-3 rounded-xl border-2 ${deliveryErrors.phone ? 'border-red-400' : 'border-goldYum'} focus:ring-2 focus:ring-goldYum`} value={delivery.phone} onChange={e => setDelivery({ ...delivery, phone: e.target.value })} aria-label="Phone Number" />
              </div>
              {deliveryErrors.phone && <div className="text-red-500 text-xs ml-8">{deliveryErrors.phone}</div>}
              <div className="flex items-center gap-2">
                <span className="text-xl">🏠</span>
                <input type="text" required placeholder="Address" className={`w-full px-4 py-3 rounded-xl border-2 ${deliveryErrors.address ? 'border-red-400' : 'border-goldYum'} focus:ring-2 focus:ring-goldYum`} value={delivery.address} onChange={e => setDelivery({ ...delivery, address: e.target.value })} aria-label="Address" />
              </div>
              {deliveryErrors.address && <div className="text-red-500 text-xs ml-8">{deliveryErrors.address}</div>}
              <div className="flex items-center gap-2">
                <span className="text-xl">🏙️</span>
                <select required className={`w-full px-4 py-3 rounded-xl border-2 ${deliveryErrors.province ? 'border-red-400' : 'border-goldYum'} focus:ring-2 focus:ring-goldYum`} value={delivery.province} onChange={e => setDelivery({ ...delivery, province: e.target.value })} aria-label="Province/City">
                  <option value="">Select Province</option>
                  {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              {deliveryErrors.province && <div className="text-red-500 text-xs ml-8">{deliveryErrors.province}</div>}
              <div className="flex items-center gap-2">
                <span className="text-xl">🏷️</span>
                <input type="text" required placeholder="Zip Code" className={`w-full px-4 py-3 rounded-xl border-2 ${deliveryErrors.zip ? 'border-red-400' : 'border-goldYum'} focus:ring-2 focus:ring-goldYum`} value={delivery.zip} onChange={e => setDelivery({ ...delivery, zip: e.target.value })} aria-label="Zip Code" />
              </div>
              {deliveryErrors.zip && <div className="text-red-500 text-xs ml-8">{deliveryErrors.zip}</div>}
              <div className="text-xs text-gray-500 ml-8">We'll only use your info for delivery. {DELIVERY_ESTIMATE}</div>
              <div className="flex gap-2 mt-4">
                <button
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition w-full focus:outline-goldYum"
                  onClick={() => setStep(step - 1)}
                  type="button"
                >
                  Back
                </button>
                <button className="bg-goldYum text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full focus:outline-goldYum" type="submit">Next</button>
              </div>
            </form>
          )}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl mb-2"><span>⚖️</span> Legal Disclaimer</div>
              <p className="text-sm text-gray-600">By ordering, you confirm you are 20+ and understand all local laws regarding cannabis use and delivery in Thailand.</p>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={disclaimer} onChange={e => setDisclaimer(e.target.checked)} />
                <span>I agree to the above statement</span>
              </label>
              <div className="flex gap-2 mt-4">
                <button
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition w-full"
                  onClick={() => setStep(step - 1)}
                  type="button"
                >
                  Back
                </button>
                <button
                  className="bg-goldYum text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full"
                  onClick={() => disclaimer && setStep(3)}
                  disabled={!disclaimer}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl mb-2"><span>💳</span> Payment Method</div>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" checked={payment === 'cod'} onChange={() => setPayment('cod')} />
                <span>Cash on Delivery</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" checked={payment === 'bank'} onChange={() => setPayment('bank')} />
                <span>Bank Transfer</span>
              </label>
              <div className="flex gap-2 mt-4">
                <button
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition w-full"
                  onClick={() => setStep(step - 1)}
                  type="button"
                >
                  Back
                </button>
                <button
                  className="bg-goldYum text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full"
                  onClick={() => setStep(4)}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl mb-2"><span>📝</span> Review & Confirm</div>
              <ul className="mb-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between py-1">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-bold text-lg mb-2">
                <span>Total</span>
                <span className="text-goldYum">${total.toFixed(2)}</span>
              </div>
              <div className="text-left text-sm text-gray-600 mb-2">
                <div><b>Name:</b> {delivery.name}</div>
                <div><b>Phone:</b> {delivery.phone}</div>
                <div><b>Address:</b> {delivery.address}</div>
                <div><b>Province/City:</b> {delivery.province}</div>
                <div><b>Zip:</b> {delivery.zip}</div>
                <div><b>Payment:</b> {payment === 'cod' ? 'Cash on Delivery' : 'Bank Transfer'}</div>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition w-full"
                  onClick={() => setStep(step - 1)}
                  type="button"
                >
                  Back
                </button>
                <button
                  className="bg-goldYum text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full flex items-center justify-center gap-2"
                  onClick={handlePlaceOrder}
                  disabled={placingOrder}
                >
                  {placingOrder ? <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span> : 'Place Order'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Sticky Order Summary (Desktop) */}
      <div className="hidden md:block sticky top-24 self-start bg-white rounded-3xl shadow-xl p-6 w-80 mt-16 animate-slide-up">
        <h2 className="text-xl font-display text-goldYum mb-4 flex items-center gap-2"><span>🛒</span> Order Summary</h2>
        <ul className="mb-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between py-1">
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between text-sm mb-1 text-gray-600">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm mb-2 text-gray-600">
          <span>Delivery Fee</span>
          <span>${cart.length > 0 ? DELIVERY_FEE.toFixed(2) : '0.00'}</span>
        </div>
        <div className="flex justify-between font-bold text-lg mb-2">
          <span>Total</span>
          <span className="text-goldYum">${grandTotal.toFixed(2)}</span>
        </div>
        <div className="text-xs text-gray-500">Estimated delivery: {DELIVERY_ESTIMATE}</div>
      </div>
      {/* Sticky Action Bar (Mobile) */}
      {step !== 0 && step !== 4 && (
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg md:hidden z-50 flex gap-2">
          {step > 0 && (
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition w-full focus:outline-goldYum" onClick={() => setStep(step - 1)} type="button">Back</button>
          )}
          <button className="bg-goldYum text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full focus:outline-goldYum" onClick={() => setStep(step + 1)}>Next</button>
        </div>
      )}
    </div>
  )
}

// Animations (add to your globals.css or Tailwind config)
// .animate-fade-in { animation: fadeIn 0.5s; }
// .animate-slide-up { animation: slideUp 0.5s; }
// .confetti { animation: confettiPop 1.2s ease; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: none; opacity: 1; } }
// @keyframes confettiPop { 0% { opacity: 0; transform: scale(0.5); } 60% { opacity: 1; transform: scale(1.1); } 100% { opacity: 1; transform: scale(1); } } 