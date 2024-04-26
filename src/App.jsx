import { useState , useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Single from './components/singlePage/Single';
import Wishlist from './components/Wishlist'
import Footer from './components/footer/Footer'
import Cart from './components/Cart'
import Biling from './components/Biling'
let url = 'https://fakestoreapi.com/products'

function App() {
  const [product,setProduct] = useState([])
  const fetchdata = async () => {
    try {
     const resp = await fetch(url)
     const data = await resp.json()
     setProduct(data)
    } catch (error) {
     console.log(error);
    }
   }
   useEffect(()=>{
       fetchdata()
   },[])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<div><Hero /> <Main product={product} /></div>} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/product/:id' element={<Single product={product} /> } />
        <Route path='/cart' element={<Cart />} />
        <Route path='/billing' element={<Biling />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
