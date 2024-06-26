import React, {useState} from 'react'
import { 
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag 
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md'


const Navbar = () => {

    const [nav, setNav] = useState(false);

  return (
    <div className='max-w[]1640] mx-auto flex justify-between 
    item-center p-4'>
        <div className='flex items-center'>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
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
        {/* Cart button */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20}/> Cart
        </button>

        {/* Mobile menu */}
    {/* The overlay */}
    { nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        
    {/* Side drawer menu */}
            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            :"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose 
                size={30} 
                className='absolute right-4 top-4 cursor-pointer'
                onClick={()=>setNav(!nav)}
                />
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Fast-foods</span></h2>
                <nav>
                    <ul className='flex flex-col py-4 text-gray-800'>
                        <li className='text-xl py-4 flex'>
                            <TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                        <li className='text-xl py-4 flex'>
                            <MdFavorite size={25} className='mr-4' /> Favorite</li>
                        <li className='text-xl py-4 flex'>
                            <FaWallet size={25} className='mr-4' /> Wallet</li>
                        <li className='text-xl py-4 flex'>
                            <MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex'>
                            <AiFillTag size={25} className='mr-4' /> Promotions</li>
                        <li className='text-xl py-4 flex'>
                            <BsFillSaveFill size={25} className='mr-4' /> Days choice</li>
                        <li className='text-xl py-4 flex'>
                            <FaUserFriends size={25} className='mr-4' /> Invite friends</li>
                      
                    </ul>
                </nav>
            </div>
     

    </div>
  )
}

export default Navbar