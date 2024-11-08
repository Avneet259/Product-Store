import React from 'react'
import { IoCreateOutline } from "react-icons/io5"
import { MdAutoDelete } from "react-icons/md"
import { useProductStore } from '../store/product'
import { toast, ToastContainer } from 'react-toastify'

const ProductCard = ({product}) => {
   const { deleteProduct } = useProductStore()

    const handleDeleteProduct = async (id) => {
        const { success, message } = await deleteProduct(id)
        if (!success) {
            toast.error(message);
          } else {
              toast.success(message)
          }
    }

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
                <button className='bg-emerald-300 border-none p-2 rounded hover:bg-emerald-400'><IoCreateOutline /></button>
                <button onClick={() => handleDeleteProduct(product._id)} className='bg-red-300 border-none p-2 rounded hover:bg-red-400'><MdAutoDelete /></button>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default ProductCard