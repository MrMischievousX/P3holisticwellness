import JoinUs from "../components/JoinUs";

const members = [
  {
    title: "Founder (CEO)",
    name: "Harmony Sage",
    about:
      "An Integrated Healing Specialist and Yogini, has 12+ years in wellness, blending Eastern and Western practices. A certified trainer, coach, and healer, overcame personal struggles, including weight loss and an abusive marriage, through self-love and wellness. Trained in Rishikesh, India, she now empowers women to achieve mind-body balance through Harmony Integrated Healing.",
    link: "https://www.linkedin.com/in/harriet-russell-175b9453/",
  },
  {
    title: "Treasurer",
    name: "Rachel Webster",
    about:
      "A Certified Public Accountant (CPA) with over a decade in nonprofit auditing, ensures financial transparency and compliance. With degrees in Communications (Ithaca College, 2006) and Accounting (UNC Charlotte, 2013), she specializes in financial audits, ledger maintenance, and Form 990 compliance. Her expertise strengthens the board’s fiscal oversight and strategic planning.",
    link: "https://www.linkedin.com/in/harriet-russell-175b9453/",
  },
  {
    title: "Director of Development",
    name: "Derek Reeves",
    about:
      "He brings leadership, project, and operational expertise from his military and government project management background. With degrees in Mechanical, Electrical, and Systems Engineering, he applies project management and financial planning to drive the nonprofit’s growth. His skills in resource management and strategy ensure data-driven decisions that empower communities through holistic wellness.",
    link: "https://www.linkedin.com/in/harriet-russell-175b9453/",
  },
  {
    title: "Secretary",
    name: "Stella-Mai Harris",
    about:
      "Secretary at P3 Holistic Health, fosters a wellness-focused environment while applying her project management expertise as a certified Product Owner and Scrum Master. Passionate about health and nutrition, she enjoys vegan cooking, family time, and exploring the universe. With a strong analytical mindset, she aims to pursue a career as a business analyst, merging data skills with holistic health.",
    link: "https://www.linkedin.com/in/harriet-russell-175b9453/",
  },
  {
    title: "Director of Digital Experience & Recruitment",
    name: "Mansi Singla",
    about:
      "A yoga instructor, HR professional, and UI/UX designer, supports recruitment, wellness programs, and digital outreach at P3 Holistic Wellness. Her yoga and meditation guidance fosters healing, while her UI/UX skills improve accessibility. As a passionate volunteer, she is committed to holistic wellness, she believes that yoga and meditation can transform lives in unimaginable ways—once on this path, there’s no turning back.",
    link: "https://www.linkedin.com/in/mansi-singla-a004431b0/",
  },
  {
    title: "Director of Strategy",
    name: "Sanya Ramjattan",
    about:
      "Engineering expertise with holistic wellness to create meaningful change. With 10+ years in project management and a Lean Six Sigma Black Belt, she drives efficiency and team growth. A certified yoga and meditation instructor, she integrates strategic thinking with mindfulness for transformation. Now at P3 Holistic Wellness, she empowers women to achieve sustainable well-being in life and work.",
    link: "https://www.linkedin.com/in/harriet-russell-175b9453/",
  },
];

const About = () => {
  return (
    <div className="">
      <div
        className={`h-[calc(100vh-64px)] w-screen justify-center bg-no-repeat bg-cover bg-center flex items-center py-4 transition-opacity duration-700 opacity-100 bg-[url(assets/mobile/images/about.png)]`}
      >
        <div className="p-4 my-12 mx-8 bg-white rounded-2xl font-montserrat text-xl font-normal text-[#398A86] text-center lg:max-w-3xl lg:p-4">
          Founded in 2020 during the COVID-19 pandemic, our nonprofit
          organization is based in North Carolina, USA. We are dedicated to
          making holistic health accessible to those who need it most. We
          provide services that include Wellness Education, covering
          mindfulness, meditation, holistic nutrition, yoga, and stress
          management, Reiki, sound therapy, and guided meditation to promote
          overall well-being. <br />
          <br /> Our services promote self-awareness, empowerment, and holistic
          transformation. By collaborating with community partners, donors, and
          volunteers, we strive to make holistic wellness a fundamental right,
          not a luxury.
        </div>
      </div>

      <div className="py-9 bg-accent text-2xl font-cormorant text-text-accent text-center font-bold lg:text-5xl lg:py-18">
        Meet our board members
      </div>
      <div>
        {members.map((member, index) => {
          const isAlternate = index % 2 === 0;

          return (
            <div
              key={index}
              onClick={() => {
                window?.open(member.link, "_blank")?.focus();
              }}
              style={{
                backgroundColor: isAlternate ? "transparent" : "#B8D7D6",
              }}
              className={`py-12 h-[calc(100vh-64px)] flex flex-col justify-evenly items-center px-2 gap-5 lg:h-auto lg:${
                !isAlternate ? "flex-row-reverse" : "flex-row"
              } lg:px-8`}
            >
              <img
                className="w-72 h-72 lg:w-64 lg:h-64"
                src={`assets/common/images/about-${index + 1}.png`}
                alt=""
              />
              <div
                className={`flex items-center justify-center gap-5 flex-col lg:flex-col-reverse`}
              >
                <div className="w-full flex justify-center items-center flex-col gap-2 lg:items-start">
                  <div className="text-2xl font-montserrat text-text-primary text-center font-bold max-w-5/6">
                    {member.title}
                  </div>
                  <div className="text-2xl font-montserrat text-text-primary text-center font-bold">
                    {member.name}
                  </div>
                </div>
                <div className="text-xl font-montserrat text-text-primary text-center font-normal lg:text-left">
                  {member.about}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <JoinUs />
    </div>
  );
};

export default About;
