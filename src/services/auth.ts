import { SignupDataForm, SignInDataForm } from "@/types/auth";
import { apiFetch } from "./fetcher";
import { clearToken, setToken } from "./tokenStore";

async function signUp(dataForm: SignupDataForm) {
  const data = await apiFetch("/auth/register", {
    method: "POST",
    body: dataForm,
    auth: false,
  });

  if (data?.accessToken) {
    setToken(data.accessToken);
  }

  console.log("signUp data:", data);
  return data;
}

async function signIn(dataForm: SignInDataForm) {
  const data = await apiFetch("/auth/login", {
    method: "POST",
    body: dataForm,
    auth: false,
  });
  if (data?.accessToken) {
    setToken(data.accessToken);
  }
  return data;
}

async function getCurrentUser() {
  const data = await apiFetch("/auth/current");
  return data;
}

async function logout() {
  await apiFetch("/auth/logout", { method: "POST", auth: false });
  clearToken();
}
export { signUp, signIn, getCurrentUser, logout };
