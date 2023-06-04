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
    <div>
      <div className="text-left">1 review for Blue Blouse</div>
      <div className="col-12 mt-5 border-1 border-dashed border-400 h-auto">
        <div className="grid mx-0">
          <div className="w-12rem">
            <ul className="list-none flex justify-content-center align-items-stretch justify-content-around">
              {items.map((item) => {
                return (
                  <li className="w-full text-left" key={item.alt}>
                    <img src={item.img} alt={item.alt} className="w-8rem"></img>
                    <span className="text-sm capitalize block font-semibold colorBlue Quicksand">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <p className="mt-3 mb-4 p-rating">
              cmsmasters<strong>December 5,2018</strong>
            </p>
            <Rating
              className="mt-3 mb-4 p-rating"
              value={5}
              readOnly
              cancel={false}
            />
            <p className="mt-3 mb-4 p-rating text-left">
              Mauris non sodales eros.Aenean sed commodo nisl.Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas
            </p>
            <p className="mt-3 mb-4 p-rating">Rated 5 out of 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
