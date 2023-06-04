import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Rating } from 'primereact/rating';
import kidsaus from '../../utils/recursos/main/logo(1).png';
import footer1 from '../../utils/recursos/main/footer1.jpg';
import footer2 from '../../utils/recursos/main/footer2.jpg';
import footer3 from '../../utils/recursos/main/footer3.jpg';
import footer4 from '../../utils/recursos/main/footer4.jpg';
import footer5 from '../../utils/recursos/main/footer5.jpg';

import prueba1 from '../../utils/recursos/for home/for-home-1-1-580x870.jpg'
import prueba2 from '../../utils/recursos/for home/for-home-13-1-580x870.jpg';
import prueba3 from '../../utils/recursos/for home/for-home-14-580x870.jpg';
import prueba4 from '../../utils/recursos/for home/for-home-1-580x870.jpg';
import data from '../../utils/json/ForBabies.json';

export default function Footer(props) {
    const [page, setPage] = React.useState(1);
    const [stock, setStock] = React.useState(false);

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
    const outStock = 'uppercase stockMiniatura colorBlue Francois_One'
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
    return (
        <React.Fragment>
            <footer className='grid mx-0 flex align-items-center justify-content-center'>
                {page === 0 ?
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
                        <div className='col-6 flex align-items-center justify-content-center my-6'>
                            <div className='col-3'>
                                <img className='w-full'
                                    src={prueba1}
                                    alt='imagen1' />
                                <span className='block text-sm text-center my-1 textOrange'>For Girls</span>
                                <span className='block text-xl text-center colorBlue my-1 Gilda_Display'>Blue Blouse</span>
                                <span className='block text-sm text-center my-1 colorBlue'>$33.00</span>
                                <span className='flex align-items-center justify-content-center'>
                                    <Rating
                                        className='p-rating' value={data[0].estrellas}
                                        readOnly
                                        cancel={false}
                                    />
                                </span>
                            </div>
                            <div className='col-3'>
                                <img className='w-full'
                                    src={prueba2}
                                    alt='imagen1' />
                                <span className='block text-sm text-center my-1 textOrange'>For Girls</span>
                                <span className='block text-xl text-center colorBlue my-1 Gilda_Display'>Blue Blouse</span>
                                <span className='block text-sm text-center my-1 colorBlue'>$33.00</span>
                                <span className='flex align-items-center justify-content-center'>
                                    <Rating
                                        className='p-rating'
                                        value={data[1].estrellas}
                                        readOnly
                                        cancel={false}
                                    />
                                </span>
                            </div>
                            <div className='col-3 relative'>
                                <img className={`w-full`}
                                    src={prueba3}
                                    alt='imagen1' />

                                <span className={`${!stock ? outStock : 'hidden'}`}> out of stock</span>
                                <span className='block text-sm text-center my-1 textOrange'>For Girls</span>
                                <span className='block text-xl text-center colorBlue my-1 Gilda_Display'>Blue Blouse</span>
                                {stock ?
                                    <span className='block text-sm text-center my-1 colorBlue'>$33.00</span>
                                    :
                                    <span className='block text-sm text-center my-1 colorBlue h-1rem'></span>}
                                <span className='flex align-items-center justify-content-center'>
                                    <Rating
                                        className={'p-rating'}
                                        value={data[4].estrellas}
                                        readOnly
                                        cancel={false}
                                    />
                                </span>
                            </div>
                            <div className='col-3'>
                                <img className='w-full'
                                    src={prueba4}
                                    alt='imagen1' />
                                <span className='block text-sm text-center my-1 textOrange'>For Girls</span>
                                <span className='block text-xl text-center colorBlue my-1 Gilda_Display'>Blue Blouse</span>
                                <span className='block text-sm text-center my-1 colorBlue'>$33.00</span>
                                <span className='flex align-items-center justify-content-center'>
                                    <Rating
                                        className='p-rating' value={data[9].estrellas}
                                        readOnly
                                        cancel={false}
                                    />
                                </span>
                            </div>
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