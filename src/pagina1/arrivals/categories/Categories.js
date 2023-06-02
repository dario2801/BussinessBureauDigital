import React from 'react';
import { InputText } from "primereact/inputtext";
import { BsSearch } from "react-icons/bs";
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

export default function Categories() {
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
        },
        {
            label: "For Play",
            url: './',
            numbers: `(${forPlayArray.length})`
        },
    ];
    return (
        <React.Fragment>
            <span className="max-w-20rem w-full flex align-items-center justify-content-center">
                <InputText
                    className='w-full Border'
                    placeholder="Search products.." />
                <i className='flex right-0 ContainerLupe'><BsSearch className='text-white Lupe' /></i>
            </span>
            <div className='flex align-items-center justify-content-start mt-5 mb-2'>
                <span className='text-xl text-center uppercase colorBlue Francois_One'>categories</span>
            </div>
            <div className='flex align-items-center justify-content-center'>
                <div className="flex w-full align-items-center justify-content-center px-3 py-1 h-auto font-light Francois_One Border">
                    <div className='grid mx-0'>
                        {fors.map((index, i) => {
                            console.log(i)
                            const isLastItem = i === fors.length - 1;
                            const isFirstItem = i === 0;
                            const borderBottomClass = isLastItem ? 'pb-4' : 'border-bottom-1';
                            const SpacingClass = isFirstItem ? 'pt-5' : 'py2';

                            return (
                                <div
                                    key={index.label}
                                    className={`col-12 flex align-items-center justify-content-between w-full  border-400 ${SpacingClass} ${borderBottomClass}`}
                                >
                                    <a className='no-underline colorBlue ' href='./'>
                                        {index.label}
                                    </a>
                                    <span className='colorBlue'>
                                        {index.numbers}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
