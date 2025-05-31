import './globals.css'
import type { Metadata } from 'next'
import { Inter, Fredoka } from 'next/font/google'
import { CartProvider } from '@/lib/CartContext'

// Load Google Fonts with CSS variable support
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' })

export const metadata: Metadata = {
  title: 'YUMYUM - Premium Cannabis Delivery',
  description: 'Your favorite cannabis products, delivered discreetly and legally across Thailand.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable}`}>
      <body className="font-sans bg-creamYum text-purpleYum min-h-screen">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}