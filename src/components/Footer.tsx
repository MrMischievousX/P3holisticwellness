const socials = [
  {
    icon: "assets/common/svgs/facebook.svg",
    link: "",
  },
  {
    icon: "assets/common/svgs/instagram.svg",
    link: "",
  },
  {
    icon: "assets/common/svgs/linkedIn.svg",
    link: "",
  },
  {
    icon: "assets/common/svgs/youtube.svg",
    link: "",
  },
];

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-10 py-16 lg:flex-row-reverse lg:justify-between relative lg:px-20">
        <div className="lg:absolute lg:w-full flex justify-center items-center z-0 lg:left-0">
          <img
            src="assets/common/svgs/footer-icon.svg"
            alt="logo"
            className="w-80"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 z-1 lg:pl-24">
          <div className="flex justify-center items-center gap-10">
            {socials.map((social, index) => {
              return (
                <img
                  key={index}
                  src={social.icon}
                  className="cursor-pointer w-10 h-10"
                  onClick={() => {
                    window?.open(social.link, "_blank")?.focus();
                  }}
                  alt=""
                />
              );
            })}
          </div>
          <div className="group inline-flex justify-center items-center flex-col">
            <div className="text-4xl font-cormorant text-text-accent text-center font-bold">
              Donate now
            </div>
            <svg
              width="181"
              height="4"
              viewBox="0 0 181 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-text-accent group-hover:fill-[#C86251]"
                d="M0.493842 3.64515C-1.56695 3.60092 3.43003 0 4.34985 0C16.0836 -1.09825e-10 27.1482 1.63506 38.9311 1.63506C85.8915 1.63506 133.46 0.177951 180.559 2.38974C182.605 2.48583 176.927 3.73997 175.99 3.64515C163.59 2.38933 153.801 3.76939 142.139 3.64515C95.0603 3.1436 47.4156 4.65213 0.493842 3.64515Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 z-1 lg:pr-24">
          <div className="group flex flex-col justify-center items-center gap-1">
            <div className="text-xl font-cormorant text-text-accent text-center font-bold">
              Address
            </div>
            <div className="text-base font-montserrat text-text-accent group-hover:text-[#C86251] text-center font-normal underline underline-offset-4">
              Charlotte, NC 28262, US
            </div>
          </div>
          <div className="group flex flex-col justify-center items-center gap-1">
            <div className="text-xl font-cormorant text-text-accent text-center font-bold">
              Contact us
            </div>
            <div className="text-base font-montserrat text-text-accent group-hover:text-[#C86251] text-center font-normal underline underline-offset-4">
              harriet@p3holistichealth.com
            </div>
          </div>
        </div>
      </div>
      <div className="text-base italic font-cormorant text-center font-bold flex justify-center items-center bg-text-accent text-white py-4">
        Copyright
        <img
          src="assets/common/svgs/copyright.svg"
          className="inline mx-1"
          alt=""
        />
        {new Date().getFullYear()}
      </div>
    </>
  );
};

export default Footer;
