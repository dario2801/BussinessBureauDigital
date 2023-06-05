import React, { useState } from "react";
import "../../App.css";
import { TabMenu } from "primereact/tabmenu";
import Table from "./Table";
import Review from "./Review";

export default function ParagraphDesccription({ product }) {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (e) => {
        setSelectedTab(e.index);
    };

    const contentText = () => {
        if (selectedTab === 1) {
            return (<Table />);
        } else if (selectedTab === 2) {
            return (<Review />);
        } else {
            return (<p className="text-left text-800 fadeindown animation-duration-5000 animation-iteration-1">{product.description}</p>);
        }
    };

    return (
        <div className="grid mx-0 w-full flex align-items-center justify-content-center my-4">
            <div className="col-11">
                <TabMenu
                    className="flex align-items-center justify-content-center "
                    model={[
                        {
                            label: "DESCRIPTION", template: (item, options) => {
                                return (
                                    <a className='flex flex-column mx-4 text-xl text-center uppercase colorBlue Francois_One no-underline link-hover no-underline link-hover' onClick={options.onClick}>
                                        <span>{item.label}</span>
                                        {options.active && (
                                            <span className='Guion fadein'></span>
                                        )}
                                    </a>
                                );
                            }
                        },
                        {
                            label: "ADDITIONAL INFORMATION", template: (item, options) => {
                                return (
                                    <a className='flex flex-column mx-4 text-xl text-center uppercase colorBlue Francois_One no-underline link-hover no-underline link-hover' onClick={options.onClick}>
                                        <span>{item.label}</span>
                                        {options.active && (
                                            <span className='Guion fadein'></span>
                                        )}
                                    </a>
                                );
                            }
                        },
                        {
                            label: "REVIEWS(1)", template: (item, options) => {
                                return (
                                    <a className='flex flex-column mx-4 text-xl text-center uppercase colorBlue Francois_One no-underline link-hover' onClick={options.onClick}>
                                        <span>{item.label}</span>
                                        {options.active && (
                                            <span className='Guion fadein'></span>
                                        )}
                                    </a>
                                );
                            }
                        },
                    ]}
                    activeIndex={selectedTab}
                    onTabChange={handleTabChange}
                />
                <div className="text-center my-5 ">{contentText()}</div>
            </div>
        </div>
    );
}
