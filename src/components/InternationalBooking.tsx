const InternationalBooking = () => {
  return (
    <div className='bg-[#38726F] w-screen py-8 flex justify-center items-center flex-col lg:flex-row lg:gap-12 lg:py-12'>
      <div className='font-cormorant text-center text-3xl text-white font-medium lg:text-6xl'>
        International Booking
      </div>
      <div className='mt-5 flex gap-4 lg:gap-8 lg:mt-0'>
        <input
          className='border-b border-b-white placeholder-[#C7C7C7] text-center outline-none text-white text-base hover:placeholder-white font-cormorant lg:text-left lg:pr-8'
          placeholder='Your email address'
          type='email'
          name=''
          id=''
        />
        <a
          href='https://l.bttr.to/9VtE5'
          target='_blank'
          className='text-white font-cormorant text-base font-bold border px-3 py-1 rounded-sm cursor-pointer hover:text-shadow'
        >
          Sign up
        </a>
      </div>
    </div>
  );
};

export default InternationalBooking;
