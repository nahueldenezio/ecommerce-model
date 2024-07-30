import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../axios';
import ProductDetail from '../components/ProductDetail';

const ProductPage = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
