import Cookies from "js-cookie";
export function useSetCookie(name, token) {
  Cookies.set(name, token);
}
export function useGetCookie(name) {
  return Cookies.get(name);
}

export function useRemoveCookie(name) {
  Cookies.remove(name);
}
