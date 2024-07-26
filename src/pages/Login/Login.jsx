import React, { useState } from 'react';
import loginphoto from "../../assets/images/loginpohoto/logindeafult.png";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../services/authService'; // login fonksiyonunu import ediyoruz
import googlebtn from "../../assets/images/loginpohoto/googlebtn.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      console.log('Giriş yapıldı, token:', token);
      if (token) {
        navigate('/'); // Token eşleştiğinde Analysis (ana sayfa) sayfasına yönlendir
      } else {
        console.error('Login failed: Invalid token');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Hata durumunda kullanıcıya mesaj gösterme
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div id='login'>
      <div className="login__container">
        <div className="login__leftsize">
          <div className="login__left">
            <div className="login__top">
              Xoş gəlmisiniz!
            </div>
            <div className="login__inputbtn">
              <div className="login__inputs">
                <div className="login__email">
                  <p className='inputtexweight'>E-mail</p>
                  <input
                    className='email__input'
                    type="text"
                    placeholder='smartbusiness@mail.ru'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="login__password">
                  <p className='inputtexweight'>Parol</p>
                  <div className='paswordinptsd'>
                    <input
                      className='passwordvisible'
                      type={isPasswordVisible ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className='eyesiconsd' onClick={togglePasswordVisibility}>
                      <i className={`bi ${isPasswordVisible ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </span>
                  </div>
                </div>
                <Link to="/forgetpasword">
                
                <p className='passwordforget'>Şifrəni unutmusunuz?</p>
                </Link>
              </div>
              <div className="login__button">
                <div className="sign__btn" onClick={handleLogin}>Daxil ol</div>
                <div className="linemore">
                  <div className="linesgooglebtn"></div>
                  <p className='lisnesmoretext'>və ya</p>
                  <div className="linesgooglebtn"></div>
                </div>
                <div className="google__button">
                  <a className='googlebox' href="/">
                    <img src={googlebtn} alt="" />
                    <p className='google'>Google</p>
                  </a>
                </div>
              </div>
              <div className="login__buttomtext">
              
                <p>Hesabınız yoxdur?</p>
                <Link className='signaccount' to="/registration">
                  Hesab yarat
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="login__right">
          <img className='logindefaultphoto' src={loginphoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
