
import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Badge } from 'primereact/badge';
import { Menubar } from 'primereact/menubar';

import '../../App.css';

export default function MenuBar() {
    const items = [
        {
            label: 'HOME'
        },
        {
            label: 'SHOP FEATURES',
        },
        {
            label: 'CLOTHES',

        },
        {
            label: 'PAGES',

        },
        {
            label: 'SHORTCODES',

        },
        {
            label: 'POST TYPES',

        },
        {
            icon: <FaRegHeart />,
        },
        {
            icon: <BsCart />,
            badge: <Badge value="2" />
        },
        {
            icon: <BsSearch />,

        },
    ];

    return (
        <div className=''>
            <Menubar className='fontfamily' model={items} />
        </div>
    )
}
