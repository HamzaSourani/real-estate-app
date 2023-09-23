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
  PREDICT: "/predict",
  ADD: "/api/property/store",
  GET_PRICE_RANGE: "/api/property/priceRange",
  GET_AREA_RANGE: "/api/property/areaRange",
  GET_PROPERTY: (propertyId: string | undefined) =>
    `/api/property/${propertyId}/show`,
  UPDATE_PROPERTY: (propertyId: string) => `/api/property/${propertyId}/update`,
  DELETE: (propertyId: string) => `/api/property/${propertyId}/destroy`,
};
const IMAGE = {
  UPLOAD: "/api/image/store",
};
const ORDERS = {
  GET_ALL: "/api/userRequest/index",
  ORDER_SPECIAL_OFFER: (propertyId: string) =>
    `/api/userRequest/property/${propertyId}/orderSpecialOffer`,
};
const USER = {
  GET_PROFILE: "/api/user/showProfile",
  GET_PROPERTIES: "/api/user/indexProperties",
  GET_FAVORITE_PROPERTIES: "/api/user/indexFavoriteProperties",
  ADD_IMAGE: "/api/user/addImage",
  CHANGE_PASSWORD: "/api/user/updatePassword",
  TOGGLE_FAVORITE: (propertyId: string) =>
    `/api/user/property/${propertyId}/toggleFavorites`,
};
const API_ROUTE = { CITY, SIGN_UP, SIGN_IN, PROPERTY, IMAGE, ORDERS, USER };
export default API_ROUTE;
