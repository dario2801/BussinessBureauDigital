import React from 'react';
import baby from '../../utils/recursos/main/baby.png';
import boy from '../../utils/recursos/main/boy.png';
import girl from '../../utils/recursos/main/girl.png';
import toys from '../../utils/recursos/main/toys.png';

export default function Categories() {
    const items = [
        {
            img: baby,
            alt: 'Para bebes',
            text: "baby & toddler",
            url: "./"
        },
        {
            img: girl,
            alt: 'para chicas',
            text: "for girls",
            url: "./"
        },
        {
            img: boy,
            alt: 'para chicos',
            text: "for boys",
            url: "./"
        },
        {
            img: toys,
            alt: 'Hogar y Juguetes',
            text: "home & toys",
            url: "./"
        },
    ]


    return (
        <div className='col-10 mt-5 border-1 border-dashed border-400 h-auto'>
            <ul className='list-none flex justify-content-center align-items-stretch justify-content-around'>
                {items.map((item) => {
                    return (
                        <li className='w-full text-center' key={item.alt}>
                            <img src={item.img} alt={item.alt} className='w-8rem'></img>
                            <span className='text-sm capitalize block font-semibold colorBlue Quicksand'>{item.text}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
