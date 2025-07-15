import { cache } from 'react';

interface PrintifyProduct {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
  }[];
  variants: {
    price: number;
    is_enabled: boolean;
  }[];
}

const getPrintifyProducts = cache(async () => {
  const PRINTIFY_API_KEY = process.env.PRINTIFY_API_KEY;
  const SHOP_ID = process.env.PRINTIFY_SHOP_ID;

  try {
    const response = await fetch(
      `https://api.printify.com/v1/shops/${SHOP_ID}/products.json`,
      {
        headers: {
          'Authorization': `Bearer ${PRINTIFY_API_KEY}`,
          'Content-Type': 'application/json'
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products');
     
      
    }

    const data = await response.json();
    return data.data as PrintifyProduct[];
  } catch (error) {
    console.error('Error fetching Printify products:', error);
    throw error;
  }
});

export default async function PrintifyProducts() {
  const products = await getPrintifyProducts();

  console.log(products);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden">
          {product.images[0] && (
            <img
              src={product.images[0].src}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {product.description}
            </p>
            <p className="text-lg font-bold mt-2">
              ${product.variants[0]?.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}