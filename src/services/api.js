import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = {
  async sendRequest(request) {
    try {
      const response = await axios.post(API_URL, request, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Методы для конкретных запросов
  async login(username, password) {
    return this.sendRequest({
      id: 'login',
      action: 'login',
      data: JSON.stringify({ username, password })
    });
  },

  async register(userData) {
    return this.sendRequest({
      id: 'register',
      action: 'register',
      data: JSON.stringify(userData)
    });
  },

  async getUserData(token) {
    return this.sendRequest({
      id: 'getUserData',
      action: 'getUserData',
      token: token,
      data: JSON.stringify({})
    });
  },

  async getStudentsList(token) {
    return this.sendRequest({
      id: 'getStudentsList',
      action: 'getStudentsList',
      token: token,
      data: JSON.stringify({})
    });
  },

  async getAttendance(token) {
    return this.sendRequest({
      id: 'getAttendance',
      action: 'getAttendance',
      token: token,
      data: JSON.stringify({})
    });
  }
};

export default api;