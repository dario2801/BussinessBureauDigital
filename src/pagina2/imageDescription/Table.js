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
      numbers: "001",
    },
    {
      label: "Category:",
      numbers: "For Girls",
    },
    {
      label: "Tags:",
      numbers: "Blouse, Girls",
    },
  ];
  return (
    <React.Fragment>
      <div className="flex align-items-center justify-content-left">
        <div className="flex w-full align-items-left justify-content-left px-3 py-1 h-auto font-light Francois_One Border">
          <div className="grid mx-0 w-full">
            {fors.map((index, i) => {
              console.log(i);
              const isLastItem = i === fors.length - 1;
              const isFirstItem = i === 0;
              const borderBottomClass = isLastItem ? "pb-4" : "border-bottom-1";
              const SpacingClass = isFirstItem ? "pt-5" : "py2";

              return (
                <div
                  key={index.label}
                  className={`col-12 flex align-items-center justify-content-between w-full  border-400 ${SpacingClass} ${borderBottomClass}`}
                >
                  <a className="no-underline colorBlue w-full" href="./">
                    {index.label}
                  </a>
                  <span className="colorBlue w-full">{index.numbers}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
