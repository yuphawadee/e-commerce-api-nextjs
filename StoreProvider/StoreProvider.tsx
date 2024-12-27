'use client'

import { CartProvider } from '@/store/CartContext'
import { ProductProvider } from '@/store/context'
import store from '@/store/store'
import React from 'react'
import {Provider} from 'react-redux'

const StoreProvider = ({ children }:{ children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ProductProvider>
        <CartProvider>
      {children}    
        </CartProvider>
      </ProductProvider> 
    </Provider>
  )
}

export default StoreProvider