import { BASE_URL } from "@/constants";
import { SignupDataForm, SignInDataForm } from "@/types/auth";

async function signUp(dataForm: SignupDataForm) {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error signing up:", err);
    throw new Error("error fetching /auth/register");
  }
}

async function signIn(dataForm: SignInDataForm) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error signing in:", err);
    throw new Error("error fetching /auth/login");
  }
}

export { signUp, signIn };
