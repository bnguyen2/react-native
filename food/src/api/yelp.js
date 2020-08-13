import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer ekQw_XVtMuUUSDkJqShs6EUdzkYrqMimKez_ho5nJwZ9czggoH50XtwSxqUovXN33XS5_-uPqB5-1-7Wkc5QpJ_nYA-_woocMX5ImbfzmdBensQRWnDQY9xjBrn3WXYx',
  },
});
