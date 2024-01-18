import Image from "next/image";

import { montserratAlt } from "@/app/layout";

import Tabs from "@/app/assets/tabs.webp";
import Lappy from "@/app/assets/lappy.webp";

const MockUps = () => {
  return (
    <div>
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex-1 sm:px-20  shrink-0 py-20 bg-[#036] md:bg-white relative order-1 md:order-none -mt-1 sm:mt-0">
          <Image
            src={Tabs}
            width={500}
            height={600}
            alt="Image"
            className="md:absolute md:-right-[30px] ml-10 sm:ml-0"
          />
        </div>
        <div className="flex-1 px-20 shrink-0 py-20 bg-[#036] text-white">
          <h3 className={montserratAlt.className + " text-3xl mb-20"}>
            Mock Ups
          </h3>
          <p className="mb-20">
            The design is well-optimized for responsiveness across different
            devices and screen sizes for a consistent user experience.
          </p>
          <p className="mb-20">
            The design elements are well sized for touch interaction, the goal
            is accessibility and
          </p>
          <p className="mb-6">
            The UI is clean and minimalist, which is great for user focus and
            minimizing distractions.
          </p>
          <p className="mb-10">
            The use of white space is effective as it enables the content easy
            to read and visually appealing.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full px-20 border-4">
        <div className="flex-1  shrink-0 bg-white">
          <h4
            className="uppercase font-bold text-xl"
            style={{ letterSpacing: "7.5px" }}
          >
            Accessibility <br /> Considerations
          </h4>
        </div>
        <div className="flex-1  shrink-0 bg-[#036]">
          <Image
            src={Lappy}
            alt="Desktop"
            width={1000}
            height={800}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default MockUps;
