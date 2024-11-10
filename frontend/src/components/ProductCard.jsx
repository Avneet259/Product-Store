import React, { useState } from 'react'
import { IoCreateOutline } from "react-icons/io5"
import { MdAutoDelete } from "react-icons/md"
import { useProductStore } from '../store/product'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UpdateModal from './modals/UpdateModal'

const ProductCard = ({product}) => {
   const { deleteProduct, updateProduct } = useProductStore()
   const [open, setOpen] = useState(false)
   const [updatedProduct, setUpdatedProduct] = useState(product)

    const handleDeleteProduct = async (id) => {
        const { success, message } = await deleteProduct(id)
        if (!success) {
            toast.error(message)
          } else {
              toast.success(message)
          }
    }

    const handleUpdateProduct = async (id, updatedProduct) => {
        const { success, message } = await updateProduct(id, updatedProduct)
        setOpen()
        if (!success) {
            toast.error(message)
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
                <button onClick={() => setOpen(true)} className='bg-emerald-300 border-none p-2 rounded hover:bg-emerald-400'><IoCreateOutline /></button>
                <button onClick={() => handleDeleteProduct(product._id)} className='bg-red-300 border-none p-2 rounded hover:bg-red-400'><MdAutoDelete /></button>
            </div>
        </div>
        <UpdateModal open={open} onclose={() => setOpen(false)}>
            <div className='text-center w-56'>
                <h1 className='font-bold text-black'>Update Product</h1>
                <div className='flex flex-col tracking-wide'>
                    <input className='text-gray-600 m-4 p-2 rounded border border-gray-700' type="text" name="name" placeholder='Name' value={updatedProduct.name} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}/>
                    <input className='text-gray-600 m-4 p-2 rounded border border-gray-700' type="number" name="price" placeholder='Price' value={updatedProduct.price} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}/>
                    <input className='text-gray-600 m-4 p-2 rounded border border-gray-700' type="url" name="image" placeholder='Image Url' value={updatedProduct.image} onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}/>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => handleUpdateProduct(product._id, updatedProduct)} className='bg-emerald-300 border-none p-2 rounded hover:bg-emerald-400 w-full'>Update</button>
                    <button onClick={() => setOpen(false)} className='bg-gray-300 border-none p-2 rounded hover:bg-gray-400 w-full'>Cancel</button>
                </div>
            </div>
        </UpdateModal>
        <ToastContainer />
    </div>
  )
}

export default ProductCard