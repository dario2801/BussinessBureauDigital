import React from "react";
import { InputText } from "primereact/inputtext";
import { Rating } from "primereact/rating";
import { Divider } from 'primereact/divider';
import ReactImageMagnify from 'react-image-magnify';
import "../../App.css";

export default function ImageDescription({ product }) {
    const [value, setValue] = React.useState('1');
    const [selectImg, setSelectImg] = React.useState(product && product.images[0]);

    const handleSetNull = () => {
        setValue('1');
    };
    const handleOnChange = e => {
        setValue(e.target.value);
    };

    const handleChangeImg = (img) => {
        setSelectImg(img);
    }

    return (
        <div className="grid mx-0 w-full flex align-items-center justify-content-evenly my-4">
            <div className="col-3 p-0">
                <div className="mx-0 w-full">
                    <div className="m-0 p-0 flex align-items-center justify-content-center">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Image Products',
                                isFluidWidth: true,
                                src: `${process.env.PUBLIC_URL}/images/${selectImg.filename}`
                            },
                            largeImage: {
                                src: `${process.env.PUBLIC_URL}/images/${selectImg.filename}`,
                                width: 1200,
                                height: 1800
                            }
                        }} />
                    </div>
                    <div className="flex mx-0 w-full mt-2 max-w-14rem p-0">
                        {product.images.map((ele, i) => {
                            return (
                                <div key={i} className="max-w-4rem mr-2 fadein">
                                    <img
                                        className="w-full"
                                        onClick={() => { handleChangeImg(ele) }}
                                        src={`${process.env.PUBLIC_URL}/images/${ele.filename}`}
                                        alt={`${product.name}-${i + 1}`} 
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="col-7">
                <div className="flex flex-column align-items-start">
                    <div className="p-0">
                        {product.stock && (
                            <span className="colorBlue Francois_One">${product.price}</span>
                        )}
                        <Rating
                            className="mt-3 mb-4 p-rating"
                            value={product.rating}
                            cancel={false}
                        />
                        <p className="my-3 w-full Quicksand">{product.information}</p>
                    </div>
                    <div className="grid mx-0 flex align-items-center justify-content-start">
                        {product.stock && (
                            <div className="col-2 pl-0">
                                <InputText
                                    onChange={handleOnChange}
                                    value={value}
                                    className='w-full Border'
                                    placeholder="0" />
                            </div>
                        )}
                        <div className="col-4 h-3rem flex align-items-center justify-content-center uppercase colorOrange Francois_One">
                            <button
                                onClick={handleSetNull}
                                className='w-25rem py-2 text-center  text-0 uppercase  border-white BorderInput colorOrange Francois_One'>
                                {product.stock ? "add to car" : "add to wishlist"}
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
                        <div className="flex align-items-center justify-content-start">
                            <div className="flex w-full align-items-left justify-content-start px-3 py-1 h-auto font-semibold Quicksand  Border">
                                <div className="grid mx-0 w-full py-2">
                                    <div
                                        className={`col-12 flex align-items-center justify-content-start border-400 py-2`}
                                    >
                                        <div className="w-15rem">
                                            <span className="colorBlue" >SKU:</span>
                                        </div>
                                        <span className="w-full text-800">{product.sku}</span>
                                    </div>
                                    <Divider className='my-1' />
                                    <div
                                        className={`col-12 flex align-items-center justify-content-start border-400 py-2`}
                                    >
                                        <div className="w-15rem">
                                            <span className="colorBlue" >Category:</span>
                                        </div>
                                        <span className="w-full text-800">{product.category.name}</span>
                                    </div>
                                    <Divider className='my-1' />
                                    <div
                                        className={`col-12 flex align-items-center justify-content-start border-400 py-2`}
                                    >
                                        <div className="w-15rem">
                                            <span className="colorBlue" >Tags:</span>
                                        </div>
                                        <span className="w-full text-800">{product.tags.join(", ")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
