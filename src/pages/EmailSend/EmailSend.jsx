import React from 'react';
import loginphoto from "../../assets/images/loginpohoto/logindeafult.png";
import { Link } from "react-router-dom";
import { getToken } from '../../services/authService'; // AuthService'den getToken fonksiyonunu import edin

const EmailSend = () => {
  const token = getToken();
  const userEmail = token ? token.email : 'gulkhar.majidova@gmail.com'; // Token içerisinde email varsa kullan, yoksa default olarak gulkhar.majidova@gmail.com kullan

  return (
    <div id='emailsend'>
      <div className="emailsend__container">
        <div className="email__leftsize">
          <div className="email__left">
            <div className="email__top">
              <h4 className='emailtopname'>E-poçtunu yoxla</h4>
              <p className='emailtexts'>Şifrəni bərpa etmək üçün təyin edilmiş link {userEmail} adresinə göndərilmişdir. Zəhmət olmasa, linkə daxil olun.</p>
              <Link className='signaccount' to="/forgetpasword">
                Yenidən göndər
              </Link>
            </div>
          </div>
        </div>
        <div className="email__right">
          <img className='logindefaultphoto' src={loginphoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EmailSend;
