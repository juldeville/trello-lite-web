type Listener = (token: string | null) => void;

let accessToken: string | null = null;
const listeners = new Set<Listener>();

export const getToken = () => accessToken;

export const setToken = (token: string | null) => {
  accessToken = token;
  listeners.forEach((listener) => listener(token));
};

export const onTokenChange = (fn: Listener) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const clearToken = () => setToken(null);
