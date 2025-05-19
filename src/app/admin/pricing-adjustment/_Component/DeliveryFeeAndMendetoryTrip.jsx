'use client';
import { Divider } from 'antd';
import EditDeliveryFeeAndMendetoryTripModal from './EditDeliveryFeeAndMendetoryTripModal';
import { useState } from 'react';
import AddNewFuelPriceModal from './AddnewpriceModal';

// components/FuelPrice.jsx
const fuelData = [
  { type: 'Standard Delivery Fee', price: 3.5, lastUpdated: 'Mar 20, 2025' },
  { type: 'Variable Delivery Fee', price: 4.0, lastUpdated: 'Mar 20, 2025' },
  { type: 'Mandatory Tip Fee ', price: 3.8, lastUpdated: 'Mar 20, 2025' },
];

const DeliveryFeeAndMendetoryTrip = () => {
  const [open, setOpen] = useState(false);
  const [openPrice, setOpenprice] = useState(false);
  return (
    <div>
      <div className="flex justify-end items-center mb-4">
        <button
          onClick={() => {
            setOpenprice(true);
          }}
          className="bg-[#409E7A] text-white border p-2 rounded-lg"
        >
          Add New Price
        </button>
      </div>
      <div className="grid grid-cols-2 gap-10 justify-center p-4">
        {fuelData.map((fuel, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4  bg-gray-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{fuel.type}</h3>
            <p className="text-sm font-medium mb-1">Current: ${fuel.price.toFixed(2)}/gal</p>
            <Divider />
            <p className="text-sm mb-3">Last Updated: {fuel.lastUpdated}</p>
            <button
              onClick={() => setOpen(true)}
              className="bg-[#5dd3a6] text-white px-3 py-1 rounded-md flex items-center gap-1transition w-full text-center  justify-center"
            >
              Edit Price
            </button>
          </div>
        ))}
        <EditDeliveryFeeAndMendetoryTripModal open={open} setOpen={setOpen} />
        <AddNewFuelPriceModal open={openPrice} setOpen={setOpenprice} />
      </div>
    </div>
  );
};

export default DeliveryFeeAndMendetoryTrip;
