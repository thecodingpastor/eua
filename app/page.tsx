import Image from "next/image";
import Link from "next/link";

import EUA_BG from "./assets/eua-bg.png";
const HomePage = () => {
  return (
    <div className="mt-60 mb-20 px-5 flex flex-col justify-center items-center relative">
      <figure className="absolute h-96 w-full max-w-5xl left-0">
        <Image src={EUA_BG} alt="Background Logo" fill sizes="500px" />
      </figure>
      <div className="mx-auto max-w-[600px] text-center">
        <h3
          style={{
            letterSpacing: "7.75px",
            fontSize: "45px",
            fontWeight: "600",
          }}
        >
          HI THERE!
        </h3>
        <div className="flex flex-col gap-5 font-light text-sm text-center justify-center items-center mt-10 mb-16">
          <p>Welcome to my portfolio website</p>
          <p>
            I'm a multifaceted designer specializing in UX, architecture, and
            graphics. Passionate about human-centered design, I'm on a journey
            to become Nigeria's top UX Designer. Explore my portfolio to see
            where creativity meets functionality in design.
          </p>
        </div>
        <Link
          href="/work"
          className="text-black bg-yellow-500 px-6 py-4 rounded-[23px] inline-block w-max"
          style={{ boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)" }}
        >
          View My Work
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
