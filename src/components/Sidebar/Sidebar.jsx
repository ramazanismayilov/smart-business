import React, { useRef } from 'react'
import OffcanvasMenu from '../../components/OffcanvasMenu/OffcanvasMenu'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const Sidebar = () => {
  const menu = useRef();
  const openMenu = () => {
    menu.current.classList.add('open');
  }

  const closeMenu = () => {
    menu.current.classList.remove('open');
  }
  return (
    <>
      <div className="sidebar">
        <OffcanvasMenu />
      </div>

      <div className="sidebar-menu">
        <button onClick={openMenu} className='open-btn'><HiBars3CenterLeft /></button>
        <div ref={menu} className="offcanvas-menu">
          <button onClick={closeMenu} className='close-btn'><MdClose /></button>
          <OffcanvasMenu />
        </div>
      </div>
    </>
  )
}
export default Sidebar