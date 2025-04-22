import JoinUs from "../components/JoinUs";

const PayItForward = () => {
  return (
    <div className=''>
      <div
        style={{ backgroundImage: `url(assets/common/images/pay-it-forward.jpeg)` }}
        className={`scrollbar-none h-[150vh] overflow-y-auto w-screen bg-no-repeat bg-cover bg-center flex items-center flex-col px-4 py-10 gap-16`}
      >
        <div className='font-cormorant font-bold text-5xl text-white text-center'>Pay-It-Forward Program</div>

        {/* 1st point */}
        <div
          style={{
            background: "linear-gradient(180deg, #B8D8D6 0%, rgba(227, 255, 253, 0.9) 100%)",
          }}
          className='w-full lg:w-3/4 flex flex-col justify-center gap-8 px-4 py-8 rounded-3xl lg:px-16'
        >
          <div className='font-cormorant font-bold text-2xl text-text-accent text-center'>
            P3 Pay-It-Forward Initiative: Healing One. Empowering Many.
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            At P3 Holistic Wellness, we believe that when a woman heals, she becomes a catalyst for transformation far
            beyond herself. That’s why we created the Pay-It-Forward Initiative—a powerful model where your healing
            fuels someone else’s. <br /> This initiative goes far beyond covering the cost of a single class or session.
            It opens the door to opportunity, dignity, self-worth, and purpose for women who need it most. It’s how we
            create a wellness movement that uplifts not just individuals—but communities, families, and generations.
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
            Every time someone invests in their own wellness through P3, they fund services for women who cannot afford
            them. But this initiative goes deeper than covering one session—it’s about building a cycle of empowerment,
            leadership, and legacy. Your contribution may provide:
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-start'>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Free holistic wellness programs for women in need</li>
              <li>Certifications in yoga, coaching, Reiki, or nutrition for women ready to lead</li>
              <li>Access to wellness retreats, trainings, and healing spaces</li>
              <li>Ongoing support through emotional wellness circles & spiritual development</li>
              <li>Opportunities for women to give back, mentor, or sponsor future participants</li>
            </ul>
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            This isn’t charity. <br /> This is a cycle of healing that sustains itself—through generosity, sisterhood,
            and community.
          </div>
        </div>

        {/* 3rd point */}
        <div
          style={{
            background: "linear-gradient(180deg, #B8D8D6 0%, rgba(227, 255, 253, 0.9) 100%)",
          }}
          className='w-full lg:w-3/4 flex flex-col justify-center gap-8 px-4 py-8 rounded-3xl lg:px-16'
        >
          <div className='font-cormorant font-bold text-2xl text-text-accent text-center'>Ways to Pay-It-Forward</div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-start'>
            <div>1. Book with Impact</div>
            <div>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Impact 1: Your standard session covers your service + one free program for a woman in need.</li>
                <li>Impact 2: Choose the higher tier and fund access for two women to join our programs.</li>
              </ul>
            </div>
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-start'>
            <div>2. Donate Directly</div>
            <div>
              Make a one-time or monthly donation. Every dollar goes toward funding holistic services, training
              scholarships, and support groups that change lives.
            </div>
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-start'>
            <div>3. Collaborate with P3</div>
            <div>We welcome partnerships with:</div>
            <div>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Holistic providers</li>
                <li>Coaches & trainers</li>
                <li>Community organizations</li>
              </ul>
            </div>
            <div>
              Women-led businessesTogether, we can create shared programs, co-hosted events, and sponsored initiatives
              that expand our collective impact
            </div>
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            Every session. Every dollar. Every act of giving becomes a doorway to transformation.
          </div>
        </div>

        {/* 4th point */}
        <div
          style={{
            background: "linear-gradient(180deg, #B8D8D6 0%, rgba(227, 255, 253, 0.9) 100%)",
          }}
          className='w-full lg:w-3/4 flex flex-col justify-center gap-8 px-4 py-8 rounded-3xl lg:px-16'
        >
          <div className='font-cormorant font-bold text-2xl text-text-accent text-center'>The Ripple Effect</div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            The women we serve don’t just receive support—they rise, rebuild, and reach back. They go on to teach,
            guide, and sponsor others through the very system that lifted them. This is a model of empowerment in
            motion—where the healed become the healers. The women who receive access to these services don’t stop at
            healing themselves. Many go on to:
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-start'>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Serve their communities as wellness leaders</li>
              <li> Mentor the next generation of P3 Evolve Participants</li>
              <li> Sponsor others through their own Pay-It-Forward contributions</li>
            </ul>
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            This is healing in motion—a regenerative model that’s circular, sustainable, and rooted in compassion.
          </div>
        </div>

        {/* 5th point */}
        <div
          style={{
            background: "linear-gradient(180deg, #B8D8D6 0%, rgba(227, 255, 253, 0.9) 100%)",
          }}
          className='w-full lg:w-3/4 flex flex-col justify-center gap-8 px-4 py-8 rounded-3xl lg:px-16'
        >
          <div className='font-cormorant font-bold text-2xl text-text-accent text-center'>Why it matters?</div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            Wellness should be a right, not a luxury, and every woman deserves access to it regardless of income. When
            women are empowered, they uplift those around them, becoming catalysts for change in their families and
            communities. Each small act of self-care can spark a ripple effect, transforming lives one step at a time.
            True well-being must be accessible to all, because women are the heart of strong families and the backbone
            of thriving communities. When one woman heals, her strength and resilience radiate outward, nurturing and
            lifting everyone in her circle.
          </div>
        </div>

        {/* 6th point */}
        <div
          style={{
            background: "linear-gradient(180deg, #B8D8D6 0%, rgba(227, 255, 253, 0.9) 100%)",
          }}
          className='w-full lg:w-3/4 flex flex-col justify-center gap-8 px-4 py-8 rounded-3xl lg:px-16'
        >
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            In Pay It Forward, you don’t just change one life—you start a ripple that changes the world. Choose Impact 1
            or Impact 2 today and become part of a growing legacy of collective care, shared healing, and empowered
            futures.
          </div>
          <div className='font-montserrat font-medium text-xl text-text-accent text-center'>
            Your healing creates hers. <br /> Her transformation inspires change. <br /> Together, we rise.
          </div>
        </div>
      </div>
      <JoinUs />
    </div>
  );
};

export default PayItForward;
