import React from 'react'
import AllCompo from '../components/AllCompo';
import Footer from '../components/Footer';
import HeaderContact from './HeaderContact';
import ContactPage from './ContactPage';
import { CartProvider } from 'react-use-cart';

function AllContact() {
  return (
    <CartProvider>
        <AllCompo/>
        <HeaderContact/>
        <ContactPage/>
        <Footer/>
    </CartProvider>
  )
}

export default AllContact ;