import React from 'react'
import { 
    AiOutlineMenu,
    AiOutlineSearch 
} from "react-icons/ai"
const Navbar = () => {
  return (
    <div className='max-w[]1640] mx-auto flex justify-between 
    item-center p-4'>
        <div className='flex items-center'>
            <div className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Fast-foods</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 
            rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Devliery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/* Search inputs size of 20 */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px] '>
            <AiOutlineSearch size={20} />
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder=' find your food' />
        </div>
    </div>
  )
}

export default Navbar