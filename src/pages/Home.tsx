import { useNavigate } from "react-router";
import Carousel from "../components/Carousel";
import JoinUs from "../components/JoinUs";
import Mission from "../components/Mission";
import Testimonials from "../components/Testimonials";
import Thrive from "../components/Thrive";
import InternationalBooking from "../components/InternationalBooking";

const services = [
  {
    title: "Holistic Balance Coaching",
    desc: `Transformational Coaching – One-on-One Support.
Vision Board Workshop (Manifestation & Goal-Setting for Personal Growth)`,
    img: "assets/common/images/service-1.png",
    imp1: "https://l.bttr.to/eUhrQ",
    option1: "Discover",
    imp2: "https://l.bttr.to/yfjnd",
    option2: "Book",
  },
  {
    title: "Holistic Nutrition & Wellness",
    desc: `Holistic Eating Program provides balanced Nutrition & Mindful Eating Guidance`,
    img: "assets/common/images/service-2.png",
    imp1: "https://l.bttr.to/lJRCc",
    option1: "Discover",
    imp2: "https://l.bttr.to/AlaTA",
    option2: "Book",
  },
  {
    title: "Yoga & Movement Therapy",
    desc: `• Individual Yoga Sessions (Personalized Yoga for Strength & Healing)\n• Group Yoga – Sadhana Chakra Yog (Holistic Yoga for Mind, Body & Spirit)`,
    img: "assets/common/images/service-3.png",
    imp1: "https://l.bttr.to/kQWha",
    option1: "Book",
  },
  {
    title: "Meditation & Healing",
    desc: `• 21-Day Self-Healing Meditation (Daily Guided Meditation for Inner Balance)\n• Golden Ball Meditation (Energy Protection & Spiritual Alignment)`,
    img: "assets/common/images/service-4.png",
    imp1: "https://l.bttr.to/UU93l",
    option1: "Book",
  },
  {
    title: "Free Community Healing Space",
    desc: `• Her Healing Haven\n• Yog Nidra Meditation\n• Sadhana Chakra Yoga\n(Support, Meditation & Yoga for Women in Need).`,
    img: "assets/common/images/service-5.png",
    imp1: "https://l.bttr.to/HyIxQ",
    option1: "Free Services",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const steps = [
    {
      imgUrl: "assets/common/images/step-1.png",
      hoverImgUrl: "assets/common/images/step-1-hover.png",
      title: "Step 1:",
      subTitle: "Pay-It-Forward",
      desc: "There are two options: choose the standard rate to sponsor one woman’s free session, or select the elevated rate to support two women on their healing journey.",
      link: "Choose Your Impact",
      onclick: () => {
        navigate("/pay-it-forward");
      },
    },
    {
      imgUrl: "assets/common/images/step-2.png",
      hoverImgUrl: "assets/common/images/step-2-hover.png",
      title: "Step 2:",
      subTitle: "P3 Evolve Program",
      desc: "P3 Evolve is a free holistic wellness program empowering women to heal, grow, and thrive through personal development, nutrition, yoga, meditation, and emotional healing.",
      link: "P3 Evolve Program",
      onclick: () => {
        navigate("/p3-evolve");
      },
    },
    {
      imgUrl: "assets/common/images/step-3.png",
      hoverImgUrl: "assets/common/images/step-3-hover.png",
      title: "Step 3:",
      subTitle: "Engage",
      desc: `Join our "Step Into Your Personal Power" Facebook community to connect with like-minded women on holistic health and growth. Gain expert tips, live sessions, and support in a space designed for mind, body, and spirit transformation.`,
      link: "Connect with our community",
      url: "https://www.facebook.com/share/g/194jdT6Dfc/",
    },
  ];

  return (
    <div className='w-screen overflow-x-hidden'>
      <Carousel />
      <div className='flex justify-center items-center flex-col min-h-screen'>
        <Thrive />
        <Mission />
        <JoinUs />
      </div>
      <iframe
        className='w-screen h-[calc(100vh-64px)] mt-20 '
        src='https://www.youtube.com/embed/2OYar8OHEOU?si=uHcyTq_IZ3qHbs51&autoplay=1&mute=1'
        title='Beautiful Nature Scenery Relaxing Peaceful Soothing Music | Bird Sounds, Water Sound, Sleep Music'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      />
      <div className='pt-12 min-h-[calc(100vh-64px)] max-h-fit lg:min-h-[calc(100vh-64px)]'>
        <div className='font-cormorant text-3xl text-center font-bold text-text-accent my-5'>
          We are here to help you in 3 steps
        </div>
        <div className='flex flex-col justify-center lg:flex-row'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='relative w-[100vw] h-[100vw] lg:h-[33.33vw] lg:w-[33.33vw] p-5 group overflow-hidden'
            >
              <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 opacity-100'
                style={{ backgroundImage: `url(${step.imgUrl})` }}
              />

              <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 opacity-0 group-hover:opacity-100'
                style={{ backgroundImage: `url(${step.hoverImgUrl})` }}
              />

              <div className='relative flex w-full h-full flex-col items-center justify-center lg:items-start lg:justify-end p-2 border-[10px] border-white group-hover:items-center group-hover:justify-center'>
                <div className='flex flex-col lg:hidden group-hover:flex group-hover:flex-col transition-opacity items-center'>
                  <div className='font-cormorant text-2xl text-center font-bold text-white'>{step.title}</div>
                  <div className='font-cormorant text-2xl text-center font-bold text-white mt-1'>{step.subTitle}</div>
                  <div className='font-montserrat text-lg text-center font-normal text-white mt-1'>{step.desc}</div>
                  {step.onclick ? (
                    <div
                      onClick={step.onclick}
                      className='font-montserrat text-lg text-center font-normal text-white mt-1 underline cursor-pointer underline-offset-2'
                    >
                      {step.link}
                    </div>
                  ) : (
                    <a
                      href={step.url}
                      target={step.url.includes("#") ? "_self" : "_blank"}
                      rel='noopener noreferrer'
                      className='font-montserrat text-lg text-center font-normal text-white mt-1 underline cursor-pointer underline-offset-2'
                    >
                      {step.link}
                    </a>
                  )}
                </div>
                <div className='hidden lg:flex flex-col items-start ml-5 mb-5 group-hover:hidden'>
                  <div className='font-cormorant text-2xl text-center font-bold text-white'>{step.title}</div>
                  <div className='font-cormorant text-2xl text-center font-bold text-white mt-1'>{step.subTitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-accent py-6 min-h-[calc(100vh-64px)] max-h-fit lg:min-h-[calc(100vh-64px)] flex flex-col justify-evenly'>
        <div className='font-cormorant text-3xl text-center font-bold text-text-accent pt-4 pb-7'>
          Pay-It-Forward Services
        </div>
        <div className='flex gap-8 overflow-x-auto px-6 py-2 scrollbar-none scrollbar-thumb-gray-400 scroll-smooth'>
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='border-1 border-text-accent bg-white flex-shrink-0 w-80 h-[590px] rounded-t-full flex justify-between items-center flex-col p-4 lg:border-2 gap-3'
              >
                <img src={service.img} alt='' className='hover:scale-105 w-full h-80' />
                <div className='flex flex-col justify-between items-center w-full h-full'>
                  <div className='font-cormorant text-2xl text-center font-bold text-text-accent'>{service.title}</div>
                  <div className='font-montserrat text-base text-center font-normal text-text-accent whitespace-pre-line'>
                    {service.desc}
                  </div>
                  <div className='flex w-full justify-evenly items-center'>
                    {service.imp1 && (
                      <div
                        onClick={() => {
                          window?.open(service.imp1, "_blank");
                        }}
                        className='text-text-accent font-bold text-xl text-center font-cormorant bg-accent px-3 py-1 rounded-2xl cursor-pointer'
                      >
                        {service.option1}
                      </div>
                    )}
                    {service.imp2 && (
                      <div
                        onClick={() => {
                          window?.open(service.imp2, "_blank");
                        }}
                        className='text-text-accent font-bold text-xl text-center font-cormorant bg-accent px-3 py-1 rounded-2xl cursor-pointer'
                      >
                        {service.option2}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <InternationalBooking />
      <div className='font-cormorant text-3xl font-semibold text-text-accent text-center bg-white my-10'></div>
      <div className='flex justify-center items-center flex-1 lg:py-15'>
        <div className='font-satisfy text-3xl font-normal text-text-accent text-center flex flex-1 justify-center items-center px-4 lg:flex-initial lg:p-16 lg:font-cormorant lg:text-5xl lg:font-semibold relative'>
          <span className='text-[#197772CC]'>“</span>
          Your Healing, Their Healing
          <span className='text-[#197772CC]'>”</span>
          <img src='assets/common/svgs/healing-left.svg' alt='logo' className='absolute left-1 top-1 hidden lg:flex' />
          <img
            src='assets/common/svgs/healing-right.svg'
            alt='logo'
            className='absolute right-1 bottom-1 hidden lg:flex'
          />
        </div>
      </div>
      <div className='mt-8'>
        <JoinUs />
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
