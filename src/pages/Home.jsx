import HeroSection from '../components/HeroSection';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/Home.scss';

const products = [
  { id: 1, name: 'Producto 1', image: '/path/to/image1.jpg', description: 'Descripción del producto 1', price: 19.99 },
  { id: 2, name: 'Producto 2', image: '/path/to/image2.jpg', description: 'Descripción del producto 2', price: 29.99 },
  { id: 3, name: 'Producto 3', image: '/path/to/image3.jpg', description: 'Descripción del Producto 3', price: 39.99 },
  { id: 4, name: 'Producto 4', image: '/path/to/image4.jpg', description: 'Descripción del Producto 4', price: 49.99 },
  { id: 5, name: 'Producto 5', image: '/path/to/image5.jpg', description: 'Descripción del Producto 5', price: 59.99 },
  { id: 6, name: 'Producto 6', image: '/path/to/image6.jpg', description: 'Descripción del Producto 6', price: 69.99 }

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
