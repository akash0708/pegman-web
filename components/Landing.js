import Image from "next/image";

const Landing = () => {
  return (
    <section
      id="home"
      className="realtive flex min-h-screen flex-col justify-center items-center"
      style={{
        background: `url('/hero.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        filter: "contrast(1.25)",
      }}
    >
      <div className="relative flex flex-col gap-1 text-center justify-center">
        <Image
          className="z-10 items-center mx-auto hidden sm:inline"
          src="/logo.png"
          alt="hero-image"
          width={500}
          height={500}
        />
        <Image
          className="z-10 items-center mx-auto mt-12 pb-8 inline sm:hidden"
          src="/logo.png"
          alt="hero-image"
          width={250}
          height={500}
        />
        <p className="text-white text-[30px] sm:text-[40px] font-Prociono">
          Delivering cheers to your Doorstep
        </p>
      </div>
    </section>
  );
};

export default Landing;
