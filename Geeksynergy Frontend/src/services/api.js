import axios from 'axios';

const API_URL = 'https://geeksynergy-task-server.onrender.com/api/users';

export const registerUser = (userData) => axios.post(`${API_URL}/signup`, userData);
export const loginUser = (credentials) => axios.post(`${API_URL}/login`, credentials);
export const getUsers = () => axios.get(`${API_URL}/users`);
export const updateUser = (userData) => axios.put(`${API_URL}/update`, userData);
export const deleteUser = (id) => axios.delete(`${API_URL}/delete/${id}`);
