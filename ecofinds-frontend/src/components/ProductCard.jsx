// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
      <h2 className="font-bold">{product.title}</h2>
      <p className="text-gray-600">{product.category}</p>
      <p className="font-semibold">₹{product.price}</p>
    </div>
  );
}
