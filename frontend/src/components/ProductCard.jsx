import React from 'react'
import { IoCreateOutline } from "react-icons/io5"
import { MdAutoDelete } from "react-icons/md"

const ProductCard = ({product}) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden transition-all hover:-translate-y-5 hover:shadow-xl'>
        <img src={product.image} alt={product.name} className='h-48 w-full object-cover'/>
        <div className='p-4'>
            <h3 className='text-md mb-2'>
                {product.name}
            </h3>
            <div className='font-bold text-xl text-current mb-4'>
                ${product.price}
            </div>
            <div className='flex flex-row gap-2'>
                <button className='bg-emerald-300 border-none p-2 rounded'><IoCreateOutline /></button>
                <button className='bg-red-300 border-none p-2 rounded'><MdAutoDelete /></button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard