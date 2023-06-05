import React from 'react';
import { InputText } from "primereact/inputtext";

export default function NewLetter() {
    const [value, setValue] = React.useState('');

    const handleSetNull = () => {
        setValue('');
    };
    const handleOnChange = e => {
        setValue(e.target.value);
    };

    return (
        <React.Fragment>
            <div className='flex flex-wrap align-items-center justify-content-center mt-5 colorOrange Francois_One'>
                <div className="flex w-full align-items-center justify-content-center px-3 p-1 h-auto font-light Gilda_Display ">
                    <div className='grid mx-0 capitalize'>
                        <span className='col-12 text-0 text-2xl pt-5 pb-0 text-center'>join our</span>
                        <span className='col-12 text-0 text-2xl pt-2 pb-2 text-center'>newsletter</span>
                        <div className="max-w-20rem w-full flex flex-column align-items-center justify-content-center">
                            <InputText
                                onChange={handleOnChange}
                                value={value}
                                id='input-newletter'
                                className='col-12 w-full text-0 colorOrange border-white BorderInput my-3 py-3 pl-3'
                                placeholder="Your Email Address*" />
                            <span className='col-12 surface-0 mb-2'>
                                <button
                                    type="submit"
                                    onClick={handleSetNull}
                                    className='w-full surface-0 uppercase text-xs  py-2 border border-orange-500 textOrange Francois_One Border'>
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
