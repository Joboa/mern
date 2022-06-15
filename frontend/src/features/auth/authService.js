import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER_URL;
const API_URL = `${serverURL}/api/users`;

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  return response.data;
}


// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + '/login',
    userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  return response.data;
}

// Logout user
const logout = () => {
  localStorage.removeItem('user');
}

const authService = {
  register,
  logout,
  login
};


export default authService;