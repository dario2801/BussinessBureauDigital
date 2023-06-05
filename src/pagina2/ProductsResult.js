import React from "react";
import "./../App.css";
import Menubar from "../pagina1/menu/MenuBar";
import SeccionDesccription from "./headerDescription/SeccionDescription";
import ParagraphDesccription from "./paragraphDescription/ParagraphDecription";
import Footer from "../pagina1/footer/Footer";
import { redirect, useParams } from "react-router-dom";
import listProductFake from '../utils/json/products.api.json';
import ImageDescription from "./imageDescription/ImageDescription";
import { Skeleton } from "primereact/skeleton";

export default function ProductsResult() {
  const [product, setProduct] = React.useState();
  let { sku } = useParams();

  React.useEffect(() => {
    if (sku) {
      setTimeout(() => {
        const findProduct = listProductFake.find(ele => ele.sku === sku);
        if (findProduct) {
          setProduct(findProduct);
        } else {
          redirect('/');
        }
      }, 1500);
    } else {
      redirect('/');
    }
  }, [sku]);

  return (
    <React.Fragment>
      <Menubar />
      {product ? (
        <React.Fragment>
          <div className="grid mx-0">
            <div className="col-12 flex align-items-center justify-content-center relative px-8">
              <SeccionDesccription product={product} />
            </div>
            {/* //Contenedor Body*/}
            {/* //descripcion de producto */}
            <div className="col-12 flex align-items-center justify-content-center relative px-8">
              <ImageDescription product={product} />
            </div>
            {/* parrafo descriptivo */}
          </div>
          <div className="col-12 flex align-items-center justify-content-center relative px-8">
            <ParagraphDesccription product={product} />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="grid mx-0">
            <div className="col-12 flex align-items-center justify-content-center relative px-8">
              <section className="grid w-full  colorBlue my-2 Border">
                <Skeleton width="100%" height="8rem" />
              </section>
            </div>
            {/* //Contenedor Body*/}
            {/* //descripcion de producto */}
            <div className="col-12 flex align-items-center justify-content-center relative px-8">
              <Skeleton width="100%" height="20rem" />
            </div>
            {/* parrafo descriptivo */}
          </div>
          <div className="col-12 flex align-items-center justify-content-center relative px-8">
            <Skeleton width="100%" height="8rem" />
          </div>
        </React.Fragment>
      )}
      <Footer />
    </React.Fragment>
  );
}
