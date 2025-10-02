import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='min-h-screen'>
        <div className='min-h-screen bg-amber-200 w-50 absolute'>
            <p>ini side bar
            </p>
        </div>
      <div className='flex justify-center items-center gap-3 p-5'>
        <h1 className=''> Welcome to My Store </h1>
        {[1, 2, 3].map((col) => (
            <div key={col} className='grid grid-rows-3 gap-3 '>
                {[1, 2, 3].map((row) => (
                    <div key={row} className='h-50 w-50 border-4 border-white shadow-lg rounded-2xl'>
                        <Image src="/Asset/lucuu.jpeg" alt='...' height={300} width={300} className='object-cover rounded-2xl'></Image>
                    </div>
                ))}
            </div>
        ))}
      </div>
    </div>
  )
}
