import React from 'react'
import { Outlet } from 'react-router'

const NoSidebarLayout = () => {
    return (
        <>
            <div className="nosidebar-layout">
                <Outlet />
            </div>
        </>
    )
}

export default NoSidebarLayout