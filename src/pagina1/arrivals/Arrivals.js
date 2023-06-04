import React from 'react';
import Categories from './categories/Categories';
import BestSellers from './bestSellers/BestSellers';
import NewLetter from './newLetter/NewLetter';
import Items from './items/Items';

export default function Arrivals() {

    return (
        <React.Fragment>
            <div className='col-12 mt-8'>
                <h3 className='text-2xl text-center uppercase font-medium colorBlue Francois_One'>new arrivals</h3>
                <span className='Guion'></span>
            </div>
            <div className='col-3 max-w-20rem'>
                <Categories />
                <BestSellers />
                <NewLetter />
            </div>
            <div className='col-8'>
                <Items />
            </div>
        </React.Fragment>
    )
}
