export const REGISTER = 'REGISTER';

export function register(username, password) {
  return {
    type: REGISTER,
    username: username,
    password: password,
  };
}
