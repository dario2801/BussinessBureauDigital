import React from "react";
import "../../App.css";
import { TabMenu } from "primereact/tabmenu";

const items = [
  {
    label: "DESCRIPTION",
    // className: "Guion"
  },
  {
    label: "ADDITIONAL INFORMATION",
    // className: "Guion"
  },
  {
    label: "REVIEWS(1)",
    // className: "Guion"
  },
];

export default function ParagraphDesccription() {
  return (
    <div className="grid mx-0 w-full flex align-items-center justify-content-center my-4">
      <div className="col-10">
        <TabMenu
          className="flex align-items-center justify-content-center"
          model={items} />
      </div>
    </div>
  );
}
