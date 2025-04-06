const Thrive = () => {
  return (
    <div className="w-screen mt-16 h-12 bg-accent relative flex justify-center items-center lg:hidden">
      <div className="font-cormorant text-3xl text-center text-text-accent">
        Lets Thrive Together
      </div>
      <div
        className="w-0 h-0 absolute -left-2 rotate-90"
        style={{
          borderLeft: "24px solid transparent",
          borderRight: "24px solid transparent",
          borderBottom: "40px solid white",
        }}
      />
      <div
        className="w-0 h-0 absolute -right-2 rotate-270"
        style={{
          borderLeft: "24px solid transparent",
          borderRight: "24px solid transparent",
          borderBottom: "40px solid white",
        }}
      />
    </div>
  );
};

export default Thrive;
