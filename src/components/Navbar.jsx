import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { TiThMenu } from "react-icons/ti";
import Categories from './Categories';
import Menu from './Menu';
import Home from '../pages/Home';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Account from '../pages/Account';
import { useSelector } from 'react-redux';
import store from '@/redux/store';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [showMenu, setMenu] = useState(false);
  const { user } = useSelector(store => store.user)

  const HandleCat = () => {
    setOpen(true);

  }
  const HandleCat2 = () => {
    setOpen(false);
  }
  const HandleMenu = () => {
    setMenu(!showMenu);
  }
  const MenuClose = () => {
    setMenu(false);
  }

  const Location = useLocation();
  const isLocation = location.pathname === "/cart";



  return (
    <div className=' realtive flex justify-evenly items-center bg-white w-full px-2 lg:px-4  h-20  ' onMouseLeave={HandleCat2}>
      <div className='flex items-center text-2xl font-sans font-bold text-[#003d29]'>
        <img src='/cart.svg' className='w-11' />
        ShopSphere
      </div>


      <div className=' flex ml-10 md:ml-28 lg:ml-4 gap-3 md:gap-9 lg:gap-9 md:flex items-center'>
        {!isLocation && (
          <button className='relative hidden items-center md:hidden   md:flex lg:block lg:flex' onMouseEnter={HandleCat} >
            Category
            <IoMdArrowDropdown />
            {open && (
              <div className='absolute      z-50 left-0  inset-4  bg-white 
            '>
                <div className=' mt-4 backdrop-blur-sm ' >
                  <div className=' flex  w-fit h-fit    z-50 inset-0 '>

                    <Categories />


                  </div>

                </div>

              </div>
            )}
          </button>
        )}

        {!isLocation && (
          <button className='hidden md:hidden lg:block'>
            Deals
          </button>
        )}
        {!isLocation && (
          <button className='hidden md:hidden xl:block '>
            What's New
          </button>
        )}
        {!isLocation && (
          <button className='hidden md:hidden  xl:block'>
            Delivery
          </button>
        )}

        {isLocation && (
          <div className="hidden
              relative flex items-center 
              border border-gray-300 
              hover:border-[#003d29] 
               rounded-full 
                px-4 py-2 
              w-72 
              md:hidden lg:flex
              ">
            <input
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />

            <CiSearch className="text-gray-500 w-5 h-5" />
          </div>
        )}

        {!isLocation && (
          <div className="hidden
              relative flex items-center 
              border border-gray-300 
              hover:border-[#003d29] 
               rounded-full 
                px-4 py-2 
              w-72 
              md:hidden lg:flex
              ">
            <input
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />

            <CiSearch className="text-gray-500 w-5 h-5" />
          </div>
        )}

        {isLocation && (
          <button className=' flex  items-center gap-2 '>

            {user ? <Link to={`/profile/${user._id}`}><p className='leading-none flex items-center gap-2'><VscAccount size={20} />hello<br></br>{user.firstName}</p></Link> : <Link to={'/login'}><div className=' flex  gap-2   items-center  '><VscAccount size={20} /><p className='hidden md:block'>Account</p></div></Link>}
          </button>
        )}
        {!isLocation && (
          <button className=' flex  items-center gap-2 '>


            {/* <h3 className='hidden md:block '>You</h3> */}
            {user ? <Link to={`/profile/${user._id}`}><p className='leading-none flex items-center gap-2'><VscAccount size={20} />hello<br></br>{user.firstName}</p></Link> : <Link to={'/login'}><div className=' flex  gap-2  items-center  '><VscAccount size={20} /><p className='hidden md:block'>Account</p></div></Link>}




          </button>
        )}

        {!isLocation && (
          <button className=' flex items-center gap-2'>

            <NavLink className={'flex items-center gap-2'} to={'/cart'}>
              <FaCartPlus size={20} />
              <h3 className='hidden md:block'>Cart</h3>


            </NavLink>

          </button>
        )}





      </div>

      {!isLocation && (
        <button className='flex lg:hidden ' onClick={HandleMenu} >
          <TiThMenu />
        </button>
      )}

      {!isLocation && showMenu && (
        <div
          className="absolute flex items-center justify-center inset-0 z-40"
          onClick={MenuClose}  // close menu on outside click
        >




          <div data-aos="zoom-in-left" className='absolute top-24  -translate-x-1/2 
                 flex-col justify-center rounded-3xl z-50 
                 shadow-lg w-11/12 h-fit 
                  bg-white mx-2 '  onClick={(e) => e.stopPropagation()}    >
            <div className='flex justify-center' >
              <Menu className='fixed' />
            </div>
          </div>
        </div>

      )}



    </div>
  )
}

export default Navbar
