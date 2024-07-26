import React, { useState } from 'react'
import Phone from '../../assets/images/headerphoto/phone.png'
import ChevronDown from '../../assets/images/headerphoto/chevron-down.png'
import Debt from '../../assets/images/analysisphoto/debt.png'
import Language from '../../assets/images/headerphoto/language.png'
import Profile from '../../assets/images/headerphoto/profile.png'
import AzeFlag from '../../assets/images/headerphoto/azeflag.png'
import EnFlag from '../../assets/images/headerphoto/enflag.png'
import RuFlag from '../../assets/images/headerphoto/ruflag.png'
import Dropdown from '../../components/Dropdown/Dropdown'
import { Link } from 'react-router-dom'
const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };
  return (
    <>
      <header className='py-3'>
        <div className='container d-flex align-items-center justify-content-between' >
          <div className="phone d-flex align-items-center gap-1">
            <img src={Phone} alt="image/Phone" />
            <span className='fw-bold fs-4'>*1212</span>
          </div>
          <div className="search-bar d-flex align-items-center gap-3">
            <div className="store">
              <Dropdown
                isOpen={openDropdown === 'dropdown1'}
                onClick={() => handleDropdownClick('dropdown1')}
                mainComponent={
                  <>
                    <span>Mağazalar</span>
                    <img src={ChevronDown} alt="image/ChevronDown" />
                  </>
                }
              >
                <div className="menu rounded-3 mt-2 d-flex flex-column gap-3">
                  <div className="item d-flex align-items-center gap-3">
                    <div className="image">
                      <img src={Debt} alt="image/Debt" />
                    </div>
                    <div>
                      <div className="content">
                        <h5>Gənclik filialı</h5>
                        <span>Gənclik 200</span>
                      </div>
                    </div>
                  </div>
                  <div className="item d-flex align-items-center gap-3">
                    <div className="image">
                      <img src={Debt} alt="image/Debt" />
                    </div>
                    <div>
                      <div className="content">
                        <h5>Gənclik filialı</h5>
                        <span>Gənclik 200</span>
                      </div>
                    </div>
                  </div>
                  <div className="item d-flex align-items-center gap-3">
                    <div className="image">
                      <img src={Debt} alt="image/Debt" />
                    </div>
                    <div>
                      <div className="content">
                        <h5>Gənclik filialı</h5>
                        <span>Gənclik 200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown>
            </div>

            <div className="language">
              <Dropdown
                isOpen={openDropdown === 'dropdown2'}
                onClick={() => handleDropdownClick('dropdown2')}
                mainComponent={
                  <img src={Language} alt="image/Language" />
                }
              >
                <div className="menu rounded-3 mt-2 w-0 p-0">
                  <div className="lang d-flex flex-column">
                    <button className='d-flex align-items-center gap-2'>
                      <img src={AzeFlag} alt="image/AzeFlag" />
                      <span>Az</span>
                    </button>
                    <button className='d-flex align-items-center gap-2'>
                      <img src={EnFlag} alt="" />
                      <span>En</span>
                    </button>
                    <button className='d-flex align-items-center gap-2'>
                      <img src={RuFlag} alt="" />
                      <span>Ru</span>
                    </button>
                  </div>
                </div>
              </Dropdown>
            </div>

            <div className="profile">
              <Link to='/account'>
                <img src={Profile} alt="image/Profile" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header