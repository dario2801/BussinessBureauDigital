import React from 'react';
import { Rating } from 'primereact/rating';
import forBabies from '../../../utils/json/ForBabies.json';
import forHome from '../../../utils/json/ForHome.json';
import forGirls from '../../../utils/json/ForGirls.json';
import forBoys from '../../../utils/json/ForBoys.json';
import prueba from "../../../utils/recursos/for play/toys-3-580x870.jpg"


export default function BestSellers() {
    const forBabiesArray = forBabies;
    const forHomeArray = forHome;
    const forGirlsArray = forGirls;
    const forBoysArray = forBoys;

    const fors = [
        {
            label: "For Babies",
            url: './',
            numbers: `(${forBabiesArray.length})`
        },
        {
            label: "For Boys",
            url: './',
            numbers: `(${forBoysArray.length})`
        },
        {
            label: "For Girls",
            url: './',
            numbers: `(${forGirlsArray.length})`
        },
        {
            label: "For Home",
            url: './',
            numbers: `(${forHomeArray.length})`
        }
    ];

    return (
        <React.Fragment>
            <div className='flex align-items-center justify-content-start mt-5 mb-2'>
                <span className='text-xl text-center uppercase colorBlue Francois_One'>best sellers</span>
            </div>
            <div className="flex w-full align-items-center justify-content-center p-1 h-auto  font-light colorBlue Francois_One Border">
                <div className='grid mx-0'>
                    {fors.map((index, i) => {
                        const first = 0;
                        const class1 = first === i ? 'pt-5' : i === fors.length - 1 ? 'pb-4' : 'py-1';
                        return (
                            <div
                                key={index.label}
                                className={`col-12 ${class1} flex align-items-center`}
                            >
                                <div className='col-4 py-0'>
                                    <img
                                        className='w-4rem h-4rem border-circle'
                                        src={prueba}
                                        alt='aaa'
                                    />
                                </div>
                                <div className='col-7 text-start'>
                                    <div className='flex flex-column align-items-center text-start'>
                                        <span className='w-full'>{forBabies[0].nombre}</span>
                                        <span className='w-full'>
                                            <Rating
                                                className='p-rating' value={forBabies[0].estrellas}
                                                readOnly
                                                cancel={false}
                                            />
                                        </span>
                                        <span className='w-full'>{`$${forBabies[0].precio}`}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}
