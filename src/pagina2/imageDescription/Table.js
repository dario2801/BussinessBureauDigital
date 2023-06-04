import React from "react";
import { InputText } from "primereact/inputtext";
import { BsSearch } from "react-icons/bs";
// import forBabies from '../../../utils/json/ForBabies.json';
// import forHome from '../../../utils/json/ForHome.json';
// import forGirls from '../../../utils/json/ForGirls.json';
// import forBoys from '../../../utils/json/ForBoys.json';
// import forPlay from '../../../utils/json/ForPlay.json';

// const forBabiesArray = forBabies;
// const forHomeArray = forHome;
// const forGirlsArray = forGirls;
// const forBoysArray = forBoys;
// const forPlayArray = forPlay;

export default function Categories() {
  const fors = [
    {
      label: "SKU:",
      description: "001",
    },
    {
      label: "Category:",
      description: "For Girls",
    },
    {
      label: "Tags:",
      description: "Blouse, Girls",
    },
  ];
  return (
    <React.Fragment>
      <div className="flex align-items-center justify-content-start">
        <div className="flex w-full align-items-left justify-content-start px-3 py-1 h-auto font-semibold Quicksand  Border">
          <div className="grid mx-0 w-full">
            {fors.map((index, i) => {
              const isLastItem = i === fors.length - 1;
              const isFirstItem = i === 0;
              const borderBottomClass = isLastItem ? "pb-4" : "border-bottom-1";
              const SpacingClass = isFirstItem ? "pt-5" : "py2";

              return (
                <div
                  key={index.label}
                  className={`col-12 flex align-items-center justify-content-start  border-400 ${SpacingClass} ${borderBottomClass}`}
                >
                  <div className="w-15rem">
                    <span className="colorBlue" >
                      {index.label}
                    </span>
                  </div>
                  <span className="w-full text-800">{index.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
