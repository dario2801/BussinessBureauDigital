import React, { useState } from "react";
import "../../App.css";
import { TabMenu } from "primereact/tabmenu";
import Table from "./Table";
import Review from "./Review";

export default function ParagraphDesccription() {
  return (
    <div className="grid mx-0 w-full flex align-items-center justify-content-center my-4">
      <div className="col-11">
        <TabMenu
          className="flex align-items-center justify-content-center"
          model={items}
        />
      </div>
    </div>
  );
}
