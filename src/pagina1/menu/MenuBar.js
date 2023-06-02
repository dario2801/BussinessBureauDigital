import React, { useState } from 'react';
import logo from '../../utils/recursos/main/logo.png';
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Badge } from 'primereact/badge';
import { Menubar } from 'primereact/menubar';

import '../../App.css';

export default function MenuBar() {
    const [counter, setCounter] = useState(0)

    const handleCleanCounter = () => {
        setCounter(0);
    }
    const handleSumCounter = () => {
        setCounter(counter + 1);
    }
    const handleLessCounter = () => {
        setCounter(counter - 1);
    }

    const items = [
        {
            label: 'HOME',
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
        <header className='grid mx-0'>
            <div className='col-12 flex align-items-center justify-content-center text-0 my-1 colorOrange Quicksand py-2'>
                20% off all kidswear + free shipping when you spend $60 or more
            </div>
            <div className='col-12 flex align-items-center justify-content-center'>
                <img src={logo}
                    alt='kids are us' />
            </div>
            <div className='col-12 flex align-items-center justify-content-center'>
                <ul className="menu relative h-2rem">
                    <li className="menu-item">{items[0].label}</li>
                    <li className="menu-item">{items[1].label}</li>
                    <li className="menu-item">{items[2].label}</li>
                    <li className="menu-item">{items[3].label}</li>
                    <li className="menu-item">{items[4].label}</li>
                    <li className="menu-item">{items[5].label}</li>
                    <li className="px-3">{items[6].icon}</li>
                    <li className="px-3 relative">{items[7].icon}
                        <div className='flex align-items-center justify-content-center text-white Badge'>{counter}</div>
                    </li>
                    <li className="px-3">{items[8].icon}</li>
                </ul>
            </div>
        </header>
    )
}
