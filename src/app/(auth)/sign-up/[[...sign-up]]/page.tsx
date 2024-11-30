"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="login_page flex items-center justify-center">
      <div className="h-dvh w-[500px] flex-col items-center justify-center text-white">
        <div className="m-8 flex items-center justify-center">
          <div className="circle mr-3 h-[28px] w-[28px] rounded-full bg-white text-center"></div>
          <h1 className="text-center text-[28px] font-extrabold">Fresh-eat</h1>
        </div>
        <div className="flex w-full flex-col items-center justify-center py-2 text-[60px] leading-[57px]">
          <h1 className="font-extrabold">Fresh eats</h1>
          <p className="px-20 italic">you too can fetch it</p>
        </div>
        <div className="mx-8 ml-10 mt-8 h-[300px] w-[440px] rounded-bl-[150px] rounded-tr-[150px] bg-greyWhite"></div>
      </div>
      <div className="flex h-dvh w-[866px] items-center justify-center">
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/login"
          forceRedirectUrl="/marketing"
        />
      </div>
    </section>
  );
}
