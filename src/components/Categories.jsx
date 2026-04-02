import React from 'react'

const Categories = () => {
  return (
    <section data-aos="zoom-in-down" className='relative    md:flex flex flex-col  space-y-6 p-2 shadow-lg z-50 items-center max-h-80  bg-white overflow-y-auto '>
      <div className='flex w-full h-14 border-b  font-semibold text-lg items-center' >
        <h1>Popular Categories </h1>
      </div>
      <div className='md:flex md:flex-row  flex-col md:space-y-0  space-y-6 gap-7'>

        <div className='w-60 flex h-fit rounded-md items-center gap-8  bg-gray-100 p-1 
       '>
          <div className='  w-fit h-fit '>
            <img src='./table.png'></img>
          </div>

          <div>
            <h2 className='font-semibold'>Furniture</h2>
            <h2 className='text-gray-600' >250 Items Available </h2>
          </div>



        </div>
        <div className='w-60 flex h-fit rounded-md items-center  gap-8 bg-gray-100 p-1
       '>
          <div className='  w-fit h-fit '>
            <img src='./bag.png'></img>
          </div>


          <div>
            <h2 className='font-semibold'>Hand Bags</h2>
            <h2 className='text-gray-600' >250 Items Available </h2>
          </div>


        </div>

      </div>
      <div className='md:flex md:flex-row  flex-col space-y-6 md:space-y-0  gap-7'>

        <div className='w-60 flex h-fit rounded-md items-center  gap-8 bg-gray-100 p-1
       '>
          <div className='  w-fit h-fit '>
            <img src='./shoe.png'></img>
          </div>


          <div>
            <h2 className='font-semibold'>shoe</h2>
            <h2 className='text-gray-600' >250 Items Available </h2>
          </div>

        </div>
        <div className='w-60 flex h-fit rounded-md items-center  gap-8 bg-gray-100 p-1
       '>
          <div className='  w-fit h-fit '>
            <img src='./headP.png'></img>
          </div>


          <div>
            <h2 className='font-semibold'>HeadPhone</h2>
            <h2 className='text-gray-600' >250 Items Available </h2>
          </div>


        </div>

      </div>

      <div className='md:flex md:flex-row  flex-col md:space-y-0  space-y-6 gap-7'>

        <div className='w-60 flex h-fit rounded-md items-center  gap-8 bg-gray-100 p-1
       '>
          <div className='  w-fit h-fit '>
            <img src='./laptop.png'></img>
          </div>


          <div>
            <h2 className='font-semibold'>Laptop</h2>
            <h2 className='text-gray-600' >250 Items Available </h2>
          </div>

        </div>
        <div className='w-60 flex h-fit rounded-md items-center gap-8 bg-gray-100 p-1
       '>
          <div className='  w-fit h-fit '>
            <img src='./book.png'></img>
          </div>


          <div>
            <h2 className='font-semibold'>Book</h2>
            <h2 className='text-gray-600' >250 Items Available </h2>
          </div>


        </div>

      </div>


    </section>
  )
}

export default Categories
