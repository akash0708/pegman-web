import Link from "next/link";

const Footer = () => {
  return (
    <section className="footer flex flex-col sm:flex-row sm:justify-between sm:items-start pt-0  sm:py-12 px-16 lg:px-40 w-full min-h-fit bg-[#2d0c1b]">
      <div className="image realtive w-40 h-40 flex justify-center items-center">
        <img src="/logo2.png" alt="logo2" />
      </div>
      <div className="quick_links flex flex-col font-Jost text-white">
        <p className="font-semibold text-2xl pb-4">Quick links</p>
        <Link href="#home" className="font-thin text-base">
          Home
        </Link>
        <Link href="#about" className="text-base font-thin">
          About
        </Link>
        <Link href="#feature" className="text-base font-thin">
          Features
        </Link>
        <Link href="#coming-soon" className="text-base font-thin">
          Download
        </Link>
        <Link href="#team" className="text-base font-thin">
          Team
        </Link>
        <p className="text-sm font-thin pt-8 hidden sm:inline">
          Copyright ©2023 PEGMAN
        </p>
      </div>
      <div className="contact_us flex flex-col font-Jost text-white">
        <p className="font-semibold text-2xl pb-4 pt-8 sm:pt-0">Contact Us</p>
        <p>
          <span className="text-base">Mobile:</span> +91 74398 48657
        </p>
        <p>
          <span className="text-base">Email:</span> pegman406@gmail.com
        </p>
        <p className="text-sm font-thin pt-8 pb-4 inline sm:hidden">
          Copyright ©2023 PEGMAN
        </p>
      </div>
    </section>
  );
};

export default Footer;
