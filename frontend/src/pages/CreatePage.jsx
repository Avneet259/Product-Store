import React, { useState } from 'react'
import { useProductStore } from '../store/product'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CreatePage = ({colorMode}) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  })

  const { createProduct } = useProductStore()

  const handleAddProduct = async () => {
    const {success,message} = await createProduct(newProduct)
    if (!success) {
      toast.error(message)
    } else {
        toast.success(message)
    }
    setNewProduct({ name: "", price: "", image: "" })
  }

  return (
    <div className='max-w-screen-sm m-auto'>
      <div className='flex flex-col gap-8 items-center'>
        <h1 className='font-bold p-4 text-3xl mb-8 text-sky-300'>Create New Product</h1>
        <div style={colorMode} className='w-full p-6 rounded-lg shadow-md'>
          <div className='flex flex-col tracking-wide'>
            <input style={colorMode} className='m-4 p-2 rounded border border-gray-700' type="text" name="name" value={newProduct.name} placeholder='Product Name' onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}/>
            <input style={colorMode} className='m-4 p-2 rounded border border-gray-700' type="number" name="price" value={newProduct.price} placeholder='Product Price' onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}/>
            <input style={colorMode} className='m-4 p-2 rounded border border-gray-700' type="url" name="image" value={newProduct.image} placeholder='Product Image Url' onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}/>
            <button onClick={handleAddProduct} className='bg-sky-300  m-4 p-2 rounded'>Add Product</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default CreatePage