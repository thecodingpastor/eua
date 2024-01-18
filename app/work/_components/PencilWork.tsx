import GW from "@/app/assets/gw.webp";
import GWText from "@/app/assets/gw-text.webp";
import Image from "next/image";
import Box from "./Box";

const PencilWork = () => {
  return (
    <Box className="p-0 relative" href="/work/pencil-works">
      <Image
        src={GW}
        alt="Graphite White"
        fill
        style={{ borderRadius: "18px" }}
      />
      <Image
        src={GWText}
        alt="Graphite White"
        width={150}
        height={150}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Box>
  );
};

export default PencilWork;
