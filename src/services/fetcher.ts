import { getToken } from "./tokenStore";
import { API } from "../constants";

export async function apiFetch<T = any>(path: string, options: { method?: string; body?: any; auth?: boolean } = {}): Promise<T> {
  const { method = "GET", body, auth = true } = options;

  const headers: Record<string, string> = { "Content-Type": "application/json" };

  const token = getToken();
  if (auth && token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const init: RequestInit = {
    method,
    headers,
    credentials: "include",
  };

  if (method !== "GET" && body !== undefined) {
    init.body = JSON.stringify(body);
  }

  const response = await fetch(`${API}${path}`, init);

  if (!response.ok) {
    let data: any = null;
    try {
      data = await response.json();
    } catch {}
    const error: any = new Error(data?.message || response.statusText);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  try {
    return (await response.json()) as T;
  } catch {
    return null as T;
  }
}
