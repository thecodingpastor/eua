import { montserratAlt } from "@/app/layout";
import Ideation from "@/app/assets/ideation.webp";
import Proto from "@/app/assets/proto.webp";
import Image from "next/image";

const DesignProcess = () => {
  return (
    <div className="bg-[#FAFAFA] py-20 mt-20">
      <h3
        className={
          montserratAlt.className + " flex flex-col justify-center items-center"
        }
        style={{ transformOrigin: "right" }}
      >
        <span style={{ letterSpacing: "7.9px", fontSize: "35px", zIndex: "1" }}>
          Design
        </span>
        <span className="text-yellow-500 -mt-14" style={{ fontSize: "70px" }}>
          Processes
        </span>
      </h3>
      <div className="flex flex-col md:flex-row items-center mt-10 gap-6 max-w-5xl mx-auto px-4">
        <div className="flex-1 shrink-0">
          <h3 className={montserratAlt.className + " text-3xl mb-10"}>
            Ideation:{" "}
          </h3>
          <p>
            Ideas were generated by posing relevant questions aimed at
            addressing the frustrations of the personas. This involved asking
            "How Might We" questions and utilizing the Crazy 8's technique.
          </p>
        </div>
        <Image
          src={Ideation}
          alt="Ideation"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
          className="flex-1 shrink-0"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto px-4 mt-16">
        <h3 className={montserratAlt.className + " text-3xl shrink-0"}>
          Wireframing & Prototypes
        </h3>
        <p>
          Wireframes were generated on Figma to show how I came about the design
          solutions
        </p>
      </div>
      <Image
        src={Proto}
        alt="Proto"
        width={600}
        height={600}
        className="mt-16 mx-auto"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default DesignProcess;