import axios from 'axios';
// baseURL 설정함
// 요청하는 방법은 컴포넌트에서 instance를 import해서 이런식으로 사용했음
// const { data } = await instance.get(`${myPageRequest.allInOne}`, {
//   headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwMzI2NTI0LCJpYXQiOjE3MDAzMjI5MjQsImp0aSI6ImNiZWQ5ZmFlNTZiZjRiYTBiZDJhODE1MDJkOGRiZTU0IiwidXNlcl9pZCI6M30.U4LuvBwbigFJYkwP3sqIxRd20TeFnHpwIlWqGCZz1TE',
//   },
// });
axios.defaults.withCredentials = true;

export const instance = axios.create({
  baseURL:
    'https://port-0-crews-server-pulish-3szcb0g2blpb288gj.sel5.cloudtype.app/',
});
