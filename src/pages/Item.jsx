import React from 'react';
import { useParams } from 'react-router';
import { ItemDetailContainer } from '../components';
import { useProductById } from '../hooks/';

export const Item = () => {
  const { id } = useParams();
  const { product, loading } = useProductById(id);
  return <ItemDetailContainer product={product} />;
};
