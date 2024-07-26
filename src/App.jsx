import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import MainLayout from './layout/MainLayout'
import NotFound from './pages/NotFound/NotFound'
import Analysis from './pages/Analysis/Analysis'
import Sale from './pages/Sale/Sale'
import Cashbox from './pages/Cashbox/Cashbox'
import Storehouse from './pages/Storehouse/Storehouse'
import Debt from './pages/Debt/Debt'
import Stores from './pages/Stores/Stores'
import Account from './pages/Account/Account'
import NoSidebarLayout from './layout/NoSidebarLayout'
import ForgetPasword from './pages/ForgetPasword/ForgetPasword'
import EmailSend from './pages/EmailSend/EmailSend'
import NewPasword from './pages/NewPasword/NewPasword'
import { DonePasword } from './pages/DonePasword/DonePasword'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='*' element={<NotFound />}></Route>
            <Route path='/' element={<Analysis />}></Route>
            <Route path='/sale' element={<Sale />}></Route>
            <Route path='/cashbox' element={<Cashbox />}></Route>
            <Route path='/storehouse' element={<Storehouse />}></Route>
            <Route path='/debt' element={<Debt />}></Route>
            <Route path='/stores' element={<Stores />}></Route>
            <Route path='/account' element={<Account />}></Route>
          </Route>

          <Route element={<NoSidebarLayout />}>
            <Route path='/registration' element={<Registration />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/forgetpasword' element={<ForgetPasword />}></Route>
          <Route path='/emailsend' element={<EmailSend />}></Route>
          <Route path='/newpasword' element={<NewPasword />}></Route>
          <Route path='/donepasword' element={<DonePasword />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App







