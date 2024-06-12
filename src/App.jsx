import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
// import components
import Layout from './layout'
import Home from './pages/home'
import ProductDetails from './pages/product-details'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='products/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default memo(App)