import HeroSection from '../components/HeroSection';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/Home.scss';

const products = [
  { id: 1, name: 'Producto 1', image: '/path/to/image1.jpg', description: 'Descripción del producto 1', price: 19.99 },
  { id: 2, name: 'Producto 2', image: '/path/to/image2.jpg', description: 'Descripción del producto 2', price: 29.99 },
  // Más productos aquí
];

const Home = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};

export default Home;
