import { useState } from "react";

const JoinUs = () => {
  const [email, setEmail] = useState("");

  return (
    <div className='bg-[#38726F] w-screen py-8 flex justify-center items-center flex-col lg:flex-row lg:gap-12 lg:py-16'>
      <div className='flex justify-center items-center flex-col lg:items-end lg:gap-3'>
        <div className='font-cormorant text-center text-3xl text-white font-medium lg:text-6xl'>
          Become part of our journey
        </div>
        <div className='font-cormorant text-center text-xl text-white font-medium lg:text-2xl'>
          (Start your free healing today)
        </div>
      </div>
      <div className='mt-5 flex gap-4 lg:gap-8 lg:mt-0'>
        <input
          className='border-b border-b-white placeholder-[#C7C7C7] text-center outline-none text-white text-base hover:placeholder-white font-cormorant lg:text-left lg:pr-8'
          placeholder='Your email address'
          type='email'
          name=''
          id=''
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div
          onClick={() => {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
              return;
            }

            setEmail("");

            window
              ?.open(
                "https://p3holisticwellness.practicebetter.io/#/5ff5fa662a9c24108448237b/forms?f=67d78a66394e3987396b0e2e",
                "_blank"
              )
              ?.focus();
          }}
          className='text-white font-cormorant text-base font-bold border px-3 py-1 rounded-sm cursor-pointer hover:text-shadow'
        >
          Sign up
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
