// import React from "react";
// import "../../App.css";
// import { TabMenu } from "primereact/tabmenu";

// const items = [
//   {
//     label: "DESCRIPTION",
//     // className: "Guion"
//   },
//   {
//     label: "ADDITIONAL INFORMATION",
//     // className: "Guion"
//   },
//   {
//     label: "REVIEWS(1)",
//     // className: "Guion"
//   },
// ];

// export default function ParagraphDesccription() {
//   return (
//     <div className="grid mx-0 w-full flex align-items-center justify-content-center my-4">
//       <div className="col-10">
//         <TabMenu
//           className="flex align-items-center justify-content-center"
//           model={items} />
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import "../../App.css";
import { TabMenu } from "primereact/tabmenu";

export default function ParagraphDesccription() {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabChange = (e) => {
    setSelectedTab(e.index);
  };

  const descriptionText = "Este es el texto de la descripción.";
  const additionalInfoText = "Aquí va el texto de información adicional.";
  const reviewText = "Este es el texto de la reseña.";

  let selectedText = null;

  if (selectedTab === 0) {
    selectedText = descriptionText;
  } else if (selectedTab === 1) {
    selectedText = additionalInfoText;
  } else if (selectedTab === 2) {
    selectedText = reviewText;
  }

  return (
    <div className="grid mx-0 w-full flex align-items-center justify-content-center my-4">
      <div className="col-10">
        <TabMenu
          className="flex align-items-center justify-content-center"
          model={[
            { label: "DESCRIPTION" },
            { label: "ADDITIONAL INFORMATION" },
            { label: "REVIEWS(1)" },
          ]}
          activeIndex={selectedTab}
          onTabChange={handleTabChange}
        />
        {selectedText && <p>{selectedText}</p>}
      </div>
    </div>
  );
}
