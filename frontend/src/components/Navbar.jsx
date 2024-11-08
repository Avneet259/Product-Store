import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlusSquare } from "react-icons/bs"

const Navbar = ({icon, toggleColorMode}) => {

  return (
    <div className='max-w-[1140px] px-4 m-auto'>
        <div className='flex h-16 items-center justify-between flex-col md:flex-row'>
            <div className='text-2xl font-bold uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500'>
                <Link className='flex' to={"/"}>Product Store 🛒</Link>
            </div>
            <div className='flex items-center gap-2'>
              <div>
              <Link to={"/create"}>
                  <button className='bg-sky-500 border-none p-2 rounded hover:bg-sky-400'>
                    <BsPlusSquare />
                  </button> 
                </Link>
              </div>
              <div>
              <button onClick={toggleColorMode} className='bg-sky-500 border-none p-2 rounded hover:bg-sky-400'>
                {icon}
              </button>
              </div>     
            </div>
        </div>
    </div>
  )
}

export default Navbar