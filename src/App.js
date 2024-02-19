import React from 'react'
import { Header } from './Components/Header'
import { Products } from './Components/Products'
import "./app.css"

export const App = () => {
  return (
    <div className='container'>
        <div>
            <Header/>
            <Products/>
        </div>
    </div>
  )
}
