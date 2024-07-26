import axios from 'axios';
import CryptoJS from 'crypto-js';

const LOGIN_API_URL = 'http://your-backend-api-url.com/auth/login'; // Login endpoint URL'i
const REGISTER_API_URL = 'http://your-backend-api-url.com/auth/register'; // Register endpoint URL'i
const RESET_PASSWORD_API_URL = 'http://your-backend-api-url.com/auth/reset-password'; // Şifre sıfırlama endpoint URL'i

const login = async (email, password) => {
  try {
    const response = await axios.post(LOGIN_API_URL, { email, password });

    if (response.data && response.data.token) {
      const user = {
        email: email,
        token: response.data.token
      };

      const encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(user), 'gizliAnahtar').toString();
      localStorage.setItem('authToken', encryptedToken);

      return encryptedToken;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

const register = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(REGISTER_API_URL, { firstName, lastName, email, password });

    if (response.data && response.data.token) {
      const user = {
        email: email,
        token: response.data.token
      };

      const encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(user), 'gizliAnahtar').toString();
      localStorage.setItem('authToken', encryptedToken);

      return encryptedToken;
    } else {
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

const resetPassword = async (email) => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token bulunamadı');
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token.token}` // Token'i Authorization header'ı olarak ekleyin
      }
    };

    const response = await axios.post(RESET_PASSWORD_API_URL, { email }, config);

    return response.data;
  } catch (error) {
    console.error('Reset password error:', error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('authToken');
};

const getToken = () => {
  const encryptedToken = localStorage.getItem('authToken');
  if (encryptedToken) {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, 'gizliAnahtar');
    const decryptedToken = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedToken;
  }
  return null;
};

export { login, register, resetPassword, logout, getToken };
