import React from 'react';
import { ItemListContainer } from '../components';
import { useParams } from 'react-router';
import { useProductsByCategory } from '../hooks';

export const Category = () => {
  const { categoryId } = useParams();
  const { products } = useProductsByCategory(categoryId)

  return <ItemListContainer products={products} />;
};