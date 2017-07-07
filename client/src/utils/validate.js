export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
export function validateUserName(name) {
  const re = /^([a-zA-Z0-9.]+@){0,1}([a-zA-Z0-9.])+$/;
  return re.test(name);
}
export function validatePassword(password) {
  return password.length > 0 && password.length < 12;
}
