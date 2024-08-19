import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContainer greeting={'Welcome!'}/>
    </ChakraProvider>
  )
}

export default App
