import { useState } from "react";

const vidUrl = ["assets/common/video/vid-1.mp4", "assets/common/video/vid-2.mp4", "assets/common/video/vid-3.mp4"];

const testimonials = [
  {
    name: "Leslie Crudup, PA",
    content: `I never expected this journey to impact me so deeply. Reluctant about weight loss and exercise, I showed up for myself—and P3 proved it was worth it. Trusting my instincts, I committed, and now I'm becoming my best self. Huge thanks to Harriet Russell and Dahlia O’Neil!`,
  },
  {
    name: "Melinda King, NC",
    content: `P3 has been a great guide in my personal life, offering insights that validate my emotions. While I prioritize physical wellness, I’ve neglected my emotional well-being. I'm grateful for this journey with P3 and look forward to continuing it.`,
  },
  {
    name: "Alicia Lawrence, CT",
    content: `I have been working with Harriet for about a year and a half! She has been such a great coach! She keeps me focused and also encourages me along the way. Her approach is realistic and most importantly have had great health gains with her help!`,
  },
  {
    name: "Keeshma Richardson, NC",
    content: `Coach Harriet’s holistic approach transformed my health and mindset. Her 90-day program helped me break harmful habits and reshape core beliefs. I deeply appreciate her genuine care and empowering guidance—lessons that will stay with me forever.`,
  },
];

const Testimonials = () => {
  const [currentVidIndex, setCurrentVidIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  return (
    <div className='w-screen min-h-screen bg-accent py-10'>
      <div className='font-cormorant text-3xl font-bold text-center text-text-accent'>Testimonials</div>

      <div className='flex justify-center items-center mt-10 gap-7 lg:gap-15'>
        <img
          onClick={() => {
            if (currentVidIndex <= 0) return;
            setCurrentVidIndex(currentVidIndex - 1);
          }}
          src='assets/common/svgs/arrow-left.svg'
          alt=''
          className='w-10 h-10 cursor-pointer'
          style={{
            visibility: currentVidIndex <= 0 ? "hidden" : "initial",
          }}
        />

        <div className='w-80 h-80 bg-white rounded-2xl relative overflow-hidden p-1 lg:w-[50vw] lg:h-[60vh]'>
          <video
            key={currentVidIndex}
            controls
            playsInline
            preload='metadata'
            className='w-full h-full rounded-2xl object-cover lg:object-contain transition-opacity duration-700'
          >
            <source src={vidUrl[currentVidIndex]} type='video/mp4' />
          </video>
        </div>

        <img
          onClick={() => {
            if (currentVidIndex >= vidUrl.length - 1) return;
            setCurrentVidIndex(currentVidIndex + 1);
          }}
          src='assets/common/svgs/arrow-right.svg'
          alt=''
          className='w-10 h-10 cursor-pointer'
          style={{
            visibility: currentVidIndex >= vidUrl.length - 1 ? "hidden" : "initial",
          }}
        />
      </div>

      <div className='flex justify-center items-center mt-10 gap-7 mb-10'>
        <img
          onClick={() => {
            if (currentTestimonialIndex <= 0) {
              return;
            }
            setCurrentTestimonialIndex(currentTestimonialIndex - 1);
          }}
          src='assets/common/svgs/arrow-left.svg'
          alt=''
          className='w-10 h-10 cursor-pointer'
          style={{
            visibility: currentTestimonialIndex <= 0 ? "hidden" : "initial",
          }}
        />
        <div className='w-80 h-[410px] bg-white rounded-2xl relative overflow-hidden lg:w-[35vw] lg:h-[60vh] shadow-custom'>
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className='w-full h-full absolute flex justify-evenly items-center flex-col p-2 transition-opacity duration-700 lg:p-8'
                style={{ opacity: currentTestimonialIndex === index ? 1 : 0 }}
              >
                <div className='font-montserrat text-base font-normal text-center text-[#006863] lg:text-2xl'>
                  {testimonial.content}
                </div>
                <div className='font-montserrat text-base font-normal text-center text-[#006863] lg:text-2xl'>
                  {testimonial.name}
                </div>
              </div>
            );
          })}
        </div>
        <img
          onClick={() => {
            if (currentTestimonialIndex >= testimonials.length - 1) {
              return;
            }
            setCurrentTestimonialIndex(currentTestimonialIndex + 1);
          }}
          src='assets/common/svgs/arrow-right.svg'
          alt=''
          className='w-10 h-10 cursor-pointer'
          style={{
            visibility: currentTestimonialIndex >= testimonials.length - 1 ? "hidden" : "initial",
          }}
        />
      </div>
    </div>
  );
};

export default Testimonials;
