'use client';

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="login_page flex justify-center items-center">
      <div className= 'h-dvh w-[500px] flex-col justify-center items-center text-white'>
        <div className="flex justify-center items-center m-8">
          <div className='circle mr-3 w-[28px] h-[28px] rounded-full text-center bg-white'></div>
          <h1 className="text-[28px] font-extrabold text-center">Fresh-eat</h1>
        </div>
        <div className="flex text-[60px] py-2 flex-col justify-center items-center w-full leading-[57px]">
          <h1 className='font-extrabold'>Fresh eats</h1>
          <p className='px-20 italic'>you too can fetch it</p>
        </div>
        <div className="bg-greyWhite w-[440px] mt-8 h-[300px] ml-10 mx-8 rounded-tr-[150px] rounded-bl-[150px]"></div> 
      </div>
      <div className='flex h-dvh w-[866px] justify-center items-center'>
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
