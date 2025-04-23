const missions = [
  "Our mission is to bring holistic wellness to women who need it the most but cannot afford it. ",
  "We prioritize women facing barriers, ensuring unrestricted access to holistic health services so every woman can rise, restore, and reclaim her life—no matter her financial circumstances.",
  "By working closely with community partners, donors, and volunteers, we ensure that holistic wellness is no longer a luxury—but a right for all.",
];

const Mission = () => {
  return (
    <div className='lg:bg-accent w-screen flex flex-col lg:flex-row justify-center items-end lg:px-15 lg:py-20 lg:gap-40'>
      <div className='lg:mr-8'>
        <div className='hidden lg:block font-cormorant font-bold text-5xl/normal text-white w-14 mb-4'>
          Lets Thrive Together
        </div>
        <div className='border-black flex items-center justify-center flex-col lg:flex-row lg:border lg:h-[296px] lg:gap-8 lg:rounded-3xl lg:w-[656px]'>
          <img
            src='assets/mobile/images/harmony.png'
            alt=''
            className='w-full h-auto lg:w-64 lg:h-64 lg:hidden object-cover'
          />
          <img
            src='assets/desktop/images/harmony.png'
            alt=''
            className='w-full h-auto lg:w-[296px] lg:h-[296px] hidden lg:block object-cover'
          />
          <div className='flex flex-col items-center lg:items-start'>
            <div className='font-cormorant font-semibold text-3xl text-text-accent text-center lg:text-left lg:text-white'>
              Message from our founder
            </div>
            <div className='text-base font-montserrat text-text-accent mx-8 text-center font-normal my-4 lg:text-left lg:mx-0 lg:text-white'>
              As your Integrated Wellness Coach, I will help you unlock inner strength and create a life of freedom and
              purpose.
            </div>
            <div className='text-base font-montserrat text-text-accent text-center font-semibold lg:text-white'>
              Coach Harmony
            </div>
            <div className='text-base font-montserrat text-text-accent text-center font-semibold mt-1 lg:text-white'>
              Founder, P3 Holistic Wellness
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <div className='rounded-full px-24 py-2 my-5 flex justify-center items-center bg-accent font-cormorant text-text-accent text-3xl font-bold lg:bg-white'>
          Our Mission
        </div>
        <div className='w-auto mx-2 mb-8'>
          {missions.map((mission, index) => {
            return (
              <div className='flex gap-3 my-3 mx-1' key={index}>
                <img src='assets/common/svgs/mission.svg' alt='menu' className='h-8 w-8' />
                <div className='font-montserrat text-xl text-text-accent font-medium lg:text-white'>{mission}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mission;
