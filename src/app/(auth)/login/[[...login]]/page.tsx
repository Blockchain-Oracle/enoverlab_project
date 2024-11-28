'use client';

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (  
    <section className="login_page flex justify-center items-center">
      <div className= 'h-dvh w-[500px] flex-col justify-center items-center text-white'>
        <div className="flex justify-center items-center m-16">
          <div className='circle mr-3 w-[46px] h-[46px] rounded-full bg-white'></div>
          <h1 className="text-[36px] font-extrabold">Fresh-eat</h1>
        </div>
          <div className="bg-greyWhite w-[440px] h-[390px] ml-10 mx-8 rounded-tr-[150px] rounded-bl-[150px]"></div> 
      </div>
      <div className='flex h-dvh w-[866px] justify-center items-center'>
        <SignIn
          path="/login"
          routing="path"
          signUpUrl="/sign-up"
          forceRedirectUrl="/marketing"
        />
      </div>
    </section> 
  );
}
