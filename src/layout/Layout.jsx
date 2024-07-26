import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Cashbox from '../pages/Cashbox/Cashbox'
import Storehouse from '../pages/Storehouse/Storehouse'
import Debt from '../pages/Debt/Debt'
import Account from '../pages/Account/Account'
import NotFound from '../pages/NotFound/NotFound'
import Sale from '../pages/Sale/Sale'
import Analysis from '../pages/Analysis/Analysis'
import { Route, Routes } from 'react-router'
import Stores from '../pages/Stores/Stores'
import Settings from '../pages/Settings/Settings'

const Layout = () => {
    return (
        <>
            <div className='d-flex'>
                <Sidebar />
                <div style={{ width: "100%" }}>
                    <Header />
                    <Routes>
                        <Route path='*' element={<NotFound />}></Route>
                        <Route path='/' element={<Analysis />}></Route>
                        <Route path='/sale' element={<Sale />}></Route>
                        <Route path='/cashbox' element={<Cashbox />}></Route>
                        <Route path='/storehouse' element={<Storehouse />}></Route>
                        <Route path='/debt' element={<Debt />}></Route>
                        <Route path='/settings' element={<Settings />}></Route>
                        <Route path='/account' element={<Account />}></Route>
                        <Route path='/stores' element={<Stores />}></Route>
                    
                    </Routes>
                </div>
            </div>
        </>
    )
}
export default Layout