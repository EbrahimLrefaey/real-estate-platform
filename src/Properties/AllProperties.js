import React from 'react'
import AllCompo from '../components/AllCompo';
import Footer from '../components/Footer';
import HeaderProp from './HeaderProp';
import PropSection from './PropSection';
import { CartProvider } from 'react-use-cart';

function AllProperties() {
  return (
    <CartProvider>
        <AllCompo />
        <HeaderProp/>
        <PropSection/>
        <Footer />
    </CartProvider>
  )
  
}

export default AllProperties ;