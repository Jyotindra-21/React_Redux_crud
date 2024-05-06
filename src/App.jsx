import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NavigationBar from './components/NavigationBar'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/add-product' element={<AddProduct />}></Route>
          <Route path='/update-product/:id' element={<UpdateProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App