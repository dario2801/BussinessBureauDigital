import React from "react";
import { InputText } from "primereact/inputtext";
import { Rating } from "primereact/rating";
import ReactImageMagnify from 'react-image-magnify';
import Table from "./Table";
import img1 from "../../utils/recursos/main/girls-2-2-580x870.jpg";
import "../../App.css";

export default function ImageDesccription() {
  const [value, setValue] = React.useState('');

  const handleSetNull = () => {
    setValue('');
  };
  const handleOnChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className="grid mx-0 w-full flex align-items-center justify-content-evenly my-4">
      <div className="col-3 p-0">
        <div className="grid mx-0 w-full">
          <div className="col-12 m-0 p-0 flex align-items-center justify-content-center">
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: img1
              },
              largeImage: {
                src: img1,
                width: 1200,
                height: 1800
              }
            }} />
          </div>
          <div className="grid mx-0 w-full mt-2  max-w-14rem p-0">
            <div className="col max-w-4rem">
              <img
                className="w-full"
                src={img1}
                alt='description' />
            </div>
            <div className="col max-w-4rem">
              <img
                className="w-full"
                src={img1}
                alt='description' />
            </div>
            <div className="col max-w-4rem">
              <img
                className="w-full"
                src={img1}
                alt='description' />
            </div>
            <div className="col max-w-4rem">
              <img
                className="w-full"
                src={img1}
                alt='description' />
            </div>
          </div>
        </div>
      </div>
      <div className="col-7">
        <div className="grid mx-0 flex align-items-center ">
          <div className="col-12 p-0">
            <span className="colorBlue Francois_One">$22.00</span>
            <Rating
              className="mt-3 mb-4 p-rating"
              value={5}
              readOnly
              cancel={false}
            />
            <p className="my-3 w-full Quicksand">
              Nam non justo quis erat malesuada bibendum et in velit. Nulla
              facilisi. Maecenas vel sapien euismod, ultricies mauris vitae,
              sollicitudin tellus. Praesent ac massa justo. Aliquam erat
              volutpat. Sed pulvinar, nibh et bibendum tempus, nunc mauris
              rhoncus dui, sit amet bibendum sem magna eget velit.
            </p>
          </div>
          <div className="grid mx-0 flex align-items-center justify-content-start">
            <div className="w-4rem mr-2">
              <InputText
                onChange={handleOnChange}
                value={value}
                className='w-full Border'
                placeholder="0" />
            </div>
            <div className="col-4 h-3rem flex align-items-center justify-content-center uppercase colorOrange Francois_One">
              <button
                onClick={handleSetNull}
                className='w-25rem py-2 text-center  text-0 uppercase  border-white BorderInput colorOrange Francois_One'>
                add to car
              </button>
            </div>
          </div>
          <div className="w-full my-3">
            <span className="Quicksand">
              The product is already in the wishlist!
              <strong className="Quicksand colorBlue"> Browse Wishlist</strong>
            </span>
          </div>
          <div className="w-full mt-5">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
