import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const baseInstance = axios.create({
  baseURL: BASE_URL,
});

export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
