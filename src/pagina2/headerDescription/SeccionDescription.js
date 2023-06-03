import React from "react";
import "../../App.css";

export default function SeccionDesccription(props) {
  return (
    <header className="grid mx-0  colorBlue my-2 Border">
      <div className="mt-4 col-12 flex align-items-center justify-content-center ">
        <h1 className="font-light colorBlue Gilda_Display">Blue Blouse</h1>
      </div>
      <div className="mb-4 col-12 flex align-items-center justify-content-center">
        <span className="colorBlue Francois_One">Home :</span>
        <pre className="colorBlue Francois_One"> For Girls : </pre>
        <pre className="font-semibold textOrange Quicksand">Blue Blouse</pre>
      </div>
    </header>
  );
}
