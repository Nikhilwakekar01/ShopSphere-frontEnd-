import React, { useEffect, useState } from 'react'
import { IoBagOutline } from "react-icons/io5";
import { TfiGift } from "react-icons/tfi";
import { BsQuestionCircle } from "react-icons/bs";
import axios from 'axios';
import { toast } from 'sonner';

const Home = () => {
  const accessToken = localStorage.getItem('accessToken')
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const handleGetProduct = async (req, res) => {
      try {
        const res = await axios.get('http://localhost:5000/api/getProduct')
        setProducts(res.data.products)
      } catch (error) {
        console.log(error.response?.data);

      }

    }
    handleGetProduct();

  }, [])





  const handleAddToCart = async (productId) => {
    try {
      const res = await axios.post('http://localhost:5000/api/addToCart', { productId }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      if (res.data.success) {
        toast.success(res.data.message)
      }
      console.log(res.data)
    } catch (error) {
      console.log(error);
      console.log(error.response?.data);

    }
  }
  return (
    <section className='relative '>
      <section>
        <div data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500" className='relative  overflow-x-hidden min-h-[calc(90vh-6rem)] md:md:min-h-[calc(70vh)] lg:min-h-[calc(55vh)] xl:min-h-[calc(90vh)]   '>
          <img className='md:w-full min-h-[calc(80vh-2rem)] md:min-h-[calc(65vh)] lg:min-h-[calc(50vh)] xl:min-h-[calc(85vh)]  bg-right bg-no-repeat overflow-x-hidden min-w-[calc(80vh)]  z-0' src='./bg.png'></img>
        </div>
        <div data-aos="fade-up" className='absolute top-28 md:top-40 p-3 md:pr-44 lg:pr-80 lg:pl-10 space-y-8 z-30 xl:px-32'>
          <h1 className='font-bold text-4xl md:text-6xl lg:text-6xl  text-[#003D29]'>

            Shopping And
          </h1>
          <h1 className='font-bold text-4xl md:text-6xl lg:text-6xl  text-[#003D29]'>
            Department Store.
          </h1>
          <p className='text-lg md:text-xl lg:text-xl lg:pr-40 xl:pr-[45%]  '>
            Shopping is a bit of relaxing hobby for me, which
            is sometimes troubling for the bank balance.
          </p>
          <button className=' bg-[#003D29] text-white p-2 px-4  rounded-full md:px-10 md:h-12 md:text-lg xl:px-12   md:font-medium'>
            Learn More
          </button>
        </div>
        <div className='hidden xl:block absolute top-0 right-0 z-10 '>
          <div data-aos="fade-left" className=' w-full h-full'>
            <img src='./hero.png'></img>
          </div>

          <img data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" src='./product1.png' className='absolute top-20 right-20 '></img>

          <img data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" src='./product2.png' className='absolute top-40 right-[450px] '></img>
          <img data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" src='./product3.png' className='absolute top-80 right-44 '></img>
          <img data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" src='./product4.png' className='absolute top-[370px] right-[560px] '></img>


        </div>

      </section>
      <section className='relative p-4 xl:p-10 xl:px-32   '>
        <div className='mb-5'>
          <h1 className='text-2xl font-bold'>
            Shop Our Top Categories
          </h1>
        </div>
        <div className=' relative grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-6 gap-5 lg:gap-3 xl:gap-5     '>
          <div data-aos="zoom-in" className=' relative md:h-72 md:w-full md:overflow-hidden lg:h-52 lg:w-full lg:overflow-hidden xl:h-60 xl:w-full xl:overflow-hidden '>

            <h1 className='absolute top-3 left-3 text-white font-semibold text-2xl lg:text-xl    '>furniture</h1>
            <img className='rounded-xl md:w-full md:h-full md:overflow-hidden md:object-cover lg:w-full lg:h-full lg:overflow-hidden lg:object-cover object-cover' src='./furniture.png'></img>
          </div>
          <div data-aos="zoom-in" className='relative md:h-72 md:w-full md:overflow-hidden  lg:h-52 lg:w-full lg:overflow-hidden xl:h-60 xl:w-full xl:overflow-hidden '>
            <h1 className='absolute top-3 left-3 text-white font-semibold text-2xl lg:text-xl   '> Hand Bag</h1>

            <img className='rounded-xl object-cover md:w-full md:h-full md:overflow-hidden md:object-cover lg:w-full lg:h-full lg:overflow-hidden lg:object-cover' src='bags.png'></img>
          </div>
          <div data-aos="zoom-in" className='relative md:h-72 md:w-full md:overflow-hidden  lg:h-52 lg:w-full lg:overflow-hidden xl:h-60 xl:w-full xl:overflow-hidden '>
            <h1 className='absolute top-3 left-3 text-white font-semibold text-2xl lg:text-xl  '>
              Books
            </h1>

            <img className='rounded-xl object-cover md:w-full md:h-full md:overflow-hidden md:object-cover lg:w-full lg:h-full lg:overflow-hidden lg:object-cover' src='./books.png'></img>
          </div>
          <div data-aos="zoom-in" className='relative md:h-72 md:w-full md:overflow-hidden  lg:h-52 lg:w-full lg:overflow-hidden xl:h-60 xl:w-full xl:overflow-hidden '>
            <h1 className='absolute top-3 left-3 text-white font-semibold text-2xl lg:text-xl  '> Tech</h1>
            <img className='rounded-xl object-cover md:w-full md:h-full md:overflow-hidden md:object-cover lg:w-full lg:h-full lg:overflow-hidden lg:object-cover ' src='tech.png'></img>
          </div>
          <div data-aos="zoom-in" className='relative md:h-72 md:w-full md:overflow-hidden  lg:h-52 lg:w-full lg:overflow-hidden xl:h-60 xl:w-full xl:overflow-hidden '>
            <h1 className='absolute top-3 left-3 text-white font-semibold text-2xl lg:text-xl  '>Snekers</h1>

            <img className='rounded-xl object-cover md:w-full md:h-full md:overflow-hidden md:object-cover lg:w-full lg:h-full lg:overflow-hidden lg:object-cover' src='snekers.png'></img>
          </div>
          <div data-aos="zoom-in" className='relative md:h-72 md:w-full md:overflow-hidden  lg:h-52 lg:w-full lg:overflow-hidden xl:h-60 xl:w-full xl:overflow-hidden '>
            <h1 className='absolute top-3 left-3 text-white font-semibold text-2xl lg:text-xl  '>Travel</h1>
            <img className='rounded-xl object-cover md:w-full md:h-full md:overflow-hidden md:object-cover lg:w-full lg:h-full lg:overflow-hidden lg:object-cover' src='./LBag.png'></img>
          </div>
        </div>

      </section>


      <section className="relative p-4 xl:p-10 xl:px-32">
        {/* Heading */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold">Todays Best Deals For You!</h1>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-4 xl:gap-7 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((product) => (

            < div data-aos="zoom-in-up" className="min-w-[220px] md:min-w-[250px] md:min-h-[400px] lg:min-w-[300px] lg:min-h-[500px] xl:min-w-[350px] rounded-xl shadow-md p-3 bg-white relative" key={product._id} >
              {/* Image Section */}
              < div className="relative w-full h-40 lg:h-64 rounded-xl overflow-hidden" >
                <img src={product.img} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow">❤️</div>
              </div>

              <h2 className="mt-2 md:mt-4 font-semibold text-lg truncate">{product.name}</h2>
              <p className="font-bold text-gray-800">{product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>



              <div className="flex items-center gap-1 text-green-600 mt-1">
                ⭐⭐⭐⭐⭐ <span className="text-gray-500 text-sm">(121)</span>
              </div>

              <button className="mt-3 md:mt-8 w-full border border-black py-2 rounded-full hover:bg-black hover:text-white transition" onClick={() => handleAddToCart(product._id)}>
                Add to Cart
              </button>
            </div>



          ))}







        </div>
      </section >


      <section className='relative p-4 lg:min-h-[calc(40vh)] xl:p-10 xl:px-32'>
        <div className='mb-5'>
          <h1 className='text-2xl font-bold'>Choose By Brand</h1>
        </div>

        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>

          {/* BRAND 1 */}
          <div data-aos="zoom-in" className='flex items-center bg-gray-100 rounded-xl p-4 shadow-sm'>
            <img
              src="./staple.png"
              className='w-16 h-16 object-contain rounded-full'
            />
            <div className='ml-4'>
              <h1 className='font-semibold text-xl'>Staples</h1>
              <p className='text-gray-500 text-sm'>Delivery within 24 hours</p>
            </div>
          </div>

          {/* BRAND 2 */}
          <div data-aos="zoom-in" className='flex items-center bg-gray-100 rounded-xl p-4 shadow-sm'>
            <img
              src="./spouts.png"
              className='w-16 h-16 object-contain rounded-full'
            />
            <div className='ml-4'>
              <h1 className='font-semibold text-xl'>Sprouts</h1>
              <p className='text-gray-500 text-sm'>Delivery within 24 hours</p>
            </div>
          </div>

          {/* BRAND 3 */}
          <div data-aos="zoom-in" className='flex items-center bg-gray-100 rounded-xl p-4 shadow-sm'>
            <img
              src="./grocery.png"
              className='w-16 h-16 object-contain rounded-full'
            />
            <div className='ml-4'>
              <h1 className='font-semibold text-xl'>Grocery outlet</h1>
              <p className='text-gray-500 text-sm'>Delivery within 24 hours</p>
            </div>
          </div>

          {/* BRAND 4 */}
          <div data-aos="zoom-in" className='flex items-center bg-gray-100 rounded-xl p-4 shadow-sm'>
            <img
              src="./mobilestone.png"
              className='w-16 h-16 object-contain rounded-full'
            />
            <div className='ml-4'>
              <h1 className='font-semibold text-xl'>Mollie stones</h1>
              <p className='text-gray-500 text-sm'>Delivery within 24 hours</p>
            </div>
          </div>

          {/* BRAND 5 */}
          <div data-aos="zoom-in" className='flex items-center bg-gray-100 rounded-xl p-4 shadow-sm'>
            <img
              src="./sportbase.png"
              className='w-16 h-16 object-contain rounded-full'
            />
            <div className='ml-4'>
              <h1 className='font-semibold text-xl'>Sports Basement</h1>
              <p className='text-gray-500 text-sm'>Delivery within 24 hours</p>
            </div>
          </div>

          {/* BRAND 6 */}
          <div data-aos="zoom-in" className='flex items-center bg-gray-100 rounded-xl p-4 shadow-sm'>
            <img
              src="./container.png"
              className='w-16 h-16 object-contain rounded-full'
            />
            <div className='ml-4'>
              <h1 className='font-semibold text-xl'>Container Store</h1>
              <p className='text-gray-500 text-sm'>Delivery within 24 hours</p>
            </div>
          </div>

          {/* BRAND 7 */}
          <div data-aos="zoom-in" className='flex items-center bg-gray-100 rounded-xl p-4 shadow-sm'>
            <img
              src="./target.png"
              className='w-16 h-16 object-contain rounded-full'
            />
            <div className='ml-4'>
              <h1 className='font-semibold text-xl'>Target</h1>
              <p className='text-gray-500 text-sm'>Delivery within 24 hours</p>
            </div>
          </div>

          {/* BRAND 8 */}
          <div data-aos="zoom-in" className='flex items-center bg-gray-100 rounded-xl p-4 shadow-sm'>
            <img
              src="./bevmo.png"
              className='w-16 h-16 object-contain rounded-full'
            />
            <div className='ml-4'>
              <h1 className='font-semibold text-xl'>Bevmo!</h1>
              <p className='text-gray-500 text-sm'>Delivery within 24 hours</p>
            </div>
          </div>

        </div>

      </section>

      <section className='relative p-4 lg:min-h-[calc(35vh)] xl:p-10 xl:px-32'>
        <h2 className='text-[22px] font-semibold'>Get Up To 70% Off</h2>

        {/* ================= GET UP TO 70% OFF =================== */}

        <div className='mt-6  md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-4 xl:gap-6 '>


          {/* OFFER 1 */}
          <div data-aos="fade-up"
            data-aos-duration="3000" className='mt-4 bg-[#F2E4D9] rounded-3xl overflow-hidden shadow-sm  md:min-h-[calc(45vh)] md:w-full lg:min-h-[calc(25vh)] md:w-full lg:h-40 xl:min-h-[calc(50vh)]'>
            <div className='p-4 md:h-1/2 md:pr-20'>
              <p className='text-[18px] font-semibold'>Save</p>
              <p className='text-[32px] md:text-5xl font-bold text-yellow-700'>$100</p>
              <p className='text-[14px] font-medium mt-2'>
                Explore Our Furniture & Home Furnishing Range
              </p>
            </div>

            <img
              src='./explore_fur.png' // your image
              className='w-full h-[180px]  md:h-1/2 object-cover'
            />
          </div>

          {/* OFFER 2 */}
          <div data-aos="fade-up"
            data-aos-duration="3000" className='mt-4  bg-[#F7DFDF] rounded-3xl overflow-hidden shadow-sm md:min-h-[calc(45vh)] md:w-full lg:min-h-[calc(25vh)] md:w-full lg:h-40 xl:min-h-[calc(50vh)] '>
            <div className='p-4 md:h-1/2 md:pr-20'>
              <p className='text-[18px] font-semibold'>Save</p>
              <p className='text-[32px] md:text-5xl font-bold text-red-700'>$29</p>
              <p className='text-[14px] font-medium mt-2'>
                Explore Our Furniture & Home Furnishing Range
              </p>
            </div>

            <img
              src='./explore_book.png'
              className='w-full h-[180px]  md:h-1/2 object-cover'
            />
          </div>

          {/* OFFER 3 */}
          <div data-aos="fade-up"
            data-aos-duration="3000" className='mt-4  bg-[#F7DFDF] rounded-3xl overflow-hidden shadow-sm md:min-h-[calc(45vh)] md:w-full lg:min-h-[calc(25vh)] md:w-full lg:h-40 xl:min-h-[calc(50vh)]  '>
            <div className='p-4 md:h-1/2 md:pr-20'>
              <p className='text-[18px] font-semibold'>Save</p>
              <p className='text-[32px] md:text-5xl font-bold text-red-700'>$67</p>
              <p className='text-[14px] font-medium mt-2'>
                Explore Our Furniture & Home Furnishing Range
              </p>
            </div>

            <img
              src='./explore_kpda.png'
              className='w-full h-[180px]  md:h-1/2 object-cover'
            />
          </div>

          {/* OFFER 4 */}
          <div data-aos="fade-up"
            data-aos-duration="3000" className='mt-4  bg-[#F7DFDF] rounded-3xl overflow-hidden shadow-sm md:min-h-[calc(45vh)] md:w-full lg:min-h-[calc(25vh)] md:w-full lg:h-40 xl:min-h-[calc(50vh)]  '>
            <div className='p-4 md:h-1/2 md:pr-20'>
              <p className='text-[18px] font-semibold'>Save</p>
              <p className='text-[32px] md:text-5xl font-bold text-red-700'>$59</p>
              <p className='text-[14px]  font-medium mt-2'>
                Explore Our Furniture & Home Furnishing Range
              </p>
            </div>

            <img
              src='./explore_bag.png'
              className='w-full h-[180px]  md:h-1/2 object-cover'
            />
          </div>
        </div>
      </section>



      <section className="relative p-4 xl:p-10 xl:px-32">
        {/* Heading */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold">Weakly Popular Products!</h1>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-4 xl:gap-7 overflow-x-auto pb-4 scrollbar-hide">

          {products.map((product) => (

            < div data-aos="zoom-in-up" className="min-w-[220px] md:min-w-[250px] md:min-h-[400px] lg:min-w-[300px] lg:min-h-[500px] xl:min-w-[350px] rounded-xl shadow-md p-3 bg-white relative" key={product._id} >
              {/* Image Section */}
              < div className="relative w-full h-40 lg:h-64 rounded-xl overflow-hidden" >
                <img src={product.img} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow">❤️</div>
              </div>

              <h2 className="mt-2 md:mt-4 font-semibold text-lg truncate">{product.name}</h2>
              <p className="font-bold text-gray-800">{product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>



              <div className="flex items-center gap-1 text-green-600 mt-1">
                ⭐⭐⭐⭐⭐ <span className="text-gray-500 text-sm">(121)</span>
              </div>

              <button className="mt-3 md:mt-8 w-full border border-black py-2 rounded-full hover:bg-black hover:text-white transition">
                Add to Cart
              </button>
            </div>



          ))}

        </div>
      </section>



      <section className='relative xl:min-h-[calc(90vh-10rem)]  '>


        {/* ================= 5% CASH BACK SECTION =================== */}

        <div className='mt-6 px-0'>
          <div data-aos="zoom-in" className='relative  overflow-hidden shadow-sm'>

            {/* Background Image */}
            <img
              src='./sofa2.png'   // your background image
              className='w-full h-[330px] xl:min-h-[calc(90vh-2rem)]  md:h-96 object-cover'
            />

            {/* Dark Green Box */}
            <div className='absolute top-6 xl:left-[50%] xl:top-20 xl:p-20 left-6 md:left-20 bg-[#003D29] p-6  w-[80%] xl:w-[40%] xl:space-y-7 xl:h-[80%]'>
              <p className='text-white text-[22px] font-semibold leading-tight xl:text-5xl'>
                Get 5% Cash Back On $200
              </p>

              <p className='text-white text-[14px] mt-3 leading-[20px] xl:text-xl xl:pr-20'>
                Shopping is a bit of a relaxing hobby for
                me, which is sometimes troubling for the
                bank balance.
              </p>

              <button className='mt-4 border border-white text-white px-5 py-2 rounded-full text-[14px] xl:px-7 xl:text-lg'>
                Learn More
              </button>
            </div>

          </div>
        </div>


      </section>


      <section className='relative p-4 lg:p-10 lg:min-h-[calc(35vh)] xl:p-10 xl:px-32'>
        {/* ================= BEST SELLING STORE SECTION =================== */}

        <div className="mt-8 px-4">
          <h2 className="text-[22px] xl:text-3xl lg:text-2xl font-semibold mb-4 xl:mb-10">
            Best Selling Store
          </h2>

          <div className="grid grid-cols-2 gap-5 lg:grid lg:grid-cols-4 lg:gap-5 ">

            {/* ------ CARD 1 ------ */}
            <div data-aos="fade-up"
              data-aos-duration="3000" className='md:min-h-[calc(20vh)]'>
              <div className="relative rounded-xl overflow-hidden shadow-sm md:h-60 md:w-full">
                <img
                  src="./perfumes.webp"        // replace with your image
                  className="w-full h-[150px] md:h-full object-cover z-20"
                />
                <img
                  src="./staple.png"   // round logo
                  className="absolute bottom-2  left-2  w-10 md:left-4 md:bottom-0 md:w-14 md:h-14  h-10 rounded-full z-50"
                />
              </div>

              <p className="mt-3 text-[17px] md:text-xl font-semibold">Staples</p>
              <p className="text-sm text-gray-500">Bag • Perfume</p>

              <p className="flex items-center text-[#E91E63] text-sm mt-1">
                <span className="mr-1">📦</span> Delivery with in 24 hours
              </p>
            </div>

            {/* ------ CARD 2 ------ */}
            <div data-aos="fade-up"
              data-aos-duration="3000" className='md:min-h-[calc(20vh)]'>
              <div className="relative rounded-xl overflow-hidden shadow-sm md:h-60 md:w-full">
                <img
                  src="./trimmer.webp"
                  className="w-full h-[150px] md:h-full object-cover"
                />
                <img
                  src="/bevmo.png"
                  className="absolute bottom-2 left-2 w-10 h-10 rounded-full md:left-4 md:bottom-0 md:w-14 md:h-14"
                />
              </div>

              <p className="mt-3 text-[17px] font-semibold">Bevmo</p>
              <p className="text-sm text-gray-500">Bag • Perfume</p>

              <p className="flex items-center text-[#E91E63] text-sm mt-1">
                <span className="mr-1">📦</span> Delivery with in 24 hours
              </p>
            </div>

            {/* ------ CARD 3 ------ */}
            <div data-aos="fade-up"
              data-aos-duration="3000" className='md:min-h-[calc(20vh)] '>
              <div className="relative rounded-xl overflow-hidden shadow-sm md:h-60 md:w-full">
                <img
                  src="./handBag.png"
                  className="w-full h-[150px] md:h-full object-cover"
                />
                <img
                  src="./target.png"
                  className="absolute bottom-2 left-2 w-10 h-10 rounded-full md:left-4 md:bottom-0 md:w-14 md:h-14"
                />
              </div>

              <p className="mt-3 text-[17px] font-semibold">Target</p>
              <p className="text-sm text-gray-500">Bag • Perfume</p>

              <p className="flex items-center text-[#E91E63] text-sm mt-1">
                <span className="mr-1">📦</span> Delivery with in 24 hours
              </p>
            </div>

            {/* ------ CARD 4 ------ */}
            <div data-aos="fade-up"
              data-aos-duration="3000" className='md:min-h-[calc(20vh)]'>
              <div className="relative rounded-xl overflow-hidden shadow-sm md:h-60 md:w-full">
                <img
                  src="./tvUnit.webp"
                  className="w-full h-[150px] md:h-full object-cover"
                />
                <img
                  src="./spouts.png"
                  className="absolute bottom-2 left-2 w-10 h-10 rounded-full md:left-4 md:bottom-0 md:w-14 md:h-14"
                />
              </div>

              <p className="mt-3 text-[17px] font-semibold">Sprouts</p>
              <p className="text-sm text-gray-500">Bag • Perfume</p>

              <p className="flex items-center text-[#E91E63] text-sm mt-1">
                <span className="mr-1">📦</span> Delivery with in 24 hours
              </p>
            </div>

          </div>
        </div>


      </section>


      {/* ============ SERVICES TO HELP YOU SHOP SECTION ============ */}

      <section className="  relative p-4 lg:p-10 mt-8 xl:px-32">

        <h2 className="text-[22px] font-semibold  mb-4">
          Services To Help You Shop
        </h2>

        {/* -------- CARD 1 -------- */}
        <div data-aos="zoom-in-up" className=' md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-5'>
          <div className="bg-gray-100 shadow-sm rounded-xl  z-10 p-0 mb-5 md:min-h-[calc(40vh)] lg:min-h-[calc(20vh)] xl:min-h-[calc(55vh)]">
            <div className='md:h-1/2 pr-16 p-2 xl:p-10 xl:pr-20 '>
              <p className="text-[18px] md:text-2xl font-semibold">
                Frequently Asked Questions
              </p>

              <p className="text-gray-500 font-medium text-[14px] md:text-lg mt-1">
                Updates on safe Shopping in our Stores
              </p>
            </div>

            <img
              src="./beti.png"   // Replace with your image
              className=" mt-4 w-full rounded-b-xl h-[200px] md:h-1/2 md:w-full md:object-cover object-cover"
            />
          </div>

          {/* -------- CARD 2 -------- */}
          <div data-aos="zoom-in-up" className="bg-gray-100 shadow-sm rounded-xl p-0 mb-5  md:min-h-[calc(20vh)] xl:min-h-[calc(55vh)]">

            <div className='md:h-1/2 pr-16 p-2 xl:p-10 xl:pr-32'>

              <p className="text-2xl md:text-2xl font-semibold">
                Online Payment Process
              </p>

              <p className="text-gray-500 font-medium text-[14px] md:text-lg mt-1">
                Updates on safe Shopping in our Stores
              </p>
            </div>

            <img
              src="./phone.png"   // Replace with your image
              className=" mt-4 w-full rounded-b-xl h-[200px] object-cover md:h-1/2 md:w-full md:object-cover"
            />
          </div>

          {/* -------- CARD 3 -------- */}
          <div data-aos="zoom-in-up" className="bg-gray-100 shadow-sm rounded-xl p-0 mb-5  md:min-h-[calc(20vh)] xl:min-h-[calc(55vh)]">
            <div className='md:h-1/2 pr-16 p-2 xl:p-10 xl:pr-36'>

              <p className="text-2xl md:text-2xl font-semibold">
                Home Delivery Options
              </p>

              <p className="text-gray-500 font-medium text-[16px] md:text-lg mt-1">
                Updates on safe Shopping in our Stores
              </p>
            </div>

            <img
              src="./delivery_boy.png"   // Replace with your image
              className=" mt-4 w-full rounded-b-xl h-[200px] object-cover md:h-1/2 md:w-full  md:object-cover"
            />
          </div>
        </div>

      </section>


      {/* ============== FOOTER SECTION FOR MOBILE  ============== */}
      <hr className="border-gray-300 mb-6" />

      <footer1 className="block md:hidden px-4 mt-10 pb-10 md:min-h-[calc(50vh-2rem)]   ">

        {/* Top Divider */}


        {/* Logo + Description */}
        <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" className="flex flex-col items-start mb-6  h-fit w-full  md:col-span-1 ">

          <div className='flex items-center text-3xl font-sans font-bold text-[#003d29]'>
            <img src='/cart.svg' className='w-14' />
            ShopSphere
          </div>

          <p className="text-black font-medium text-[14px] leading-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.
          </p>

        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-4  ">

          {/* Department Section */}
          <div className=''>
            <h3 data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" className="font-semibold text-[18px] mb-3">Department</h3>

            <ul data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" className="space-y-[6px] text-[15px] text-black  font-normal">
              <li>Fashion</li>
              <li>Education Product</li>
              <li>Frozen Food</li>
              <li>Beverages</li>
              <li>Organic Grocery</li>
              <li>Office Supplies</li>
              <li>Beauty Products</li>
              <li>Books</li>
              <li>Electronics & Gadget</li>
              <li>Travel Accessories</li>
              <li>Fitness</li>
              <li>Sneakers</li>
            </ul>
          </div>

          {/* About Us Section */}
          <div >
            <h3 data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" className="font-semibold text-[18px] mb-3">About Us</h3>

            <ul data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" className="space-y-[6px] text-[15px] text-black  font-normal">
              <li>About Shopcart</li>
              <li>Careers</li>
              <li>News & Blog</li>
              <li>Help</li>
              <li>Press Center</li>
              <li>Shop By Location</li>
              <li>Shopcart Brands</li>
              <li>Affiliate & Partners</li>
              <li>Ideas & Guides</li>
            </ul>
          </div>

          <div >
            <h3 data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" className="font-semibold text-[18px] mb-3">Services</h3>

            <ul data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" className="space-y-[6px] text-[15px]  text-black  font-normal">
              <li>Gift Card</li>
              <li>Mobile App</li>
              <li>Shipping and Delivery</li>
              <li>Order Pickup</li>
              <li>Account Signup</li>

            </ul>
          </div>

          <div >
            <h3 data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" className="font-semibold text-[18px] mb-3">Help</h3>

            <ul data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" className="space-y-[6px] text-[15px]  text-black  font-normal">
              <li>Shopcart Help</li>
              <li>Return</li>
              <li>Track Order</li>
              <li>Contact-US</li>
              <li>Feedback</li>
              <li>Security and Fraud</li>

            </ul>
          </div>

        </div >

        {/* ============== ACCEPTED PAYMENTS SECTION ============== */}

        <div className=" mt-10  pb-10  ">

          <h2 className="text-[22px] font-semibold mb-4">Accepted Payments</h2>

          {/* Payment Logos Grid */}
          <div className="grid grid-cols-3 gap-3 ">

            <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
              <img src="./stripe.png" className="h-4" />
            </div>

            <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
              <img src="./visa.png" className="h-4" />
            </div>

            <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
              <img src="./mastercard.png" className="h-5" />
            </div>

            <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
              <img src="./amazom.png" className="h-4" />
            </div>

            <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
              <img src="./klarna.png" className="h-3" />
            </div>

            <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
              <img src="./paypal.png" className="h-5" />
            </div>

            <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
              <img src="./applepay.png" className="h-5" />
            </div>

            <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
              <img src="./gpay.png" className="h-5" />
            </div>

          </div>
        </div>





        <div className='mt-10 pb-10'>
          {/* Divider */}
          <hr className="border-gray-300 mb-6" />

          {/* Footer Icons Row */}
          <div className="flex justify-between grid grid-cols-2 gap-4 mb-6">

            <div className="flex items-center gap-2">

              <IoBagOutline className='text-pink-600 text-2xl' />
              <p className=" font-semibold">Become Seller</p>
            </div>

            <div className="flex items-center gap-2">
              <TfiGift className='text-pink-600 text-2xl' />
              <p className=" font-semibold">Gift Cards</p>
            </div>

            <div className="flex items-center gap-2">
              <BsQuestionCircle className='text-pink-600 text-2xl' />
              <p className=" font-semibold">Help Center</p>
            </div>

          </div>

          {/* Terms Row */}
          <div className="flex  gap-5 text-[15px] text-gray-950 font-semibold mb-4">
            <p>Terms of Service</p>
            <p>Privacy & Policy</p>
          </div>

          {/* Bottom Note */}
          <p className="text-[13px] text-gray-950 font-medium leading-5">
            All Right reserved by Nikhil Wakekar
            <span className="text-blue-500 underline"> www.linkedin.com/in/nikhilwakekar </span> | 2025
          </p>

        </div>

      </footer1>




      {/* ===================== FULL FOOTER (TABLET + DESKTOP) ===================== */}
      <footer2 className="hidden md:block px-6 lg:p-7  py-10 bg-white lg:p-7 xl:px-32">

        {/* -------------------- TOP GRID: 5 COLUMNS -------------------- */}
        <div className="grid grid-cols-3 gap-10 lg:grid lg:grid-cols-5 lg:gap-0">

          {/* ========== COLUMN 1: LOGO + TEXT + PAYMENTS ========== */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 lg:mb-3">
              <img src='/cart.svg' className='w-14' />
              <h2 className="text-2xl font-semibold">ShopSphere</h2>
            </div>

            <p className="text-gray-600 text-[15px] leading-6 mb-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
            </p>

            <h3 className="text-[17px] font-semibold mb-3">Accepted Payments</h3>

            <div className=" mt-10  pb-10   ">



              {/* Payment Logos Grid */}
              <div className="grid grid-cols-3 gap-3 lg:grid lg:grid-cols-3 lg:gap-1 ">

                <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
                  <img src="./stripe.png" className="h-4" />
                </div>

                <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
                  <img src="./visa.png" className="h-4" />
                </div>

                <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
                  <img src="./mastercard.png" className="h-5" />
                </div>

                <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
                  <img src="./amazom.png" className="h-4" />
                </div>

                <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
                  <img src="./klarna.png" className="h-3" />
                </div>

                <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
                  <img src="./paypal.png" className="h-5" />
                </div>

                <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
                  <img src="./applepay.png" className="h-5" />
                </div>

                <div className="border rounded-lg p-2 flex justify-center items-center bg-white">
                  <img src="./gpay.png" className="h-5" />
                </div>

              </div>
            </div>
          </div>

          {/* ========== COLUMN 2: DEPARTMENT ========== */}
          <div className='lg:space-x-6'>
            <h3 className="text-[17px] font-semibold mb-3 lg:ml-6">Department</h3>

            <ul className="space-y-2 text-[15px] text-gray-600">
              <li>Fashion</li>
              <li>Education Product</li>
              <li>Frozen Food</li>
              <li>Beverages</li>
              <li>Organic Grocery</li>
              <li>Office Supplies</li>
              <li>Beauty Products</li>
              <li>Books</li>
              <li>Electronics & Gadget</li>
              <li>Travel Accessories</li>
              <li>Fitness</li>
              <li>Sneakers</li>
              <li>Toys</li>
              <li>Furniture</li>
            </ul>
          </div>

          {/* ========== COLUMN 3: ABOUT US ========== */}
          <div className='lg:space-x-6'>
            <h3 className="text-[17px] font-semibold mb-3 lg:ml-6">About Us</h3>

            <ul className="space-y-2 text-[15px] text-gray-600">
              <li>About Shopcart</li>
              <li>Careers</li>
              <li>News & Blog</li>
              <li>Help</li>
              <li>Press Center</li>
              <li>Shop By Location</li>
              <li>Shopcart Brands</li>
              <li>Affiliate & Partners</li>
              <li>Ideas & Guides</li>
            </ul>
          </div>

          {/* ========== COLUMN 4: SERVICES ========== */}
          <div className='lg:space-x-6'>
            <h3 className="text-[17px] font-semibold mb-3 lg:ml-6">Services</h3>

            <ul className="space-y-2 text-[15px] text-gray-600">
              <li>Gift Card</li>
              <li>Mobile App</li>
              <li>Shipping & Delivery</li>
              <li>Order Pickup</li>
              <li>Account Signup</li>
            </ul>
          </div>

          {/* ========== COLUMN 5: HELP ========== */}
          <div className='lg:space-x-6'>
            <h3 className="text-[17px] font-semibold mb-3 lg:ml-6">Help</h3>

            <ul className="space-y-2 text-[15px] text-gray-600">
              <li>Shopcart Help</li>
              <li>Returns</li>
              <li>Track Orders</li>
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Security & Fraud</li>
            </ul>
          </div>

        </div>



        {/* -------------------- BOTTOM ICON LINKS -------------------- */}
        <div className='mt-10 pb-3'>
          {/* Divider */}
          <hr className="border-gray-300 mb-6" />

          {/* Footer Icons Row */}
          <div className="  flex  gap-8  mb-6 ">

            <div className="flex items-center gap-2 w-fit ">

              <IoBagOutline className='text-pink-600 text-2xl' />
              <p className=" font-semibold">Become Seller</p>
            </div>

            <div className="flex items-center gap-2 w-fit ">
              <TfiGift className='text-pink-600 text-2xl' />
              <p className=" font-semibold">Gift Cards</p>
            </div>

            <div className="flex items-center gap-2 w-fit ">
              <BsQuestionCircle className='text-pink-600 text-2xl' />
              <p className=" font-semibold">Help Center</p>
            </div>

          </div>

          {/* Terms Row */}
          <div className="flex  gap-5 text-[15px] text-gray-950 font-semibold mb-4">
            <p>Terms of Service</p>
            <p>Privacy & Policy</p>
          </div>

          {/* Bottom Note */}
          <p className="text-[13px] text-gray-950 font-medium leading-5">
            All Right reserved by Nikhil Wakekar
            <span className="text-blue-500 underline"> www.linkedin.com/in/nikhilwakekar </span> | 2025
          </p>

        </div>

      </footer2>










    </section >
  )
}

export default Home
