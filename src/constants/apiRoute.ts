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
  GET_PROPERTIES: "/api/property/index",
  GET_SPECIAL: "/api/property/indexSpecial",
  GET_REGIONS: "/api/region/index",
  GET_PROPERTY_TYPES: "/api/type/index",
  GET_FURNISHES: "/api/furnish/index",
  GET_CLADDINGS: "/api/cladding/index",
  GET_FEATURES: "/api/feature/index",
  ADD_FEATURE: "/api/feature/store",
};
const IMAGE = {
  UPLOAD: "/api/image/store",
};
const USER = {
  GET_PROFILE: "/api/user/showProfile",
  GET_PROPERTIES: "/api/user/indexProperties",
  GET_FAVORITE_PROPERTIES: "/api/user/indexFavoriteProperties",
  ADD_IMAGE: "/api/user/addImage",
};
const API_ROUTE = { CITY, SIGN_UP, SIGN_IN, PROPERTY, IMAGE, USER };
export default API_ROUTE;
