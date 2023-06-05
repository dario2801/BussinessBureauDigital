import React from 'react';
import baby from '../../utils/recursos/main/baby.png';
import boy from '../../utils/recursos/main/boy.png';
import girl from '../../utils/recursos/main/girl.png';
import toys from '../../utils/recursos/main/toys.png';
import { Link } from 'react-router-dom';

export default function CategoriesBanner() {
    const items = [
        {
            img: baby,
            alt: 'Baby & Toddler',
            text: "Baby & Toddler",
            url: "/category/for-babies"
        },
        {
            img: girl,
            alt: 'For Girls',
            text: "For Girls",
            url: "/category/for-girls"
        },
        {
            img: boy,
            alt: 'For Boys',
            text: "For Boys",
            url: "/category/for-boys"
        },
        {
            img: toys,
            alt: 'Hogar y Juguetes',
            text: "Home & Toys",
            url: "/category/for-home"
        },
    ]


    return (
        <div className='col-10 mt-5 border-1 border-dashed border-400 h-auto'>
            <ul className='list-none flex justify-content-center align-items-stretch justify-content-around'>
                {items.map(item => {
                    return (
                        <Link key={item.alt} to={item.url} className='no-underline'>
                            <li className='w-full text-center'>
                                <img src={item.img} alt={item.alt} className='w-8rem'></img>
                                <span className='text-sm block font-semibold colorBlue Quicksand'>{item.text}</span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    )
}
