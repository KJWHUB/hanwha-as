import axios from 'axios';

// 인스턴스를 생성할때 config 기본값 설정하기
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000
});

// response interceptor
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
  }
);

export default instance;
