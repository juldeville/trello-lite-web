"use client";

import LogoSection from "@/layout/auth/commons/LogoSection";
import SignInForm from "@/layout/auth/signin/SignInForrm";
import FooterSection from "@/layout/auth/signin/FooterSection";
import SignInHero from "@/layout/auth/signin/SignInHero";

function SignInPage() {
  return (
    <div className="flex h-screen p-4 gap-8 box-border">
      <div className="w-1/2 rounded-4xl overflow-hidden bg-amber-200">
        <SignInHero />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-around">
        <LogoSection />
        <div className="w-full p-20 flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-5xl font-bold">Log in to your account</h2>
            <p>Enter your email and password to access your account</p>
          </div>
          <SignInForm />
        </div>
        <FooterSection />
      </div>
    </div>
  );
}

export default SignInPage;
