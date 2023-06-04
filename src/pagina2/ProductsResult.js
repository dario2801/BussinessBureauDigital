import React from "react";
import "./../App.css";
import Menubar from "../pagina1/menu/MenuBar";
import SeccionDesccription from "./headerDescription/SeccionDescription";
import ImageDesccription from "./imageDescription/ImageDescription";
import ParagraphDesccription from "./paragraphDescription/ParagraphDecription";
import Footer from '../pagina1/footer/Footer';
export default function ProductsResult() {
  return (
    <React.Fragment>
      <Menubar />
      <div className="grid mx-0">
        <div className="col-12 flex align-items-center justify-content-center relative px-8">
          <SeccionDesccription />
        </div>
        {/* //Contenedor Body*/}
        {/* //descripcion de producto */}
        <div className="col-12 flex align-items-center justify-content-center relative px-8">
          <ImageDesccription />
        </div>
        {/* parrafo descriptivo */}
      </div>
      <div className="col-12 flex align-items-center justify-content-center relative px-8">
        <ParagraphDesccription />
      </div>
      <Footer />
    </React.Fragment>
  );
}
