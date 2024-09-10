import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components';
import { Home } from '../pages';
import { Item } from '../pages';
import { Category } from '../pages/Category';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item/:id' element={<Item />} />
        <Route path='/category/:categoryId' element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};
