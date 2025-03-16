const URL = {
  HOME: "/",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  SEARCH: "/search",
  BROWSE: "/browse",
} as const;

export default URL;
export type URLLink = (typeof URL)[keyof typeof URL];
