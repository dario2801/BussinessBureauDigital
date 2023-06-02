import React from 'react';
import './../App.css';
import Menubar from './menu/MenuBar';
import Header from './header/Header';
import Categories from './categories/Categories';
import Arrivals from './arrivals/Arrivals';


export default function SearchResult() {
    return (
        <React.Fragment>
            <Menubar />
            <div className='grid mx-0'>
                <div className='col-12 flex align-items-center justify-content-center relative '>
                    {/* //Contenedor Body*/}
                    <div className='grid w-full flex justify-content-center px-8'>
                        {/* //Apartado header */}
                        <Header />
                        {/* //Zona circular */}
                        <Categories />
                        {/* //Nuevas Llegadas */}
                        <Arrivals />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
