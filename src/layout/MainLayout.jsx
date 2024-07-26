import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <>
            <div className="main-layout">
                <Header />
                <div className="content">
                    <Sidebar />
                    <div className="main-content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainLayout