import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "@/services/auth";
import { useState } from "react";
import { SignInDataForm } from "@/types/auth";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
export default function SignInForm() {
  const router = useRouter();
  const [signInData, setSignInData] = useState<SignInDataForm>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate, isPending, error, data, reset } = useMutation({
    mutationFn: (payload: SignInDataForm) => signIn(payload),
    onSuccess: (response) => {
      console.log(response);
      router.push("/boards");
    },
  });

  return (
    <form
      className="flex flex-col gap-12 mt-10 2xl:w-1/2 w-full max-w-[600px]"
      onSubmit={(e) => {
        e.preventDefault();
        mutate(signInData);
      }}
    >
      <fieldset disabled={isPending} className="contents">
        <div className="flex flex-col gap-2 text-sm">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="rounded-lg"
            onChange={handleChange}
            name="email"
            value={signInData.email}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            className="rounded-lg"
            onChange={handleChange}
            value={signInData.password}
            name="password"
          />
        </div>
        <div>
          <Button type="submit" className="w-full mt-4" size="lg">
            Sign In
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
