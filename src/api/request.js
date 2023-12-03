// 페이지별로 요청할 URL

//홈페이지

export const homePageRequest = {
  normalPostInfo: 'home/normal-get-main/',
  specificPostInfo: 'home/search-post/',
  likePost: '/post/like-post/',
};

// 마이페이지
export const myPageRequest = {
  // 액세스 토큰의 유형에 따라서 get요청을 선택적으로 보내기 (normal user/ operoator user)?
  normalUserInfo: 'mypage/get-normal-user-info',
  operatorUserInfo: 'mypage/get-operator-user-info/',
  appliedList: 'mypage/get-applied-list/',
  likedPost: 'mypage/get-liked-post/',
  crewsPost: 'mypage/get-crews-posts/',
  allInOne: 'mypage/get-all-mypage-info/',
};
// 모집공고페이지
export const applyPostPageRequest = {
  applyPost: 'apply/post/',
};
export const postDetailRequest = {
  getCrewInfo: '/post/get-crew-info/',
  getPostInfo: '/post/post-content/',
  likedPost: '/post/like-post/',
  getButtonStatus: '/post/click-apply-button/',
};
export const loginRequest = {
  loginPost: 'accounts/login/',
};

export const signInRequest = {
  mailCheck: '/accounts/sogang-mail-check/',
  verify: '/accounts/verification-code-check/',
  register: '/accounts/register/',
};
export const applyAppPageRequest = {
  // Post : 지원서 생성 요청
  applyApplication: '/apply/application/',
};
