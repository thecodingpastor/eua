import Image from "next/image";

import Pencil from "@/app/assets/pencil-works.svg";
const PencilWorksPage = () => {
  return (
    <div className="dflex items-center justify-center">
      <figure className="relative w-[90vw] h-[220px] sm:h-[300px] md:h-[500px]">
        <Image
          src={Pencil}
          alt="Pencil Works"
          fill
          // style={{ objectFit: "contain" }}
        />
      </figure>
    </div>
  );
};

export default PencilWorksPage;
