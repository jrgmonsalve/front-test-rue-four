class HttpClient {
    get(url, options) {
      throw new Error("Method 'get' must be implemented.");
    }
  
    post(url, data, options) {
      throw new Error("Method 'post' must be implemented.");
    }
  
    // You can add more methods (put, delete, etc.) as needed
  }
  
  export default HttpClient;