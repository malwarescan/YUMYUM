'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import ProductCard from '@/components/ProductCard'

interface Product {
  id: string
  name: string
  description: string
  category: string
  price: number
  image_url: string
  strain_type: string
  thc_percent: number
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*')
      if (error) console.error(error)
      else setProducts(data || [])
    }

    fetchProducts()
  }, [])

  return (
    <main className="bg-creamYum min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-purpleYum mb-6">Our Products</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  )
}