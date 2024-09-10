import React from 'react';
import { getProductById } from '../services/products.service';

export const useProductById = (id) => {
  const [products, setProducts] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { products, loading };
};
