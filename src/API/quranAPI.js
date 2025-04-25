import axios from 'axios';

const api = axios.create({
  baseURL: 'https://equran.id/api',
});

export const getSurahList = () => api.get('/surat');
export const getSurahDetail = (id) => api.get(`/surat/${id}`);
