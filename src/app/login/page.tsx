'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      setMessage(`Error: ${error.message}`)
    } else {
      setMessage('Magic link sent! Check your email.')
    }
  }

  return (
    <main className="min-h-screen bg-creamYum flex items-center justify-center px-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md max-w-md w-full border border-purpleYum">
        <h1 className="text-3xl font-display text-purpleYum mb-4">Login</h1>
        <p className="text-sm mb-4 text-gray-600">Enter your email and we’ll send you a magic link to log in.</p>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-goldYum text-white font-semibold py-2 rounded hover:bg-yellow-600 transition"
        >
          Send Magic Link
        </button>
        {message && <p className="mt-4 text-sm text-tealYum">{message}</p>}
      </form>
    </main>
  )
}