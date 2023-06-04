import React, { useState } from "react";
import "../../App.css";
import { TabMenu } from "primereact/tabmenu";
import Table from "./Table";
import Review from "./Review";

export default function ParagraphDesccription() {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabChange = (e) => {
    setSelectedTab(e.index);
  };

  const descriptionText = (
    <p className="text-left text-800 fadeindown animation-duration-5000 animation-iteration-1">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet
      lectus sit amet elit interdum, sed semper metus consectetur. Vivamus eu
      elit euismod, tincidunt tellus a, congue lacus. Nam ullamcorper, sem vel
      molestie iaculis, quam quam molestie enim, id consequat purus enim sed mi.
      Suspendisse potenti. Sed non risus euismod, varius nulla ut, elementum
      metus. Donec vel vulputate tellus. Sed aliquam, tellus sed molestie
      convallis, velit elit venenatis nisl, ut bibendum sem nunc auctor justo.
      Integer feugiat orci ac enim tincidunt, vitae bibendum dui pulvinar. Sed
      blandit, dui vel molestie gravida, justo mauris dignissim dolor, sit amet
      suscipit felis nunc vel lacus. Pellentesque euismod, purus a luctus
      posuere, eros sapien eleifend orci, sed egestas sapien augue eget nisi.
      Sed nec vulputate nulla. Sed massa tortor, faucibus sit amet eros in,
      ornare tempus turpis. Sed nec turpis vel felis consequat rhoncus"
    </p>
  );
  let selectedText = descriptionText;

  if (selectedTab === 0) {
    selectedText = descriptionText;
  } else if (selectedTab === 1) {
    selectedText = <Table />;
  } else if (selectedTab === 2) {
    selectedText = <Review />;
  }

  return (
    <div className="grid mx-0 w-full flex align-items-center justify-content-center my-4">
      <div className="col-11">
        <TabMenu
          className="flex align-items-center justify-content-center "
          model={[
            { label: "DESCRIPTION" },
            { label: "ADDITIONAL INFORMATION" },
            { label: "REVIEWS(1)" },
          ]}
          activeIndex={selectedTab}
          onTabChange={handleTabChange}
        />
        {selectedText && <p className="text-center my-5 ">{selectedText}</p>}
      </div>
    </div>
  );
}
