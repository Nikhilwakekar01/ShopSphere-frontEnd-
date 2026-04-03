
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/productDetail'
import Categories from './components/Categories'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import Verify from './pages/Verify'
import VerifyMail from './pages/VerifyMail'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Navbar />

        <Home />
      </div>
  },
  {
    path: "/account",
    element:
      <div>

        <SignUp />
      </div>
  },
  {
    path: '/cart',
    element:
      <div>
        <Navbar />
        <Cart />

      </div>
  },
  {
    path: '/checkout',
    element:
      <div>
        <Checkout />
      </div>
  },
  {
    path: '/productDetail',
    element:
      <div>
        <Navbar />
        <ProductDetail />
      </div>
  },
  {
    path: '/verify',
    element:
      <div>
        <Verify />
      </div>

  },
  {
    path: '/verify/:token',
    element:
      <div>
        <VerifyMail />
      </div>

  },
  {
    path: '/login',
    element:
      <div>
        <LogIn />
      </div>
  },
  {
    path: '/profile/:id',
    element:
      <div>
        <Navbar />
        <Profile />
      </div>
  }

])

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);


  return (
    <>
      <div >
        <RouterProvider router={router} />
      </div>

    </>
  )
}

export default App
