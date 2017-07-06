export function isLoggedIn() {
  return false;
}

export function getAccessToken() {
  return localStorage.getItem('access_token');
}
