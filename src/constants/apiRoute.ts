const CITY = {
  GET_ALL: "/api/city/index",
};
const SIGN_UP = {
  INDEX: "/api/auth/user/register",
  CHECK_USER_NAME: "/api/auth/user/registerCheckUserName",
  CHECK_EMAIL: "/api/auth/user/registerCheckEmail",
};
const SIGN_IN = {
  INDEX: "api/auth/user/login",
};
const PROPERTY = {
  GET_ALL: "/api/property/index",
  GET_SPECIAL: "/api/property/indexSpecial",
};
const API_ROUTE = { CITY, SIGN_UP, SIGN_IN, PROPERTY };
export default API_ROUTE;
