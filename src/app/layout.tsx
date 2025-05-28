import type { Metadata } from 'next'
import { Inter, Fredoka } from 'next/font/google'
import './globals.css'

// Load Google Fonts as CSS variables
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
    <html lang="en">
      <body
        className={`${inter.variable} ${fredoka.variable} font-sans bg-creamYum text-purpleYum min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}