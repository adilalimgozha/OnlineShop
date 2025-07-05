import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Navigation from './components/Navigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>

        <Route element={<Navigation/>}>
          <Route index element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='cart' element={<Cart />} />
        </Route>
        
      </Routes>

      
    </BrowserRouter>
   
  </StrictMode>,
)
