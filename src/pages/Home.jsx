// src/pages/Home.jsx

import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import api from '../api/axios';
import '../styles/Home.scss';
import About from '../components/About';
import HomeGrid from '../components/HomeGrid';
import MoreGrid from '../components/MoreGrid';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Nav />
      <HeroSection />
      <HomeGrid />
      <ProductList products={products} />
      <MoreGrid />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
