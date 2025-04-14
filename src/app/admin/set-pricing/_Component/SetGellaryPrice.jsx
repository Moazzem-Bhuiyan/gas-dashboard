"use client";
import { Button } from "antd";

import { useState } from "react";
import SetGellaryPriceModal from "./SetGellaryPriceModal";


// components/SetSubscriptionPrice.js
const SetGellaryPrice = () => {
    const [GellaryPriceModalopen, setGellaryPriceModal] = useState(false);

    const data = {
        galleryPrice: "69.99",
        perPhotoPrice: "6.99",
    };

    // Initialize data as null to simulate no data
    // const data = null;
    return (
        <div className="border-t-4 border-orange-400 pt-4 mb-6">
            {/* Section Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Set Gellary Price
            </h2>
            {/* Description */}
            <p className="text-gray-700 mb-4">
                Set the price for your gallery subscription and per photo.
            </p>

            {/* Price Information and Buttons */}
            {data ? (
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-700">
                            <span className="font-semibold">Pay Monthly:</span> $
                            {data.galleryPrice}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Each photo:</span> $
                            {data.perPhotoPrice}
                        </p>

                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-2">
                        <button onClick={() => setGellaryPriceModal(true)} className="flex items-center px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition">
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z"
                                />
                            </svg>
                            Edit Price
                        </button>
                        <button className="flex items-center px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition">
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4M3 7h18"
                                />
                            </svg>
                            Remove
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500"><Button onClick={() => setGellaryPriceModal(true)}>Set Gellary Price</Button></p>
            )}

            <SetGellaryPriceModal open={GellaryPriceModalopen} setOpen={setGellaryPriceModal} />
        </div>
    );
};

export default SetGellaryPrice;