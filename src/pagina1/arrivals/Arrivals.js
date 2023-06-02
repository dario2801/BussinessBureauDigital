import React from 'react';
import Categories from './categories/Categories';
import BestSellers from './bestSellers/BestSellers';
import NewLetter from './newLetter/NewLetter';


export default function Arrivals() {

    return (
        <React.Fragment>
            <div className='col-12 mt-8'>
                <h3 className='text-2xl text-center uppercase font-medium colorBlue Francois_One'>new arrivals</h3>
                <span className='Guion'></span>
            </div>
            <div className='col-3 max-w-20rem mt-6'>
                <Categories />
                <BestSellers />
                <NewLetter />
            </div>
            <div className='col-8 mt-5 h-auto'>
                <div className="card">
                    <div className="flex flex-row flex-nowrap align-items-start justify-content-center card-container blue-container">
                        <div className="flex align-items-center justify-content-center w-20rem h-20rem bg-blue-500 font-bold text-white border-round m-2">1</div>
                        <div className="flex align-items-center justify-content-center w-20rem h-20rem bg-blue-500 font-bold text-white border-round m-2">2</div>
                        <div className="flex align-items-center justify-content-center w-20rem h-20rem bg-blue-500 font-bold text-white border-round m-2">3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex flex-row flex-nowrap align-items-start justify-content-center card-container blue-container">
                        <div className="flex align-items-center justify-content-center w-20rem h-20rem bg-blue-500 font-bold text-white border-round m-2">1</div>
                        <div className="flex align-items-center justify-content-center w-20rem h-20rem bg-blue-500 font-bold text-white border-round m-2">2</div>
                        <div className="flex align-items-center justify-content-center w-20rem h-20rem bg-blue-500 font-bold text-white border-round m-2">3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex flex-row flex-nowrap align-items-start justify-content-center card-container blue-container">
                        <div className="flex align-items-center justify-content-center w-20rem h-20rem bg-blue-500 font-bold text-white border-round m-2">1</div>
                        <div className="flex align-items-center justify-content-center w-20rem h-20rem bg-blue-500 font-bold text-white border-round m-2">2</div>
                        <div className="flex align-items-center justify-content-center w-20rem h-20rem bg-blue-500 font-bold text-white border-round m-2">3</div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
