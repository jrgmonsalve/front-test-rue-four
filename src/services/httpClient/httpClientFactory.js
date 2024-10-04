import AxiosHttpClient from "./axiosHttpClient";


const createHttpClient = (type) => {
  switch (type) {
    case 'axios':
      return new AxiosHttpClient();
    default:
      throw new Error('Invalid HTTP client type');
  }
};

export default createHttpClient;