import axios from "axios";

// 인스턴스를 생성할때 config 기본값 설정하기
const instance = axios.create({
  baseURL: "https://api.example.com"
});

export default instance;
