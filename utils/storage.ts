import UniversalCookie from "universal-cookie";

const cookie = new UniversalCookie();

const COOKIE_EXPIRATION_DAYS = 7;

export const setAccessTokenCookie = (accessToken: string) => {
  cookie.set("access_token", JSON.stringify(accessToken), {
    path: "/",
    expires: new Date(
      new Date().getTime() + COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000
    ),
    secure: process.env.NODE_ENV === "production", // Enable secure flag in production
    httpOnly: false,
  });
};

export const getAccessTokenFromCookie = () => {
  return cookie.get("access_token");
};

export const removeAccessTokenCookie = () => {
  cookie.remove("access_token", { path: "/" });
};

export const setUserCookie = (user:any) => {
    cookie.set("user", JSON.stringify(user), {
        path: "/",
        expires: new Date(
          new Date().getTime() + COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000
        ),
        secure: process.env.NODE_ENV === "production", // Enable secure flag in production
        httpOnly: false,
      });
}

export const getUserFromCookie = () => {
    return cookie.get("user");
  };
