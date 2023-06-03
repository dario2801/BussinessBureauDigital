import React from 'react';
import prueba from '../../../utils/recursos/for home/for-home-13-1-580x870.jpg'
import data from '../../../utils/json/ForBabies.json'

function getRandomImages(data) {
    const randomImages = [];
    const selectedIndices = [];
    while (randomImages.length < 9) {
        let randomIndex = Math.floor(Math.random() * data.length);
        while (selectedIndices.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * data.length);
        }
        selectedIndices.push(randomIndex);
        const randomImage = data[randomIndex];
        randomImages.push(randomImage);
    }
    return randomImages;
};

export default function Items() {
    const images = getRandomImages(data);
    const outStock = 'uppercase stock colorBlue Francois_One';
    return (
        <React.Fragment>
            {[0, 1, 2].map((rowIndex) => (
                <div
                    key={rowIndex}
                    className='flex flex-row flex-nowrap align-items-start justify-content-center mt-4'>
                    {images.slice(rowIndex * 3, rowIndex * 3 + 3).map((image) => (
                        <div
                            key={image.nombre}
                            className='grid mx-0 w-20rem relative font-bold  mx-3'>
                            <img
                                className='w-full'
                                // src={`../../../utils/recursos${image.url[0]}${image.url[0]}`}
                                src={prueba}
                                alt={`Prodcuto ${image.nombre}`} />
                            <span className={`${!image.en_stock ? outStock : 'hidden'}`}>out of stock</span>
                            <span className='w-full text-sm text-center my-1 textOrange'>{`${image.categoria}`}</span>
                            <span className='w-full text-xl text-center colorBlue my-1 Gilda_Display'>{`${image.nombre}`}</span>
                            {image.en_stock ?
                                <span className='w-full text-sm text-center my-1 colorBlue'>$33.00</span>
                                :
                                <span className='w-full text-sm text-center my-1 colorBlue'></span>}
                        </div>
                    ))}
                </div>
            ))}
        </React.Fragment>
    )
}