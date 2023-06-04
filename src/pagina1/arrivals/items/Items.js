import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import { FaRegHeart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import prueba from '../../../utils/recursos/for home/for-home-13-1-580x870.jpg';
import prueba2 from '../../../utils/recursos/for home/for-home-13-580x870.jpg';
import data from '../../../utils/json/ForBabies.json';
import listProductFake from '../../../utils/json/products.api.json';

const countProducts = 9;

function getRandomImages(data) {
    const randomImages = [];
    const selectedIndices = [];
    while (randomImages.length < 9) {
        let randomIndex = Math.floor(Math.random() * data.length);
        while (selectedIndices.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * data.length);
        }
        selectedIndices.push(randomIndex);
        const randomImage = data[randomIndex];
        randomImages.push(randomImage);
    }
    return randomImages;
};

export default function Items() {
    const [gridProducts, setGridProducts] = React.useState();

    const images = getRandomImages(data);
    const [isHovering, setIsHovering] = React.useState(prueba);


    // const handleMouseOver = () => {
    //     setIsHovering(prueba2);
    // };

    // const handleMouseOut = () => {
    //     setIsHovering(prueba);
    // };


    const outStock = 'uppercase stock colorBlue Francois_One';
    const addToCar = 'w-full flex align-items-center justify-content-center absolute uppercase colorOrange';
    // const addToCar = 'w-full flex align-items-center justify-content-center absolute uppercase colorOrange addToCar';

    const ItemProduct = ({ product }) => {
        const [imgProduct, setImgProduct] = React.useState(`${process.env.PUBLIC_URL}/images/${product.images[0].filename}`);
        const [imgProductAnimation, setImgProductAnimation] = React.useState('');
        const [showButtonShop, setShowButtonShop] = React.useState(false);

        const handleMouseOver = () => {
            setShowButtonShop(true);
            if (product.images.length > 1) {
                setImgProductAnimation(' fadein');
                setImgProduct(`${process.env.PUBLIC_URL}/images/${product.images[1].filename}`);
            }
        };

        const handleMouseOut = () => {
            setShowButtonShop(false);
            if (product.images.length > 1) {
                setImgProductAnimation(' fadeout');
                setImgProduct(`${process.env.PUBLIC_URL}/images/${product.images[0].filename}`);
            }
        };

        return (
            <div className='col-4 flex flex-column mx-0 font-bold relative fadein'>
                {!product.stock && (
                    <span className="uppercase absolute stock colorBlue Francois_One mt-2 right-0 mr-3">out of stock</span>
                )}
                <div
                    className='relative overflow-y-hidden'
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <img
                        className={`w-full imgContainer${imgProductAnimation}`}
                        src={imgProduct}
                        alt={product.name}
                    />
                    {product.stock ? (
                        <div className={`fadeinup transition-all transition-ease-in-out transition-duration-500 w-full flex align-items-center justify-content-center uppercase colorOrange absolute${showButtonShop ? ' -translate-y-100' : ' translate-y-100'}`} >
                            <span className='py-1 my-1 w-full mx-1 text-center text-0 border-white Francois_One Border'>
                                <FaRegHeart className='text-0 mx-3' />
                                add to car
                                <BsSearch className='text-0 mx-3' />
                            </span>
                        </div>
                    ) : (
                        <div className={`fadeinup transition-all transition-ease-in-out transition-duration-500 w-full flex align-items-center justify-content-center uppercase colorOrange absolute${showButtonShop ? ' -translate-y-100' : ' translate-y-100'}`} >
                            <span className='py-1 my-1 w-full mx-1 text-center text-0 border-white Francois_One Border'>
                                <FaRegHeart className='text-0 mx-8' />
                            </span>
                        </div>
                    )}
                </div>
                <span className='w-full text-sm text-center my-1 textOrange'>{product.category.name}</span>
                <span className='w-full text-xl text-center colorBlue my-1 Gilda_Display'>{product.name}</span>
                {product.stock && (
                    <span className='w-full text-sm text-center my-1 colorBlue'>{product.price}</span>
                )}
            </div>
        );
    };

    const listItems = () => {
        let listRet = [];
        let productUse = [];

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        for (let index = 0; index < countProducts; index++) {
            let posProduct = 0;
            do {
                posProduct = getRandomInt(0, listProductFake.length);
            } while (productUse.some(ele => ele === posProduct));
            productUse.push(posProduct);
            listRet.push(<ItemProduct key={index} product={listProductFake[posProduct]} />);
        }

        return listRet;
    };

    React.useEffect(() => {
        setTimeout(() => { setGridProducts(listItems()) }, 1500);

        return () => {
            setGridProducts(null);
        };
    }, []);

    if (gridProducts) {
        return (
            <div className='grid'>{gridProducts.map(ele => ele)}</div>
        );
    } else {
        return (
            <div className='grid'>
                {[...Array(9).keys()].map((e, index) => {
                    return (
                        <div key={index} className='col-4 flex flex-column mx-0 font-bold'>
                            <div className='relative overflow-y-hidden'>
                                <Skeleton className='w-full border border-noround' height="19rem"></Skeleton>
                            </div>
                            <div className="flex flex-column w-full align-items-center">
                                <Skeleton height="1rem" width='50%' className="my-1"></Skeleton>
                                <Skeleton height="2rem" width='100%' className="my-1"></Skeleton>
                                <Skeleton height="1rem" width='35%' className="my-1"></Skeleton>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <React.Fragment>

            <div className='grid mt-2'>
                {listItems().map(ele => ele)}
                {/* <div className='col-4 flex flex-column mx-0 font-bold'>
                    <div className='relative overflow-y-hidden'>
                        <img
                            id='imgContainer'
                            className='w-full'
                            src={`${process.env.PUBLIC_URL}/images/boys-1-580x870.jpg`}
                            // onMouseOver={handleMouseOver}
                            // onMouseOut={handleMouseOut}
                            alt="Product"
                        />
                    </div>
                    <span className='w-full text-sm text-center my-1 textOrange'>{`For Baby`}</span>
                    <span className='w-full text-xl text-center colorBlue my-1 Gilda_Display'>{`Name Product`}</span>
                    <span className='w-full text-sm text-center my-1 colorBlue'>$33.00</span>
                </div> */}
            </div>




            {/* {[0, 1, 2].map((rowIndex) => (
                <div
                    key={rowIndex}
                    className='flex flex-row flex-nowrap align-items-start justify-content-center mt-4'>
                    {images.slice(rowIndex * 3, rowIndex * 3 + 3).map((image) => (
                        <div
                            key={image.nombre}
                            className='grid mx-0 w-20rem relative font-bold  mx-3 '>
                            <div className='relative overflow-y-hidden'>
                                <img
                                    id='imgContainer'
                                    className='w-full'
                                    // src={`../../../utils/recursos${image.url[0]}${image.url[0]}`}
                                    src={isHovering}
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                    alt={`Prodcuto ${image.nombre}`} />
                                {image.en_stock ?
                                    <div className={`${addToCar}`} >
                                        <span className='py-1 text-center text-0 border-white Francois_One Border '>
                                            <FaRegHeart className='text-0 mx-3' />
                                            add to car
                                            <BsSearch className='text-0 mx-3' />
                                        </span>
                                    </div> :
                                    <div className={`${addToCar}`} >
                                        <span className='py-1 text-center text-0 border-white Francois_One Border '>
                                            <FaRegHeart className='text-0 mx-8' />
                                        </span>
                                    </div>
                                }

                            </div>
                            <span className={`${!image.en_stock ? outStock : 'hidden'}`}>out of stock</span>
                            <span className='w-full text-sm text-center my-1 textOrange'>{`${image.categoria}`}</span>
                            <span className='w-full text-xl text-center colorBlue my-1 Gilda_Display'>{`${image.nombre}`}</span>
                            {image.en_stock ?
                                <span className='w-full text-sm text-center my-1 colorBlue'>$33.00</span>
                                :
                                <span className='w-full text-sm text-center my-1 colorBlue'></span>}
                        </div>
                    ))}
                </div>
            ))} */}
        </React.Fragment>
    )
}