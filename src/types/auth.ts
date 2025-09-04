interface SignInDataForm {
  email: string;
  password: string;
}

interface SignupDataForm extends SignInDataForm {
  username: string;
}
export type { SignInDataForm, SignupDataForm };
