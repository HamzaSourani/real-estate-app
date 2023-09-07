const AUTH = {
  INDEX: "auth",
  SIGN_UP: "sign-up",
  SIGN_IN: "sign-in",
};
const MAIN_PAGES = {
  HOME: "",
  VILLAS: "properties/villa",
  CHALETS: "properties/chalet",
  HOUSES: "properties/house",
  PROPERTIES: "properties",
  PROFILE: "profile",
  ADD_PROPERTY: "add-property",
  SHOW_PROPERTY: (propertyId: string) =>
    `properties/property/${propertyId}/show`,
  UPDATE_PROPERTY: (propertyId: string) => `property/${propertyId}/update`,
};
const NAVIGATION = {
  AUTH,
  MAIN_PAGES,
};
export default NAVIGATION;
