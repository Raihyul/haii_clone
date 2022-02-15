// // import useFetch from "../hooks/useFetch";
// // export const handleData = useFetch(`{process.env.SERVER_BASIC_URL}partners`);

// import axios, { AxiosInstance } from "axios";

// const customAPI: AxiosInstance = axios.create({
//   baseURL: process.env.SERVER_BASIC_URL,
//   timeout: 5000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// /*
//     1. 요청 인터셉터를 작성합니다.
//     2개의 콜백 함수를 받습니다.

//     1) 요청 바로 직전 - 인자값: axios config
//     2) 요청 에러 - 인자값: error
// */
// customAPI.interceptors.request.use(
//   function (config) {
//     // 요청 바로 직전
//     // axios 설정값에 대해 작성합니다.
//     return config;
//   },
//   function (error) {
//     // 요청 에러 처리를 작성합니다.
//     return Promise.reject(error);
//   }
// );

// /*
//     2. 응답 인터셉터를 작성합니다.
//     2개의 콜백 함수를 받습니다.

//     1) 응답 정성 - 인자값: http response
//     2) 응답 에러 - 인자값: http error
// */
// customAPI.interceptors.response.use(
//   function (response) {
//     /*
//         http status가 200인 경우
//         응답 바로 직전에 대해 작성합니다. 
//         .then() 으로 이어집니다.
//     */
//     return response;
//   },

//   function (error) {
//     /*
//         http status가 200이 아닌 경우
//         응답 에러 처리를 작성합니다.
//         .catch() 으로 이어집니다.    
//     */
//     return Promise.reject(error);
//   }
// );

// // 생성한 인스턴스를 익스포트 합니다.
// export default customAPI;
export {}