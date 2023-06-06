import React from 'react';
import { Rating } from "primereact/rating";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
export default function Form() {
    const [value, setValue] = React.useState(null);
    return (
        <div className="my-8">
            <p className="text-center colorBlue Gilda_Display">Add to review</p>
            <div className="col-12 mt-1 px-5 Border Quicksand">
                <p className="text-center colorBlue Quicksand my-3">
                    Your email address will not be published. Required fields are
                    marked*
                </p>
                <div className="col-11">
                    <h3 className="w-20rem text-left text-base colorBlue Quicksand">
                        Your Rates *
                    </h3>
                    <Rating
                        value={value}
                        onChange={(e) => setValue(e.value)}
                        className="my-1 p-rating"
                        cancel={false}
                    />

                </div>
                <div className="w-full my-2 flex justify-content-center h-12rem">
                    <InputTextarea
                        onResize={true}
                        placeholder="Your Review"
                        className="w-full h-full text-left Border colorBlue Gilda_Display">
                    </InputTextarea>
                </div>
                <div className="grid align-items-center justify-content-center mx-8 mt-5">
                    <div className="mr-3 text-left">
                        <span className="mb-2 flex flex-column text-sm colorBlue Francois_One">Nombre * :</span>
                        <InputText
                            placeholder=""
                            className="Border">

                        </InputText>
                    </div>
                    <div className="ml-3 text-left">
                        <span className="mb-2 flex flex-column text-sm colorBlue Francois_One">Email * :</span>
                        <InputText
                            placeholder=""
                            className="Border">

                        </InputText>
                    </div>
                </div>
                <div className="mt-3 w-7rem h-3rem mx-auto px-1 mb-7 flex align-items-center justify-content-center colorOrange">
                    <span className="border border-0 uppercase px-4 py-2 text-sm text-0 Francois_One Border">
                        submit
                    </span>
                </div>
            </div>
        </div>
    )
}
