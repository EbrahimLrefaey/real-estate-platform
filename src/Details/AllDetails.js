import React from 'react'
import AllCompo from '../components/AllCompo';
import Footer from '../components/Footer';
import HeaderDetails from './HeaderDetails';
import SingleDetails from './SingleDetails';
import BestDeal from '../Home/BestDeal';
import { CartProvider } from 'react-use-cart';

function AllDetails() {
  return (
    <CartProvider>
        <AllCompo/>
        <HeaderDetails/>
        <SingleDetails/>
        <BestDeal/>
        <Footer/>
    </CartProvider>
  )
}

export default AllDetails ;