const URL = {
  HOME: "/",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  SEARCH: "/search",
  BROWSE: "/browse",
  LATEST: "/latest",
  POPULAR: "/popular",
  FILTER: "/filter",
} as const;

export default URL;
export type URLLink = (typeof URL)[keyof typeof URL];
