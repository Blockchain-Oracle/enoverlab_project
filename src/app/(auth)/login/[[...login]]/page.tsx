"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <section className="login_page grid grid-cols-2 items-center justify-center">
      <div className="col-span-1 hidden h-dvh flex-col items-center justify-center text-white lg:flex">
        <div className="m-16 flex items-center justify-center">
          <div className="circle mr-3 h-[46px] w-[46px] rounded-full bg-white"></div>
          <h1 className="text-[36px] font-extrabold">Log in to Fresh Eats</h1>
        </div>
        <div className="mx-8 ml-10 h-[390px] w-[80%] rounded-bl-[150px] rounded-tr-[150px] bg-greyWhite"></div>
      </div>
      <div className="col-span-2 flex h-dvh w-auto items-center justify-self-center lg:col-span-1 lg:w-[100%]">
        <SignIn
          path="/login"
          routing="path"
          signUpUrl="/sign-up"
          forceRedirectUrl="/marketing"
          appearance={{
            elements: {
              rootBox: "bg-white rounded-[20px] md:rounded-[0]",
              cardBox: "p-[2rem]",
            },
          }}
        />
      </div>
    </section>
  );
}
