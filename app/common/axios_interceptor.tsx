import axios from 'axios';


///https://axios-http.com/docs/interceptors
export const instance = axios.create();


//config interceptors request
instance.interceptors.request.use(req => {
  console.log(`interceptor request ${req.params}`);
  return req;
});


//config interceptors respone
instance.interceptors.response.use(res => {
  console.log(`interceptor respone ${res.status} : ${res.data.data.avatar}`);
  return res;
});
