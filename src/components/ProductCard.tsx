interface ProductProps {
    id: string
    name: string
    description: string
    category: string
    price: number
    image_url: string
    strain_type: string
    thc_percent: number
    imgClassName?: string
    onAddToCart?: () => void
  }
  
  export default function ProductCard({
    name,
    description,
    price,
    image_url,
    strain_type,
    thc_percent,
    imgClassName,
    onAddToCart
  }: ProductProps) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-purpleYum">
        {/* Image removed for minimal look */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-purpleYum font-display">{name}</h2>
          <p className="text-sm text-gray-700 mt-1">{description}</p>
          <p className="mt-2 text-sm text-tealYum">Strain: {strain_type} · THC: {thc_percent}%</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-goldYum">${price.toFixed(2)}</span>
            <button
              className="bg-goldYum text-white px-4 py-1 rounded hover:bg-yellow-600 transition"
              onClick={onAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  }