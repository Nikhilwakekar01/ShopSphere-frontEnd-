import React, { useState } from 'react'
import Categories from './Categories'
import { RxCross2 } from "react-icons/rx";

const Menu = ({ onButton }) => {
  const [catOpen, setCat] = useState(false);

  const handleCatMenu = () => {
    setCat(true);
  }
  const handleCatClose = () => {
    setCat(false);
  }
  return (
    <section className=' flex  w-fit    h-full overflow-y-auto p-4 justify-evenly  z-50  ' >
      <div className='space-y-4 flex flex-col m-4 font-normal text-lg '>
        <button onMouseEnter={handleCatMenu} onMouseLeave={handleCatClose}  >
          <div >
            category
          </div>
          {catOpen && (
            <div className=''>
              <Categories />
            </div>
          )}



        </button>
        <button >
          Deals
        </button>
        <button>
          What's New
        </button>
        <button>
          Deliver
        </button>
      </div>



    </section>
  )
}

export default Menu
