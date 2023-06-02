import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import kidsaus from '../../utils/recursos/main/logo(1).png';

export default function Footer() {
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
    return (
        <React.Fragment>
            <footer className='grid mx-0 flex align-items-center justify-content-center'>
                <div className='col-12 mt-8 mb-0'>
                    <h3 className='flex align-items-center justify-content-center text-2xl text-center uppercase font-medium colorBlue Francois_One'>instagram @kidsrus</h3>
                    <span className='Guion'></span>
                </div>
                <div className='col-6 flex align-items-center justify-content-center my-6 colorOrange'>
                    <div className='col h-9rem'>1</div>
                    <div className='col h-9rem'>2</div>
                    <div className='col h-9rem'>3</div>
                    <div className='col h-9rem'>4</div>
                </div>
                <div className='col-12  m-0 flex align-items-center justify-content-center colorFooterOrange'>
                    <div className='grid mx-0'>
                        <div className='col-12 flex align-items-center justify-content-center mt-3'>
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
                            <span className='text-white-alpha-50'> This is a sample of website - cmsmaster © 2022 / All Rights Reserved</span>
                        </div>
                    </div>
                </div>
                <span className='text-800 text-center text-sm pr-3 my-2'>This website use cookies to improve your experience. We'll assume you're ok with, but you can opt- if you wish </span>
                <button className='bg-black-alpha-90 text-center text-100 my-2 px-2 border border-black-1'>Accept</button>
            </footer>
        </React.Fragment>
    );
}