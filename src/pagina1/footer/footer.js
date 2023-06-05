import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Rating } from 'primereact/rating';
import listProductFake from '../../utils/json/products.api.json';
import kidsaus from '../../utils/recursos/main/logo(1).png';
import footer1 from '../../utils/recursos/main/footer1.jpg';
import footer2 from '../../utils/recursos/main/footer2.jpg';
import footer3 from '../../utils/recursos/main/footer3.jpg';
import footer4 from '../../utils/recursos/main/footer4.jpg';
import footer5 from '../../utils/recursos/main/footer5.jpg';
import { Link } from 'react-router-dom';
import { Skeleton } from 'primereact/skeleton';

const countRelatedProducts = 4;

export default function Footer({ type, category }) {

    const items = [
        {
            label: 'SHOP',
        },
        {
            label: 'SALES',
        },
        {
            label: 'GIRLS',

        },
        {
            label: 'BOYS',

        },
        {
            label: 'LOOKBOOK',

        },
        {
            label: 'CONTACTS',

        }
    ];
    const network = [
        {
            label: 'Instagram',
            icon: <FaInstagram />,
        },
        {
            label: 'Facebook',
            icon: <FaFacebookF />,
        },
        {
            label: 'Twitter',
            icon: <FaTwitter />,

        }
    ];

    const RelatedItemProduct = ({ product }) => {
        return (
            <div className='mx-3 relative'>
                {!product.stock && (
                    <span className='uppercase stockMiniatura colorBlue Francois_One absolute -translate-x-100 right-0 mt-2'> out of stock</span>
                )}
                <Link to={`/product/${product.sku}`} reloadDocument>
                    <img className='w-full'
                        src={`${process.env.PUBLIC_URL}/images/${product.images[0].filename}`}
                        alt={product.name} />
                </Link>
                <Link to={`/category/${product.category.slug}`} reloadDocument className='no-underline block text-sm text-center my-1 link-hover-blue textOrange'>{product.category.name}</Link>
                <Link to={`/product/${product.sku}`} reloadDocument className='no-underline block text-xl text-center link-hover colorBlue my-1 Gilda_Display'>{product.name}</Link>
                {product.stock && (
                    <span className='block text-sm text-center my-1 colorBlue'>${product.price}</span>
                )}
                <span className='flex align-items-center justify-content-center'>
                    <Rating
                        className='p-rating'
                        value={product.rating}
                        readOnly
                        cancel={false}
                    />
                </span>
            </div>
        );
    };

    function getListRelatedItems() {
        let listRet = [];
        if (category !== null) {
            const listProductsCategory = [...listProductFake.filter(ele => ele.category.slug === category.slug)];
            console.log(listProductsCategory);

            for (let index = 0; index < countRelatedProducts; index++) {
                listRet.push(<RelatedItemProduct key={index} product={listProductsCategory[index]} />);
            }
        } else {
            listRet.push(<Skeleton key={'a'} width="100%" height="8rem" />);
        }

        return listRet;
    };

    return (
        <React.Fragment>
            <footer className='grid mx-0 flex align-items-center justify-content-center'>
                {type === 0 ?
                    <React.Fragment>
                        <div className='col-12 mt-8 mb-0'>
                            <h3 className='flex align-items-center justify-content-center text-2xl text-center uppercase font-medium colorBlue Francois_One'>instagram @kidsrus</h3>
                            <span className='Guion'></span>
                        </div>
                        <div className='col-6 flex align-items-center justify-content-center my-6'>
                            <div className='col'>
                                <img className='w-full hoverFotter'
                                    src={footer1}
                                    alt='imagen1' />
                            </div>
                            <div className='col'>
                                <img className='w-full hoverFotter'
                                    src={footer2}
                                    alt='imagen1' />
                            </div>
                            <div className='col'>
                                <img className='w-full hoverFotter'
                                    src={footer3}
                                    alt='imagen1' />
                            </div>
                            <div className='col'>
                                <img className='w-full hoverFotter'
                                    src={footer4}
                                    alt='imagen1' />
                            </div>
                            <div className='col'>
                                <img className='w-full hoverFotter'
                                    src={footer5}
                                    alt='imagen1' />
                            </div>
                        </div>
                    </React.Fragment> :
                    <React.Fragment>
                        <div className='col-12 mt-8 mb-0'>
                            <h3 className='flex align-items-center justify-content-center text-2xl text-center uppercase font-medium colorBlue Francois_One'>related products</h3>
                            <span className='Guion'></span>
                        </div>
                        <div className='col-10 flex align-items-start justify-content-center my-6'>
                            {getListRelatedItems().map(ele => ele)}
                        </div>
                    </React.Fragment>
                }
                <span className='wave w-full'></span>
                <div className='col-12  m-0 flex align-items-center justify-content-center colorFooterOrange'>
                    <div className='grid mx-0'>
                        <div className='col-12 flex align-items-center justify-content-center mt-7'>
                            <img
                                src={kidsaus}
                                alt='kids_a_us_logo'
                                className='max-w-12rem w-full mx-auto' />
                        </div>
                        <div className='col-12 flex align-items-center justify-content-center'>
                            <ul className="menu  h-2rem">
                                {items.map((index) => {
                                    return <li key={index.label} className="text-0 px-3 py-2">{index.label}</li>
                                })}
                            </ul>
                        </div>
                        <div className='col-12 flex align-items-center justify-content-center'>
                            <ul className="menu h-2rem">
                                {network.map((index) => {
                                    return <li key={index.label} className="text-2xl text-0 px-3 py-0">{index.icon}</li>
                                })}
                            </ul>
                        </div>
                        <div className='col-12 flex align-items-center justify-content-center'>
                            <span className='text-0 capitalize'>privacy policy / </span>
                            <span className='text-white-alpha-50'>This is a sample of website - cmsmaster © 2022 / All Rights Reserved</span>
                        </div>
                    </div>
                </div>
                <span className='text-800 text-center text-sm pr-3 my-2'>This website use cookies to improve your experience. We'll assume you're ok with, but you can opt- if you wish </span>
                <button className='bg-black-alpha-90 text-center text-100 my-2 px-2 py-1 border border-none'>Accept</button>
            </footer >
        </React.Fragment >
    );
}