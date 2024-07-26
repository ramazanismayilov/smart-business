import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import loginphoto from '../../assets/images/loginpohoto/Photosite.svg';
import googlebtn from "../../assets/images/loginpohoto/googlebtn.png";
import { register } from '../../services/authService'; // register fonksiyonunu import ediyoruz

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordAir, setIsPasswordAir] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePasswordVisibilityNew = () => {
    setIsPasswordAir(!isPasswordAir);
  };

  const handleRegister = async () => {
    if (password !== passwordNew) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const token = await register(firstName, lastName, email, password);
      console.log('Kayıt yapıldı, token:', token);
      if (token) {
        navigate('/login'); // Kayıt başarılıysa login sayfasına yönlendir
      } else {
        console.error('Registration failed: Invalid token');
      }
    } catch (error) {
      console.error('Registration error:', error);
      // Hata durumunda kullanıcıya mesaj gösterme
    }
  };

  return (
    <div id="registration">
      <div className="registration__container">
        <div className="registration__leftsize">
          <div className="registration__left">
            <div className="registration__top">Uğurlu satışlara!</div>
            <div className="registration__inputs">
              <div className="namesurnameline">
                <div className="registration__name">
                  <p className="inputtexweight">Ad</p>
                  <input
                    className="name__input"
                    type="text"
                    placeholder="Əli"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="registration__surnamename">
                  <p className="inputtexweight">Soyad</p>
                  <input
                    className="surname__input"
                    type="text"
                    placeholder="Əliyev"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="registration__email">
                <p className="inputtexweight">E-mail</p>
                <input
                  className="email__input"
                  type="text"
                  placeholder="smartbusiness@mail.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="registration__pasword">
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
              <div className="registrationrestrat__pasword">
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
              <div className="registration__button">
                <div className="sign__btn" onClick={handleRegister}>Daxil ol</div>
                <div className="linemore">
                  <div className="linesgooglebtn"></div>
                  <p className="lisnesmoretext">və ya</p>
                  <div className="linesgooglebtn"></div>
                </div>
                <div className="google__button">
                  <a className="googlebox" href="/">
                    <img src={googlebtn} alt="" />
                    <p className="google">Google</p>
                  </a>
                </div>
              </div>
              <div className="registration__buttomtext">
                <p>Hesabınız var?</p>
                <Link className="signaccount" to="/login">
                  Daxil olun
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="registration__right">
          <img className="logindeafultphoto" src={loginphoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
