import Column from "./Column";
import type { BlockType } from "./BlockType";

export default function WireframePreview() {

  // Classes
  const containerClasses = "h-[140vh] -mt-[20vh] overflow-hidden flex gap-10 z-2 rotate-15";

  const column1Blocks: BlockType[] = [
    { imgSrc : "/images/feature-1.png", imgAlt : "Swap Image"},
    { imgSrc : "/images/feature-2.png", imgAlt : "Swap Image"},
  ];

  const column2Blocks: BlockType[] = [
    { imgSrc : "/images/feature-1.png", imgAlt : "Swap Image"},
    { imgSrc : "/images/feature-2.png", imgAlt : "Swap Image"},
  ];

  return (
    <>
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <div className={containerClasses}>
        <Column blocks={column1Blocks} direction="up" duration={25} />
        <Column blocks={column2Blocks} direction="down" duration={35} />
      </div>
    </>
  );
};