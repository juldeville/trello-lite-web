import { BackgroundLines } from "@/components/ui/background-lines";

function SignInHero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white via-gray-200 to-black dark:from-neutral-900 dark:via-neutral-500 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Welcome back. <br /> Let’s keep building.
      </h2>
    </BackgroundLines>
  );
}
export default SignInHero;
