import React from "react";
import { InputText } from "primereact/inputtext";
import { Rating } from "primereact/rating";
import { Divider } from 'primereact/divider';
import ReactImageMagnify from 'react-image-magnify';
import Table from "./Table";
import img1 from "../../utils/recursos/main/girls-2-2-580x870.jpg";
import "../../App.css";

export default function ImageDesccription({ product }) {
    const [value, setValue] = React.useState('1');

    const handleSetNull = () => {
        setValue('');
    };
    const handleOnChange = e => {
        setValue(e.target.value);
    };

    if (product) {
        return (
            <div className="grid mx-0 w-full flex align-items-center justify-content-evenly my-4">
                <div className="col-3 p-0">
                    <div className="mx-0 w-full">
                        <div className="m-0 p-0 flex align-items-center justify-content-center">
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Image Products',
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
                            {product.images.map((ele, i) => {
                                return (
                                    <div className="col max-w-4rem">
                                        <img
                                            className="w-full"
                                            src={`${process.env.PUBLIC_URL}/images/${ele.filename}`}
                                            alt='description' />
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
                                        {/* {fors.map((index, i) => {
                                            const isLastItem = i === fors.length - 1;
                                            const isFirstItem = i === 0;
                                            const borderBottomClass = isLastItem ? "pb-4" : "border-bottom-1";
                                            const SpacingClass = isFirstItem ? "pt-5" : "py2";

                                            return (
                                                <div
                                                    key={index.label}
                                                    className={`col-12 flex align-items-center justify-content-start  border-400 ${SpacingClass} ${borderBottomClass}`}
                                                >
                                                    <div className="w-15rem">
                                                        <span className="colorBlue" >
                                                            {index.label}
                                                        </span>
                                                    </div>
                                                    <span className="w-full text-800">{index.description}</span>
                                                </div>
                                            );
                                        })} */}
                                    </div>
                                </div>
                            </div>
                            {/* <Table product={product} /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div>AAAAAAAAAAA</div>);
    }
}
