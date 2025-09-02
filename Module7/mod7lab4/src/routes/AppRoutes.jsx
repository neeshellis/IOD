
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import BitcoinPage from '../pages/BitcoinPage'
import BitcoinRates from '../pages/BitcoinPage'


export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/black' element={<HomePage/>}/>
            <Route path='/red' element={<LoginPage/>}/>
             <Route path='/green' element={<BitcoinRates/>}/>
        </Routes>
            )
}

