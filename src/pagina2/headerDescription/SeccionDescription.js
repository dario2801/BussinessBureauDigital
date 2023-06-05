import React from "react";
import { Skeleton } from 'primereact/skeleton';
import { Link } from "react-router-dom";
import "../../App.css";

export default function SeccionDesccription({ product }) {
    return (
        <section className="grid w-full  colorBlue my-2 Border">
            {product ? (
                <React.Fragment>
                    <div className="mt-4 col-12 flex align-items-center justify-content-center ">
                        <h1 className="font-light colorBlue Gilda_Display">{product.name}</h1>
                    </div>
                    <div className="mb-4 col-12 flex align-items-center justify-content-center">
                        <span className="colorBlue Francois_One">Home:</span>
                        <Link className="no-underline colorBlue link-hover Francois_One" to={`/category/${product.category.slug}`}> {product.category.name}:</Link>
                        <pre className="font-semibold textOrange Quicksand">{product.name}</pre>
                    </div>
                </React.Fragment>
            ) : (
                <Skeleton width="100%" height="8rem" />
            )}
        </section>
    );
}
