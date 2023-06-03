import React from 'react';
import prueba from '../../../utils/recursos/for babies/for-babies-2-1-580x870.jpg'
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
    const ruta = "../../../utils/recursos";

    return (
        <React.Fragment>
            {[0, 1, 2].map((rowIndex) => (
                <div
                    key={rowIndex}
                    className='flex flex-row flex-nowrap align-items-start justify-content-center mt-4'>
                    {images.slice(rowIndex * 3, rowIndex * 3 + 3).map((image) => (
                        <div
                            key={image.nombre}
                            className='grid mx-0 w-20rem  font-bold  mx-3'>
                            <img
                                className='w-full'
                                src={ruta + image.url[0]}
                                alt='algo' />
                            <span className='w-full text-sm text-center my-1 textOrange'>{`${image.categoria}`}</span>
                            <span className='w-full text-xl text-center colorBlue my-1 Gilda_Display'>{`${image.nombre}`}</span>
                            <span className='w-full text-sm text-center my-1 colorBlue'>{`${image.precio}`}</span>
                        </div>
                    ))}
                </div>
            ))}
        </React.Fragment>
    )
}