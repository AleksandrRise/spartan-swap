import React from "react";

// Class constants
const containerClasses = "relative overflow-hidden h-screen";
const columnsWrapperClasses = "flex gap-4 rotate-12 origin-top-left translate-x-16 -translate-y-8";
const leftColumnClasses = "flex flex-col gap-3 animate-scroll-up";
const rightColumnClasses = "flex flex-col gap-3 animate-scroll-down";
const cardClasses = "bg-white border border-gray-200 rounded-md px-4 py-6 w-48 shadow-sm";
const cardLabelClasses = "text-gray-400 text-xs font-medium tracking-wide";

// Data constants
const leftColumnData = [
  "HERO SPOT",
  "INTRODUCTORY CONTENT + 3 MAIN FEATURE",
  "ONE TESTIMONIAL",
  "BENEFITS",
  "REINFORCEMENT STATEMENT",
  "FEATURES",
  "THE CLOSING STATEMENT",
];

const rightColumnData = [
  "HERO SPOT",
  "FORM",
  "CTA",
  "INTRODUCTORY CONTENT + 3 MAIN FEATURE",
  "ONE TESTIMONIAL",
  "BENEFITS",
  "REINFORCEMENT STATEMENT",
  "FEATURES",
  "THE CLOSING STATEMENT",
  "FOOTER",
];

const WireframePreview: React.FC = () => {
  const Card = ({ label }: { label: string }) => (
    <div className={cardClasses}>
      <span className={cardLabelClasses}>{label}</span>
    </div>
  );

  return (
    <div className={containerClasses}>
      <div className={columnsWrapperClasses}>
        <div className={leftColumnClasses}>
          {[...leftColumnData, ...leftColumnData].map((label, index) => (
            <Card key={index} label={label} />
          ))}
        </div>

        <div className={rightColumnClasses}>
          {[...rightColumnData, ...rightColumnData].map((label, index) => (
            <Card key={index} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WireframePreview;