import React from "react";
import "../../App.css";
import { TabMenu } from "primereact/tabmenu";

const items = [
  { label: "DESCRIPTION" },
  { label: "ADDITIONAL INFORMATION" },
  { label: "REVIEWS" },
];

export default function ParagraphDesccription() {
  return (
    <div>
      <div className="card align-items-center justify-content-center">
        <TabMenu model={items} />
      </div>
    </div>
  );
}
