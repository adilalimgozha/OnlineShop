import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Navigation from './components/Navigation.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

import store from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>

      <Routes>

        <Route element={<Navigation/>}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='product/:prodId' element={<ProductDetail/>}></Route>
        </Route>
        
      </Routes>

      </Provider>
    </BrowserRouter>
   
  </StrictMode>,
)
