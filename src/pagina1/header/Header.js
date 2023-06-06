import React from 'react'
import imagenPerro from '../../utils/recursos/main/slider-1.jpg';
import imagenChicas from '../../utils/recursos/main/girls-power.jpg';
export default function Header() {
    return (
        <React.Fragment>
            <div className='col-7 relative'>
                <img src={imagenPerro}
                    className='w-full '
                    alt='Bebé y perrito' />
                <div className='absolute Translate uppercase Francois_One'>
                    <h1 className='text-left text-6xl text-0  font-light' style={{letterSpacing:'5px'}}>jumpsuits</h1>
                    <p className='text-left text-0 text-sm my-3'>Confortable clothes, for your little babies</p>
                    <div className='flex align-items-center justify-content-center mt-3 bg-white w-7rem uppercase h-3rem'>
                        <p className='px-3 py-1 text-center Border BorderBlue colorBlue'>discover</p></div>
                </div>
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
