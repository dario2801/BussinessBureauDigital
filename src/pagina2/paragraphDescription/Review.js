import React, { useState } from "react";
import { Rating } from "primereact/rating";
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
      <p className="text-left colorBlue Gilda_Display">
        1 review for Blue Blouse
      </p>
      <div className="col-12 mt-3 Border Quicksand">
        <div className="grid mx-0">
          <div className="w-6rem mr-3 flex align-items-start justify-content-center">
            <img className="w-5rem my-2" src={items[0].img} alt={"avatar"} />
          </div>
          <div className="col my-2">
            <h3 className="w-20rem text-left colorBlue Gilda_Display">
              cmsmasters
              <strong className="ml-2 text-sm">December 5, 2018</strong>
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
      {/* aki empieza el form */}
      <div className="py-8">
        <p className="text-center colorBlue Gilda_Display">Add to review</p>
        <div className="col-12 mt-3 Border Quicksand">
          <p className="text-center colorBlue Gilda_Display py-3">
            Your email address will not be published. Required fields are
            marked*
          </p>
          <div className="my-2">
            <h3 className="w-20rem text-left colorBlue Gilda_Display ml-6">
              your rates*
            </h3>
            <Rating
              className="my-2 p-rating ml-6"
              value={0}
              readOnly
              cancel={false}
            />

            <div className="col-11 mt-3 Border Quicksand ml-6 h-8rem">
              <p className="w-20rem text-left colorBlue Gilda_Display">
                Your Review
              </p>
            </div>
            {/* <div className="grid mx-0">
              <div className="col-6 my-2 py-3 mt-3 Border Quicksand"></div>
              <div className="col-6 my-2 py-3 mt-3 Border Quicksand"></div>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
