"use client";
import { Button } from "antd";
import { useState } from "react";
import SubCriptionPriceModal from "./SubCriptionPriceModal";

// components/SetSubscriptionPrice.js
const CreateCupone = () => {
    const [SubCriptionPriceModalopen, setSubCriptionPriceModal] = useState(false);

    const data = {
        couponeCode: "ABC123",
        perPhotoPrice: "6.99",
    };

    // Initialize data as null to simulate no data
    // const data = null;
    return (
        <div className="border-t-4 border-orange-400 pt-4 mb-6">
            {/* Section Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Cupone code
            </h2>

            {/* Price Information and Buttons */}
            {data ? (
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-700">
                            <span className="font-semibold">Coupone Code : </span>
                            {data.couponeCode}
                        </p>
                        <p>
                            <span className="font-semibold">Expiration Date : </span>
                            {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-2">
                        <button onClick={() => setSubCriptionPriceModal(true)} className="flex items-center px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition">
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
                <p className="text-gray-500"><Button onClick={() => setSubCriptionPriceModal(true)}>Set cupone code</Button></p>
            )}

            <SubCriptionPriceModal open={SubCriptionPriceModalopen} setOpen={setSubCriptionPriceModal} />
        </div>
    );
};

export default CreateCupone;