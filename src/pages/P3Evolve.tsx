import JoinUs from "../components/JoinUs";

const P3Evolve = () => {
  return (
    <div className=''>
      <div
        style={{ backgroundImage: `url(assets/common/images/p3-evolve.jpeg)` }}
        className={`scrollbar-none h-[150vh] overflow-y-auto w-screen bg-no-repeat bg-cover bg-center flex items-center flex-col px-4 py-10 gap-16`}
      >
        <div className='font-cormorant font-bold text-5xl text-white text-center'>P3 Evolve Program</div>
        {/* 1st point */}
        <div
          style={{
            background: "linear-gradient(180deg, #B8D8D6 0%, rgba(227, 255, 253, 0.9) 100%)",
          }}
          className='w-full lg:w-3/4 flex flex-col justify-center gap-8 px-4 py-8 rounded-3xl lg:px-16'
        >
          <div className='font-cormorant font-bold text-2xl text-text-accent text-center'>What Is P3 Evolve?</div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            P3 Evolve is a holistic wellness initiative for women who are ready to heal, grow, and rise—regardless of
            their financial circumstances. <br /> Offered by P3 Holistic Wellness Inc., this program provides free
            access to high-quality services in personal development, nutrition, fitness, yoga, meditation, and emotional
            healing. P3 Evolve is designed for women who may be struggling with stress, burnout, emotional pain, or
            simply feeling stuck—yet have the desire to move forward with intention, clarity, and care. <br /> At its
            core, P3 Evolve is about transformation: from survival mode to thriving, from overwhelm to balance, from
            isolation to community.
          </div>
        </div>

        {/* 2nd point */}
        <div
          style={{
            background: "linear-gradient(180deg, #B8D8D6 0%, rgba(227, 255, 253, 0.9) 100%)",
          }}
          className='w-full lg:w-3/4 flex flex-col justify-center gap-8 px-4 py-8 rounded-3xl lg:px-16'
        >
          <div className='font-cormorant font-bold text-2xl text-text-accent text-center'>How does it work?</div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            Once approved, each woman becomes a P3 Evolve Participant and gains access to a wide range of holistic
            healing services—completely free, thanks to our Pay-It-Forward model. <br /> Participants may select one
            package at a time from categories like:
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent'>
            <ul className='list-disc pl-5 space-y-2 flex flex-col items-center'>
              <li>Holistic Coaching</li>
              <li>Mindful Nutrition</li>
              <li>Yoga & Movement</li>
              <li>Energy & Meditation Healing</li>
              <li>Emotional Support Groups</li>
            </ul>
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            They also have unlimited access to free community sessions like Yoga Nidra, support circles, and group yoga.
            <br />
            Participation is simple: choose one program, show up fully, complete it, and then move on to the next.
          </div>
        </div>
        {/* 3rd point */}
        <div
          style={{
            background: "linear-gradient(180deg, #B8D8D6 0%, rgba(227, 255, 253, 0.9) 100%)",
          }}
          className='w-full lg:w-3/4 flex flex-col justify-center gap-8 px-4 py-8 rounded-3xl lg:px-16'
        >
          <div className='font-cormorant font-bold text-2xl text-text-accent text-center'>
            Privacy, Inclusivity & Safety
          </div>

          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            All P3 Evolve participation is kept completely private. No one will know who is receiving free services and
            who is not. All participants—paid or funded—engage together as one community, without separation or labels.{" "}
            <br />
            We are committed to creating a judgment-free, shame-free, supportive space where every woman feels seen,
            valued, and safe to grow. Here, you don’t have to prove yourself—you just have to show up.
          </div>
        </div>
        {/* 4th point */}
        <div
          style={{
            background: "linear-gradient(180deg, #B8D8D6 0%, rgba(227, 255, 253, 0.9) 100%)",
          }}
          className='w-full lg:w-3/4 flex flex-col justify-center gap-8 px-4 py-8 rounded-3xl lg:px-16'
        >
          <div className='font-cormorant font-bold text-2xl text-text-accent text-center'>Why is it important?</div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            Because wellness is a human right—not a luxury. <br /> Too many women are forced to choose between their
            healing and their survival. At P3, we believe no woman should be denied the tools to heal simply because she
            can’t afford them. <br /> P3 Evolve offers more than a service—it offers a chance to reset, to rise, and to
            reconnect with your true self in a safe and supported way.
          </div>
        </div>
      </div>
      <JoinUs />
    </div>
  );
};

export default P3Evolve;
