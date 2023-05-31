import React from 'react';
import './../App.css';
import Menubar from './menu/MenuBar';
import logo from '../utils/recursos/main/logo.png';
import imagenPerro from '../utils/recursos/main/slider-1.jpg';
import imagenChicas from '../utils/recursos/main/girls-power.jpg';

export default function SearchResult() {


    return (
        <div className='grid mx-0'>
            <div className='col-12 flex align-items-center justify-content-center text-0 my-1 colorOrange fontfamily'>
                <h5>
                    20% off all kidswear + free shipping when you spend $60 or more
                </h5>
            </div>

            <div className='col-12 flex align-items-center justify-content-center'>
                <img src={logo}
                    alt='kids are us' />
            </div>

            <div className='col-12 flex align-items-center justify-content-center wrap'>
                <Menubar />
            </div>

            <div className='col-12 flex align-items-center justify-content-center wrap relative '>
                {/* <div className='grid w-full flexjustify-content-around mx-3 bg-orange-500'>
                    <div className='col-9'>
                        <img src={imagenPerro}
                        className='w-30rem'
                         alt='Bebé y perrito' />
                    </div>
                    <div className='col-3'>
                        <img src={imagenChicas}
                        className='w-15rem'
                         alt='Dos niñas' />
                    </div>
                </div> */}
            </div>

        </div>
    )
}
