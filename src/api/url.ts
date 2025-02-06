import axios from 'axios';

export const baseSerive = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})