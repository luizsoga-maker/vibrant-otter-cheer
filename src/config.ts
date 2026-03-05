export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  AI_GENERATE: `${API_BASE_URL}/api/ai/generate`,
  AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,
  AUTH_SIGNUP: `${API_BASE_URL}/api/auth/signup`,
  SITES: `${API_BASE_URL}/api/sites`,
  PAGES: `${API_BASE_URL}/api/pages`,
  ASSETS: `${API_BASE_URL}/api/assets`,
  BILLING: `${API_BASE_URL}/api/billing`,
};