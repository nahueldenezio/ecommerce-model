import ProductCard from './ProductCard';
import '../styles/ProductList.scss';

const ProductList = ({ products }) => {
  return (
    <section className="product-list" id="products">
      <h2>Productos</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;