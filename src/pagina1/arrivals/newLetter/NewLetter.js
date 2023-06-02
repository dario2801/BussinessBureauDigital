import React from 'react';
import { InputText } from "primereact/inputtext";
import forBabies from '../../../utils/json/ForBabies.json';
import forHome from '../../../utils/json/ForHome.json';
import forGirls from '../../../utils/json/ForGirls.json';
import forBoys from '../../../utils/json/ForBoys.json';
import forPlay from '../../../utils/json/ForPlay.json';

const forBabiesArray = forBabies;
const forHomeArray = forHome;
const forGirlsArray = forGirls;
const forBoysArray = forBoys;
const forPlayArray = forPlay;

export default function NewLetter() {
    return (
        <React.Fragment>
            <div className='flex flex-wrap align-items-center justify-content-center mt-5 colorOrange Francois_One'>
                <div className="flex w-full align-items-center justify-content-center px-3 p-1 h-auto font-light Gilda_Display ">
                    <div className='grid mx-0 capitalize'>
                        <span className='col-12 text-0 text-2xl pt-5 pb-0 text-center'>join our</span>
                        <span className='col-12 text-0 text-2xl pt-2 pb-2 text-center'>newsletter</span>
                        <div className="max-w-20rem w-full flex flex-column align-items-center justify-content-center">
                            <span className=' col-12 w-full text-0 colorOrange border-white Border my-3 py-3 pl-3'>
                                Your Email Address*
                            </span>
                            <span className='col-12 surface-0'>
                                <button
                                    className='w-full  surface-0 uppercase text-xs   Border py-2 border border-orange-500 textOrange Francois_One'>
                                    subscribe
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
