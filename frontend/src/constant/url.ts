const URL = {
  home: "/",
} as const;

export default URL;
export type URLLink = typeof URL[keyof typeof URL];
