export default function WireframePreview() {
  // Left column sections
  const leftColumn = [
    "HERO SPOT",
    "INTRODUCTORY CONTENT + 3 MAIN FEATURE",
    "ONE TESTIMONIAL",
    "BENEFITS",
    "REINFORCEMENT STATEMENT",
    "FEATURES",
    "THE CLOSING STATEMENT",
  ];

  // Right column sections
  const rightColumn = [
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

  return (
    <div className="relative overflow-hidden h-full">

      {/* Container that holds both columns, rotated slightly */}
      <div className="flex gap-4 rotate-12 origin-top-left translate-x-16 -translate-y-8">

        {/* Left column */}
        <div className="flex flex-col gap-3">
          {leftColumn.map((label, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md px-4 py-6 w-48 shadow-sm"
            >
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-3">
          {rightColumn.map((label, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md px-4 py-6 w-48 shadow-sm"
            >
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
};