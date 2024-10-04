import axios from 'axios';
import HttpClient from './httpClient';

class AxiosHttpClient extends HttpClient {
  constructor() {
    super();
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
    });
  }

  get(url, options) {
    return this.axiosInstance.get(url, options);
  }

  post(url, data, options) {
    console.log(url, data, options);
    return this.axiosInstance.post(url, data, options);
  }

  // Implement other methods as needed
}

export default AxiosHttpClient;