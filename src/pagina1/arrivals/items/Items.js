import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import { FaRegHeart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import listProductFake from '../../../utils/json/products.api.json';
import { getRandomInt } from '../../../utils/util.functions';
import { Link } from 'react-router-dom';

const countProducts = 9;

export default function Items({ category }) {
    const [gridProducts, setGridProducts] = React.useState();

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
                    <Link to={`/product/${product.sku}`} reloadDocument>
                        <img
                            className={`w-full imgContainer${imgProductAnimation}`}
                            src={imgProduct}
                            alt={product.name}
                        />
                    </Link>
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
                <Link to={`/category/${product.category.slug}`} reloadDocument className='no-underline text-sm text-center my-1 textOrange link-hover-blue'>
                    {product.category.name}
                </Link>
                <Link to={`/product/${product.sku}`} reloadDocument className='no-underline text-lg text-center colorBlue link-hover my-1 Gilda_Display'>
                    {product.name}
                </Link>
                {product.stock && (
                    <span className='w-full text-sm text-center my-1 colorBlue'>${product.price}</span>
                )}
            </div>
        );
    };

    function getListItems() {
        let listRet = [];
        if (!category) {
            let productUse = [];

            for (let index = 0; index < countProducts; index++) {
                let posProduct = 0;
                do {
                    posProduct = getRandomInt(0, listProductFake.length);
                } while (productUse.some(ele => ele === posProduct));
                productUse.push(posProduct);
                listRet.push(<ItemProduct key={index} product={listProductFake[posProduct]} />);
            }
        } else {
            listProductFake.filter(ele => ele.category.slug === category).forEach((matchCat, index) => {
                listRet.push(<ItemProduct key={index} product={matchCat} />);
            });
        }

        return listRet;
    };

    React.useEffect(() => {
        setTimeout(() => setGridProducts(getListItems()), 1500);

        return () => {
            setGridProducts(null);
        };
    }, [category]);

    if (gridProducts) {
        return (
            <div className='grid'>{gridProducts.length > 0
                ? gridProducts.map(ele => ele)
                : <h3 className='text-xl text-center w-full mt-8 colorBlue Francois_One'>There are no products associated with this category.</h3>
            }</div>
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
}
