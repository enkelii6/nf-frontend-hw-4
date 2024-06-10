"use client"
import { useQuery } from 'react-query';
import { fetchProducts } from './api/products';
import { ProductCard } from './components/Card';

export default function Home() {
    const { data: products, error, isLoading } = useQuery('products', fetchProducts);

    if (isLoading) return (
     <div className="flex justify-center items-center py-80 md:py-64">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 md:h-36 md:w-36"></div> 
    </div>);
    if (error) return <div>Error: {error.message}</div>;

    return (
        <main className="flex-1 pt-20">
            <div className="container flex flex-col space-y-5 pb-5">
                {products.map((product: any) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        category={product.category}
                    />
                ))}
            </div>
        </main>
    );
}