import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Category from './components/Category';
import Products from './components/Products';
import Card from './components/Card';
import Collection from './components/Collection';
import Seller from './components/Seller';
import SingleProducts from './components/SingleProducts';
import  Footer  from './components/Footer';
import LastFooter from './components/LastFooter';


function App() {
  return (
    <div >
     <Navbar />
     <Banner />
     <Category/>
    <Products />
    <Card />
    <Collection />
    <Seller />
    <SingleProducts />
     <Footer />
    <LastFooter />
    </div>
  );
}

export default App;