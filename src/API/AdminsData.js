import axios from 'axios';

// const AUTH_URL = 'https://pet-shop-36ob.onrender.com';
const MAIN_URL = 'https://pet-shop-36ob.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// auth
export const register = async data => {
  try {
    const response = await axios.post(`${MAIN_URL}/auth/register`, data);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const logIn = async data => {
  try {
    const response = await axios.post(`${MAIN_URL}/auth/login`, data);
    token.set(response.data.token);
    // localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCurrentUser = async () => {
  const persistedToken = localStorage.getItem('token');

  if (persistedToken === null) {
    return;
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get(`${MAIN_URL}/auth/current`);
    return data.token;
  } catch (error) {
    localStorage.setItem('token', '');
    console.log(error.message);
  }
};

// orders info
export const getUsersData = async () => {
  try {
    const response = await axios.get(`${MAIN_URL}/api/orders`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
