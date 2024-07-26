import React, { useState } from 'react';
import loginphoto from '../../assets/images/loginpohoto/Photosite.svg';
const NewPasword = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordAir, setIsPasswordAir] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePasswordVisibilityNew = () => {
    setIsPasswordAir(!isPasswordAir);
  };

  return (
    <div id='newpasword'>
<div className="newpasword__container">
    <div className="newpasword__leftsize">
        <div className="newpasword__left">
            <div className="newpasword__top">
                <h4 className='topnames'>Şifrənin bərpası</h4>
            </div>
            <div className="newpasword__inputs">
        <div className="newpasword__email">
                <p className="inputtexweight">E-mail</p>
                <input
                  className="email__input"
                  type="text"
                  placeholder="smartbusiness@mail.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
        <div className="newpasword__top">
                <p className="inputtexweight">Parol </p>
                <div className="paswordsinpt" style={{ position: 'relative' }}>
                  <input
                    className="paswordvisible"
                    type={isPasswordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ paddingRight: '30px' }}
                  />
                  <div className="airicons" onClick={togglePasswordVisibility}>
                  <i className={`bi ${isPasswordVisible ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </div>
                </div>
              </div>
        <div className="newpasword__restrat">
                <p className="inputtexweight">Parolu təkrarlayın </p>
                <div className="paswordsinpt" style={{ position: 'relative' }}>
                  <input
                    className="paswordvisible"
                    type={isPasswordAir ? 'text' : 'password'}
                    value={passwordNew}
                    onChange={(e) => setPasswordNew(e.target.value)}
                    style={{ paddingRight: '30px' }}
                  />
                  <div className="air__icon" onClick={togglePasswordVisibilityNew}>
                    <i className={`bi ${isPasswordAir ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </div>
                </div>
              </div>

              <div className="sign__btn">Şifrəni bərpa et</div>

            </div>
        </div>
    </div>
    <div className="newpasword__right">
          <img className="logindeafultphoto" src={loginphoto} alt="" />
        </div>
</div>
    </div>
  )
}

export default NewPasword