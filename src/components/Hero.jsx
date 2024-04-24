import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:teext-6xl lg:text-7xl font-bold'>Afro Delice's <span className='text-green-500'> Food Delivery</span></h1>
                <h1 className='px-4 text-4xl sm:teext-6xl lg:text-7xl font-bold'>The <span className='text-green-500'>Best</span></h1>
            </div>
            <img 
            className='w-full max-h-[500px] object-cover'
            src="https://scontent.fqpa1-1.fna.fbcdn.net/v/t39.30808-6/434367187_284511764687052_1688369105051866542_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ESAPBKNMQFAQ7kNvgFQJ7v2&_nc_ht=scontent.fqpa1-1.fna&oh=00_AfA18NR1NOOHaUznyy3ZpMFtKc1wKKZVEK_P8HTVHO3T6g&oe=662E36D3" 
            alt="Roasted Fish" />
        </div>
    </div>
  )
}

export default Hero