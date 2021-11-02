import { api } from 'services/api';

export const loginAuth = (data) => api.post(`/auth/authenticate`, data);