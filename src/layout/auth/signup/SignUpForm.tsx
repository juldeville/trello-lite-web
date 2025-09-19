import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/services/auth";
import { useState } from "react";
import { SignupDataForm } from "@/types/auth";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [signUpData, setSignUpData] = useState<SignupDataForm>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate, isPending, error, data, reset } = useMutation({
    mutationFn: (payload: SignupDataForm) => signUp(payload),
    onSuccess: (response) => {
      console.log(response);
      router.push("/home");
    },
  });
  return (
    <form
      className="flex flex-col gap-8  2xl:w-1/2 w-full max-w-[600px]"
      onSubmit={(e) => {
        e.preventDefault();
        mutate(signUpData);
      }}
    >
      <fieldset disabled={isPending} className="contents">
        <div className="flex flex-col gap-2 text-sm">
          <label htmlFor="username">Username</label>
          <Input id="username" type="text" placeholder="Enter your username" required className="rounded-lg" onChange={handleChange} name="username" value={signUpData.username} />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <label htmlFor="email">Email</label>
          <Input id="email" type="email" placeholder="Enter your email" required className="rounded-lg" onChange={handleChange} name="email" value={signUpData.email} />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <label htmlFor="password">Password</label>
          <Input id="password" type="password" placeholder="Enter your password" required className="rounded-lg" onChange={handleChange} name="password" value={signUpData.password} />
        </div>
        <div>
          <Button type="submit" className="w-full  mt-6" size="lg">
            Sign Up
          </Button>
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {(error as any)?.message || "Something went wrong."}
            </p>
          )}
        </div>
      </fieldset>
    </form>
  );
}
