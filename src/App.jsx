import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Navigation from './components/Navigation.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Registration from './pages/Registration.jsx'
import PrivateRoute from './privateRoute/PrivateRoute.jsx'

import { Routes, Route } from 'react-router'



export default function App() {


  return (
    <div className='main'>
        <Routes>

          <Route element={<Navigation/>}>
            <Route index element={<Home />} />
            <Route path='cart' element={<Cart />} />
            <Route path='product/:prodId' element={<ProductDetail/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='profile' element={
              <PrivateRoute>
                <Profile/>
              </PrivateRoute>
              }></Route>
            <Route path='registration' element={<Registration/>}></Route>
          </Route>
          
        </Routes>
    </div>
  )
}
