import { useEffect, useState } from "react";
import Donate from "./Donate";

const mobileImages = [
  "assets/mobile/images/home-1.png",
  "assets/mobile/images/home-2.png",
  "assets/mobile/images/home-3.png",
  "assets/mobile/images/home-4.png",
  "assets/mobile/images/home-5.png",
];

const desktopImages = [
  "assets/desktop/images/home-1.png",
  "assets/desktop/images/home-2.png",
  "assets/desktop/images/home-3.png",
  "assets/desktop/images/home-4.png",
  "assets/desktop/images/home-5.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const bgImages = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const checkMobile = () => {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className='h-[calc(100vh)] lg:h-auto w-screen flex flex-col relative'>
      <div className='lg:h-[calc(100vh)] flex flex-col'>
        <div className={`h-[65vh] lg:h-4/5 w-screen justify-center flex items-end relative`}>
          {bgImages.map((bgImg, index) => {
            return (
              <img
                key={index}
                src={bgImg}
                alt=''
                className={`absolute h-full transition-opacity duration-700 w-screen object-cover`}
                style={{ opacity: index === currentIndex ? 1 : 0 }}
              />
            );
          })}
          <div className='text-3xl text-white text-center font-cormorant lg:text-8xl lg:mb-20 absolute bottom-4'>
            You are not alone in your journey
          </div>
        </div>
        <div className='flex flex-row justify-center items-center py-5 gap-5 lg:h-1/5 lg:bg-accent lg:gap-10'>
          <img src='assets/common/svgs/logo.svg' alt='logo' className='w-auto h-10 lg:h-24' />
          <img src='assets/common/svgs/logo-name.svg' alt='name' className='w-auto h-11 lg:h-24' />
        </div>
      </div>
      <div className='flex justify-center items-center flex-1 bg-accent lg:bg-transparent lg:py-15'>
        <div className='relative'>
          <div className='font-satisfy text-3xl font-normal text-text-accent text-center flex flex-1 justify-center items-center px-4 lg:flex-initial lg:p-15 lg:font-cormorant lg:text-5xl lg:font-semibold relative'>
            <span className="relative before:content-['“'] after:content-['”'] before:text-[#197772CC] after:text-[#197772CC]">
              Holistic wellness is a fundamental right, not a luxury.
            </span>
          </div>
          <img src='assets/common/svgs/mission-left.svg' alt='logo' className='absolute left-1 -top-4 hidden lg:flex' />
          <img
            src='assets/common/svgs/mission-right.svg'
            alt='logo'
            className='absolute right-1 -bottom-4 hidden lg:flex'
          />
        </div>
      </div>
      <Donate />
    </div>
  );
};

export default Carousel;
