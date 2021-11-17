import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Payment from './components/Payment'

const App = () => {
  const [totalPay, setTotalPay] = React.useState(0)
  const [cart, setCart] = React.useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home
            setTotalPay={setTotalPay}
            cart={cart}
            setCart={setCart} />
        } />
        <Route path="payment" element={<Payment totalPay={totalPay} />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
