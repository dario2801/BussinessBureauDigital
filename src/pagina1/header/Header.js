import React from 'react'
import imagenPerro from '../../utils/recursos/main/slider-1.jpg';
import imagenChicas from '../../utils/recursos/main/girls-power.jpg';
export default function Header() {
    return (
        <React.Fragment>
            <div className='col-7'>
                <img src={imagenPerro}
                    className='w-full'
                    alt='Bebé y perrito' />
            </div>
            <div className='col-3 flex align-content-between flex-wrap'>
                <img src={imagenChicas}
                    className='w-full'
                    alt='Dos niñas' />
                <div className='grid mx-0 justify-content-center wrap align-items-stretch pt-3 Francois_One'>
                    <span className='col-12 text-2xl text-center uppercase font-medium pb-0 colorBlue Francois_One'>Girls POWER</span>
                    <span className='col-12 text-center text-medium pt-0 text-700'>For a colorful summer</span>
                </div>
            </div>
        </React.Fragment>
    )
}
