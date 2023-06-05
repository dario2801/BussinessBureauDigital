import React, { useState } from "react";
import { Rating } from "primereact/rating";
import Form from './Form';
import baby from "../../utils/recursos/main/baby.png";

export default function Categories() {
  const [value, setValue] = useState(null);
  const items = [
    {
      img: baby,
    },
  ];
  return (
    <React.Fragment>
      <div className="fadeindown animation-duration-5000 animation-iteration-1">
        <p className="text-left colorBlue Gilda_Display">1 review for Blue Blouse</p>
        <div className="col-12 mt-3 Border Quicksand">
          <div className="grid mx-0">
            <div className="w-6rem mr-3 flex align-items-start justify-content-center">
              <img
                className="w-5rem my-2"
                src={items[0].img}
                alt={'avatar'} />
            </div>
            <div className="col my-2">
              <h3 className="w-20rem text-left colorBlue Gilda_Display">
                cmsmasters
                <strong className="ml-2 text-sm">
                  December 5, 2018
                </strong>
              </h3>
              <Rating
                className="my-2 p-rating"
                value={5}
                readOnly
                cancel={false}
              />
              <p className="my-2 p-rating text-left">
                Mauris non sodales eros.Aenean sed commodo nisl.Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas
              </p>
              <p className="text-left">Rated 5 out of 5</p>
            </div>
          </div>
        </div>
       <Form/>
      </div>
    </React.Fragment>
  );
}
