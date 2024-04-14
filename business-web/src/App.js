import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Home';
import NavBar from './Nav';

function App() {
    return (
    <ChakraProvider>
      <NavBar />
      <Home />
  </ChakraProvider>
  );
}

export default App;
