import React from 'react';
import Categories from './categories/Categories';
import BestSellers from './bestSellers/BestSellers';
import NewLetter from './newLetter/NewLetter';
import Items from './items/Items';

export default function Arrivals({category}) {
    return (
        <React.Fragment>
            <div className='col-12 mt-7 mb-2'>
                <h3 className='text-2xl text-center uppercase font-medium colorBlue Francois_One'>new arrivals</h3>
                <span className='Guion'></span>
            </div>
            <div className='col-3'>
                <Categories />
                <BestSellers />
                <NewLetter />
            </div>
            <div className='col-8'>
                <Items category={category} />
            </div>
        </React.Fragment>
    )
}
