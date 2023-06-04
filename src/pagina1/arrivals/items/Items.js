import React from "react";
import prueba from "../../../utils/recursos/for girls/girls-1-1-580x870.jpg";

export default function Items() {
  return (
    <React.Fragment>
      {[0, 1, 2].map((rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-row flex-nowrap align-items-start justify-content-center mt-4"
        >
          {images.slice(rowIndex * 3, rowIndex * 3 + 3).map((image) => (
            <div
              key={image.nombre}
              className="grid mx-0 w-20rem relative font-bold  mx-3 "
            >
              <div className="relative overflow-y-hidden">
                <img
                  id="imgContainer"
                  className="w-full"
                  // src={`../../../utils/recursos${image.url[0]}${image.url[0]}`}
                  src={isHovering}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  alt={`Prodcuto ${image.nombre}`}
                />
                {image.en_stock ? (
                  <div className={`${addToCar}`}>
                    <span className="py-1 text-center text-0 border-white Francois_One Border ">
                      <FaRegHeart className="text-0 mx-3" />
                      add to car
                      <BsSearch className="text-0 mx-3" />
                    </span>
                  </div>
                ) : (
                  <div className={`${addToCar}`}>
                    <span className="py-1 text-center text-0 border-white Francois_One Border ">
                      <FaRegHeart className="text-0 mx-8" />
                    </span>
                  </div>
                )}
              </div>
              <span className={`${!image.en_stock ? outStock : "hidden"}`}>
                out of stock
              </span>
              <span className="w-full text-sm text-center my-1 textOrange">{`${image.categoria}`}</span>
              <span className="w-full text-xl text-center colorBlue my-1 Gilda_Display">{`${image.nombre}`}</span>
              {image.en_stock ? (
                <span className="w-full text-sm text-center my-1 colorBlue">
                  $33.00
                </span>
              ) : (
                <span className="w-full text-sm text-center my-1 colorBlue"></span>
              )}
            </div>
          ))}
        </div>
      ))}
    </React.Fragment>
  );
}
