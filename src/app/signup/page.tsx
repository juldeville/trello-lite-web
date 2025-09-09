"use client";

import SignUpHero from "@/layout/auth/signup/SignUpHero";
import LogoSection from "@/layout/auth/commons/LogoSection";
import SignUpForm from "@/layout/auth/signup/SignUpForm";
import FooterSection from "@/layout/auth/signup/FooterSection";
function SignUpPage() {
  return (
    <div className="flex h-screen p-4 gap-8 box-border">
      <div className="w-1/2 rounded-4xl overflow-hidden">
        <SignUpHero />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-around">
        <LogoSection />
        <div className="w-full p-20 flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl 2xl:text-4xl font-bold">Create your account</h2>
            <p>Create your username, email and password to access your account</p>
          </div>
          <SignUpForm />
        </div>
        <FooterSection />
      </div>
    </div>
  );
}

export default SignUpPage;
