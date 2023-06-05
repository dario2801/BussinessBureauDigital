import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import { Divider } from 'primereact/divider';
import { Link } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { BsSearch } from "react-icons/bs";
import listProductFake from '../../../utils/json/products.api.json';

export default function Categories() {
    const [listCategory, setListCategory] = React.useState();

    React.useEffect(() => {
        let listCategory = [];
        setTimeout(() => {
            listProductFake.forEach(ele => {
                if (listCategory.length === 0 || !listCategory.find(cat => cat.slug === ele.category.slug)) {
                    listCategory.push({ name: ele.category.name, slug: ele.category.slug, countProduct: 1 });
                } else {
                    listCategory.find(cat => cat.slug === ele.category.slug).countProduct++;
                }
            });
            setListCategory(listCategory);
        }, 1500);
    }, []);

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
            {listCategory ? (
                <div className='flex align-items-center justify-content-center fadein'>
                    <div className="flex w-full align-items-center justify-content-center px-3 py-1 h-auto font-light Francois_One Border">
                        <div className='flex flex-column w-full py-4'>
                            {listCategory.map((ele, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <Link className="no-underline" to={`category/${ele.slug}`} >
                                        <div className={`flex align-items-center justify-content-between w-full border-400`}>
                                            <span className='colorBlue link-hover'>{ele.name}</span>
                                            <span className='colorBlue'>({ele.countProduct})</span>
                                        </div>
                                        </Link>
                                        {(i !== listCategory.length - 1) && (
                                            <Divider className='mb-3 mt-2' />
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-column'>
                    <div className="w-full px-3 py-4 h-auto font-light Francois_One Border">
                        <div className={`w-full border-400`}>
                            <Skeleton height="1rem" width='100%'></Skeleton>
                        </div>
                        <Divider className='mb-3 mt-2' />
                        <div className={`w-full border-400`}>
                            <Skeleton height="1rem" width='100%'></Skeleton>
                        </div>
                        <Divider className='mb-3 mt-2' />
                        <div className={`w-full border-400`}>
                            <Skeleton height="1rem" width='100%'></Skeleton>
                        </div>
                        <Divider className='mb-3 mt-2' />
                        <div className={`w-full border-400`}>
                            <Skeleton height="1rem" width='100%'></Skeleton>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}
