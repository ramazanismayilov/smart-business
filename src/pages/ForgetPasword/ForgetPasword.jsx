import React, { useState } from 'react';
import loginphoto from "../../assets/images/loginpohoto/logindeafult.png";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from '../../services/authService'; // resetPassword fonksiyonunu import ediyoruz

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = async () => {
    try {
      const data = await resetPassword(email);

      if (data && data.success) {
        setMessage('Şifre sıfırlama e-postası gönderildi.');
        setError('');
        navigate('/emailsend'); // Şifre sıfırlama başarılıysa emailsend sayfasına yönlendir
      } else {
        throw new Error('Şifre sıfırlama başarısız oldu');
      }
    } catch (error) {
      setError('Şifre sıfırlama hatası: ' + error.message);
      setMessage('');
    }
  };

  return (
    <div id='forgetpasword'>
      <div className="forgetpasword__container">
        <div className="forget__leftsize">
          <div className="forget__left">
            <div className="forget__top">
              <h4 className='forgettopname'>Şifrəni bərpa et</h4>
              <p className='forgettexts'>Əgər şifrənizi unutmusunuzsa, E-poçt ünvanınızı daxil edərək göndərilmiş link vasitəsi ilə yeni şifrə təyin edə bilərsiniz.</p>
              <div className="forget__email">
                <p className='inputtexweight'>E-mail</p>
                <input
                  className='email__input'
                  type="text"
                  placeholder='smartbusiness@mail.ru'
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="sign__btn" onClick={handleResetPassword}>Şifrəni sıfırla</div>
              {message && <p className='success-message'>{message}</p>}
              {error && <p className='error-message'>{error}</p>}
              <div className="forget__buttomhref">
                <p>Ehtiyac yoxdur</p>
                <Link className='signaccount' to="/login">
                  Daxil olun
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="forget__right">
          <img className='logindefaultphoto' src={loginphoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
