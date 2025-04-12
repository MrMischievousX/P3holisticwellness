import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ display: scrolled ? "initial" : "none" }}
      className={`sticky top-0 z-100 transition-all duration-500`}
    >
      <div className='h-16 w-screen bg bg-accent flex justify-between items-center px-4 flex-row lg:flex-row-reverse'>
        <div className='hidden lg:flex lg:justify-end items-center gap-5 z-10'>
          <a
            target='_blank'
            href='https://l.bttr.to/K5QtQ'
            className='text-text-accent text-center text-base font-medium cursor-pointer group w-20'
          >
            Resources
            <svg
              className='w-20 h-[4px] hidden group-hover:block'
              viewBox='0 0 181 4'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
            >
              <path
                className='fill-text-accent group-hover:fill-[#C86251]'
                d='M0.493842 3.64515C-1.56695 3.60092 3.43003 0 4.34985 0C16.0836 -1.09825e-10 27.1482 1.63506 38.9311 1.63506C85.8915 1.63506 133.46 0.177951 180.559 2.38974C182.605 2.48583 176.927 3.73997 175.99 3.64515C163.59 2.38933 153.801 3.76939 142.139 3.64515C95.0603 3.1436 47.4156 4.65213 0.493842 3.64515Z'
              />
            </svg>
          </a>

          <a
            target='_blank'
            href='http://meetourstaffvolunteers.godaddysites.com'
            className='text-text-accent text-center text-base font-medium cursor-pointer group w-20'
          >
            Yoginis
            <svg
              className='w-20 h-[4px] hidden group-hover:block'
              viewBox='0 0 181 4'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
            >
              <path
                className='fill-text-accent group-hover:fill-[#C86251]'
                d='M0.493842 3.64515C-1.56695 3.60092 3.43003 0 4.34985 0C16.0836 -1.09825e-10 27.1482 1.63506 38.9311 1.63506C85.8915 1.63506 133.46 0.177951 180.559 2.38974C182.605 2.48583 176.927 3.73997 175.99 3.64515C163.59 2.38933 153.801 3.76939 142.139 3.64515C95.0603 3.1436 47.4156 4.65213 0.493842 3.64515Z'
              />
            </svg>
          </a>

          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/about", { replace: true });
            }}
            className='text-text-accent text-center text-base font-medium cursor-pointer group w-20'
          >
            About us
            <svg
              className='w-20 h-[4px] hidden group-hover:block'
              viewBox='0 0 181 4'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
            >
              <path
                className='fill-text-accent group-hover:fill-[#C86251]'
                d='M0.493842 3.64515C-1.56695 3.60092 3.43003 0 4.34985 0C16.0836 -1.09825e-10 27.1482 1.63506 38.9311 1.63506C85.8915 1.63506 133.46 0.177951 180.559 2.38974C182.605 2.48583 176.927 3.73997 175.99 3.64515C163.59 2.38933 153.801 3.76939 142.139 3.64515C95.0603 3.1436 47.4156 4.65213 0.493842 3.64515Z'
              />
            </svg>
          </div>

          <a
            href='https://giv.li/l4dozl'
            target='_blank'
            className='bg-text-accent text-white text-base px-4 py-2 font-medium rounded-3xl cursor-pointer hover:bg-[#3D7573]'
          >
            Donate
          </a>
        </div>
        <div className='lg:absolute flex justify-center items-center lg:w-full lg:h-full z-1'>
          <img
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMenuHidden(true);
              navigate("/", { replace: true });
            }}
            src='assets/common/svgs/logo.svg'
            alt='logo'
            className='w-8 h-8 cursor-pointer'
          />
        </div>
        <div className='cursor-pointer z-1'>
          <img
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMenuHidden(true);
              navigate("/", { replace: true });
            }}
            src='assets/common/svgs/logo-name.svg'
            alt='name'
            className='w-52 h-7 cursor-pointer'
          />
        </div>
        <div className='lg:hidden z-1'>
          <img
            onClick={() => {
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
          <a
            href='https://giv.li/l4dozl'
            target='_blank'
            className='font-cormorant font-bold text-3xl text-text-accent'
          >
            Donate
          </a>
          {/* <img src='assets/common/svgs/login.svg' alt='' className='w-8 h-8' /> */}
        </div>
        <div className='flex flex-col gap-6'>
          <div>
            <div
              onClick={() => {
                setIsMenuHidden(true);
                window?.open("https://l.bttr.to/K5QtQ", "_blank")?.focus();
              }}
              className='font-cormorant font-bold text-xl text-text-accent cursor-pointer'
            >
              Resources
            </div>
            <img src='assets/common/svgs/login-underline.svg' alt='' />
          </div>
          <div>
            <div
              onClick={() => {
                setIsMenuHidden(true);
                window?.open("http://meetourstaffvolunteers.godaddysites.com", "_blank")?.focus();
              }}
              className='font-cormorant font-bold text-xl text-text-accent cursor-pointer'
            >
              Yoginis
            </div>
            <img src='assets/common/svgs/login-underline.svg' alt='' />
          </div>
          <div>
            <div
              onClick={() => {
                setIsMenuHidden(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/about", { replace: true });
              }}
              className='font-cormorant font-bold text-xl text-text-accent'
            >
              About us
            </div>
            <img src='assets/common/svgs/login-underline.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
