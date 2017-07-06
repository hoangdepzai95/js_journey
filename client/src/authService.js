export function isLoggedIn() {
  return true;
}

export function getAccessToken() {
  return localStorage.getItem('access_token');
}
