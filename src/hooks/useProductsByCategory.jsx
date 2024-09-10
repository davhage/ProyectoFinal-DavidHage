import React from 'react';
import { getProductsByCategory } from '../services/products.service';

export const useProductsByCategory = (id) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProductsByCategory(id)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return { products };
};
