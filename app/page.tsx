import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
}

const HomePage = async () => {
  const products = await fetchProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} className="border p-4 rounded-lg hover:shadow-lg">
          <div>
            <img src={product.image} alt={product.title} className="w-full h-64 object-contain" />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
