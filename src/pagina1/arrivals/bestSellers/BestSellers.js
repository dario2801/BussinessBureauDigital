import React from 'react';
import { Rating } from 'primereact/rating';
import listProductFake from '../../../utils/json/products.api.json';
import { getRandomInt } from '../../../utils/util.functions';
import { Skeleton } from 'primereact/skeleton';

const countProductsBS = 4;

export default function BestSellers() {
    const [listBestSeller, setListBestSeller] = React.useState();

    const ItemProductBS = ({ product }) => {
        return (
            <div
                className='grid py-2 mx-0 fadein'
            >
                <div className='col-4'>
                    <div className='w-4rem h-4rem border-circle' style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${product.images[0].filename})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                </div>
                <div className='col-8'>
                    <div className='flex flex-column'>
                        <span className='text-left text-sm'>{product.name}</span>
                        <span className='w-full'>
                            <Rating
                                className='p-rating' value={product.rating}
                                readOnly
                                cancel={false}
                            />
                        </span>
                        <span className='text-sm'>{`$${product.price}`}</span>
                    </div>
                </div>
            </div>
        );
    };

    function getListItemsBS() {
        let listRet = [];
        let productUse = [];

        for (let index = 0; index < countProductsBS; index++) {
            let posProduct = 0;
            do {
                posProduct = getRandomInt(0, listProductFake.length);
            } while (productUse.some(ele => ele === posProduct));
            productUse.push(posProduct);
            listRet.push(<ItemProductBS key={`${index}-best-seller`} product={listProductFake[posProduct]} />);
        }

        return listRet;
    };

    React.useEffect(() => {
        setTimeout(() => setListBestSeller(getListItemsBS()), 800);

        return () => {
            setListBestSeller(null);
        }
    }, []);

    return (
        <React.Fragment>
            <div className='flex align-items-center justify-content-start mt-5 mb-2'>
                <span className='text-xl text-center uppercase colorBlue Francois_One'>best sellers</span>
            </div>
            <div className="flex flex-column w-full p-2 font-light colorBlue Francois_One Border">
                {listBestSeller ? (
                    listBestSeller.map(ele => ele)
                ) : (
                    [...Array(2).keys()].map((ele, index) => {
                        return (
                            <div key={`${index}-best-seller`} className="flex my-1">
                                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                                <div style={{ flex: '1' }}>
                                    <Skeleton width="100%" className="mb-2"></Skeleton>
                                    <Skeleton width="75%" className="mb-2"></Skeleton>
                                    <Skeleton width="30%"></Skeleton>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </React.Fragment>
    )
}
