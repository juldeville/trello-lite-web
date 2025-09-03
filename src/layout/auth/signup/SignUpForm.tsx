import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpForm() {
  return (
    <form className="flex flex-col gap-12 mt-10 2xl:w-1/2 w-full max-w-[600px]">
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" placeholder="Enter your email" required className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" placeholder="Enter your password" required className="rounded-lg" />
      </div>
      <div>
        <Button type="submit" className="w-full mt-4" size="lg">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
