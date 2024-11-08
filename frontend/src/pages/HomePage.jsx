import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const { fetchProducts, products} = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <div className='max-w-full py-12'>
      <div className='flex flex-col gap-8'>
        <div className='text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500'>Current Products 🚀</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        {products.length === 0 && (
          <div className='text-xl font-bold text-center text-gray-500'>No products found 😢 {" "}
              <Link to={"/create"}>
                <span className='text-blue-500 hover:underline'>Create a product</span>
              </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage