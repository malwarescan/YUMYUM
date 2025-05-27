interface ProductProps {
    id: string
    name: string
    description: string
    category: string
    price: number
    image_url: string
    strain_type: string
    thc_percent: number
  }
  
  export default function ProductCard({
    name,
    description,
    price,
    image_url,
    strain_type,
    thc_percent
  }: ProductProps) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-purpleYum">
        <img src={image_url} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-purpleYum font-display">{name}</h2>
          <p className="text-sm text-gray-700 mt-1">{description}</p>
          <p className="mt-2 text-sm text-tealYum">Strain: {strain_type} · THC: {thc_percent}%</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-goldYum">${price.toFixed(2)}</span>
            <button className="bg-goldYum text-white px-4 py-1 rounded hover:bg-yellow-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  }