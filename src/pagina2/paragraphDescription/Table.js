import React from "react";

export default function Table() {
  const fors = [
    {
      label: "Color:",
      description: "Blue",
    },
    {
      label: "Material:",
      description: "Cotton",
    },
    {
      label: "Age:",
      description: "6 Years",
    },
  ];
  return (
    <React.Fragment>
      <div className="flex align-items-center justify-content-center fadeindown animation-duration-5000 animation-iteration-1">
        <div className="flex w-full align-items-center justify-content-center px-3 py-1 h-auto font-semibold Quicksand Border">
          <div className="grid mx-0 w-full">
            {fors.map((index, i) => {
              const isLastItem = i === fors.length - 1;
              const isFirstItem = i === 0;
              const borderBottomClass = isLastItem ? "pb-4" : "border-bottom-1";
              const SpacingClass = isFirstItem ? "pt-5" : "py2";
              return (
                <div
                  key={index.label}
                  className={`col-12 flex align-items-center justify-content-start border-400 ${SpacingClass} ${borderBottomClass}`}
                >
                  <span className="w-6rem  mr-7 text-start colorBlue">{index.label}</span>
                  <span className="w-6rem text-800">{index.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
