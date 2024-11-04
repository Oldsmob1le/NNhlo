type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
  
    const product = await fetchProduct(id);
  
    return (
      <div className="p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-2">${product.price}</p>
      </div>
    );
  };
  
export default ProductPage;
