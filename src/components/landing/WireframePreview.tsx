import Column from "./Column";

export default function WireframePreview() {

  // Classes
  const containerClasses = "w-3/4 h-[140vh] -mt-[20vh] overflow-hidden flex gap-10 z-2 rotate-15";

  const column1Blocks: string[] = [
    "HERO SPOT",
    "INTRODUCTORY CONTENT\n+ 3 MAIN FEATURE",
    "ONE TESTIMONIAL",
    "BENEFITS",
    "REINFORCEMENT STATEMENT",
    "FEATURES",
    "THE CLOSING",
  ];

  const column2Blocks: string[] = [
    "FORM",
    "CTA",
    "BENEFITS",
    "REINFORCEMENT STATEMENT",
    "FEATURES",
    "THE CLOSING STATEMENT",
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
        <Column blocks={column1Blocks} direction="up" duration={20} />
        <Column blocks={column2Blocks} direction="down" duration={25} />
      </div>
    </>
  );
};