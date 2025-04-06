import { useState } from "react";

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  return (
    <div className='sticky top-0 z-100'>
      <div className='h-16 w-screen bg bg-accent flex justify-between items-center px-4 flex-row lg:flex-row-reverse'>
        <div className='hidden lg:flex lg:justify-end items-center gap-5 z-10'>
          <a className='text-text-accent text-base font-medium cursor-pointer hover:underline underline-offset-4'>
            Resources
          </a>
          <a className='text-text-accent text-base font-medium cursor-pointer hover:underline underline-offset-4'>
            Yoginis
          </a>
          <a
            href='/about'
            className='text-text-accent text-base font-medium cursor-pointer hover:underline underline-offset-4'
          >
            About us
          </a>
          <div className='bg-text-accent text-white text-base px-4 py-2 font-medium rounded-3xl cursor-pointer hover:bg-[#3D7573]'>
            Donate
          </div>
        </div>
        <div className='lg:absolute flex justify-center items-center lg:w-full lg:h-full z-1'>
          <img
            onClick={() => {
              location.replace(location.origin);
            }}
            src='assets/common/svgs/logo.svg'
            alt='logo'
            className='w-8 h-8 cursor-pointer'
          />
        </div>
        <div className='cursor-pointer z-1'>
          <img
            onClick={() => {
              location.replace(location.origin);
            }}
            src='assets/common/svgs/logo-name.svg'
            alt='name'
            className='w-52 h-7 cursor-pointer'
          />
        </div>
        <div className='lg:hidden z-1'>
          <img
            onClick={() => {
              console.info("jjjj");
              setIsMenuHidden(!isMenuHidden);
            }}
            src='assets/common/svgs/menu.svg'
            alt='menu'
            className='h-5 w-5'
          />
        </div>
      </div>
      <div
        className={`bg-white absolute right-0 top-16 min-w-80 rounded-l-xl p-8 transition-all duration-700 transform ${
          isMenuHidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className='flex justify-end items-center mb-8 gap-2'>
          <a className='font-cormorant font-bold text-3xl text-text-accent'>Sign up</a>
          <img src='assets/common/svgs/login.svg' alt='' className='w-8 h-8' />
        </div>
        <div className='flex flex-col gap-6'>
          <div>
            <a className='font-cormorant font-bold text-xl text-text-accent'>Resources</a>
            <img src='assets/common/svgs/login-underline.svg' alt='' />
          </div>
          <div>
            <a className='font-cormorant font-bold text-xl text-text-accent'>Yoginis</a>
            <img src='assets/common/svgs/login-underline.svg' alt='' />
          </div>
          <div>
            <a href='/about' className='font-cormorant font-bold text-xl text-text-accent'>
              About us
            </a>
            <img src='assets/common/svgs/login-underline.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
