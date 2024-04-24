import React from 'react'

const AfroCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Container Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='fond-bold text-2xl px-2 pt-4'>Fresh Achu, Get it</p>
                <p className='px-2'>Throw 10/12</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom'>Order Now</button>
            </div>
            <img 
            className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://www.shutterstock.com/image-photo/eru-soup-spinach-okazi-leaves-260nw-2398711977.jpg" 
            alt="Fufu and Eru" 
            />
        </div>
        {/* Container Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='fond-bold text-2xl px-2 pt-4'>Drive through, Cmr Pepper</p>
                <p className='px-2'>Through 12/04</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom'>Order Now</button>
            </div>
            <img 
            className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://i.ytimg.com/vi/14dMLbpIdYU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxFkIJwhIEHcL6wQrhXHZ_xYRWlw" 
            alt="Fufu and Eru" 
            />
        </div>
        {/* Container Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='fond-bold text-2xl px-2 pt-4'>Deserts too, Get it</p>
                <p className='px-2'>Throw 10/12</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom'>Order Now</button>
            </div>
            <img 
            className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://upload.wikimedia.org/wikipedia/commons/b/be/A_bowl_of_catfish_peppersoup.jpg" 
            alt="Fufu and Eru" 
            />
        </div>
  
    </div>
  )
}

export default AfroCards