import React from 'react'
import donephoto from "../../assets/images/donephoto/done.png"
import loginphoto from "../../assets/images/loginpohoto/logindeafult.png";
import { Link } from "react-router-dom";
export const DonePasword = () => {
  return (
    <div id='donepasword'>
        <div className="donepasword__container">
            <div className="donepasword__letsize">
                <div className="donepasword__left">
                  <div className="donepasword__top">
<img src={donephoto} alt="" />
<h4 className='donetext'>Şifrəniz uğurla dəyişdirilmişdir</h4>
<Link className='acseslinks' to="/login">
Daxil olun
</Link>
                  </div>
                </div>
            </div>
            <div className="donepasword__right">
          <img className="logindeafultphoto" src={loginphoto} alt="" />
        </div>
        </div>
    </div>
  )
}
