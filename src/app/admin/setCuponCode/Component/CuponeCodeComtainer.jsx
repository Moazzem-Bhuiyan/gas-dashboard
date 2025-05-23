'use client';

import { Edit, Trash } from 'lucide-react';
import CreateNewCuponModal from './CreateNewCuponeCodeModal';
import { useState } from 'react';
import EditCuponModal from './EditCuponeModal';

const CouponCodeContainer = () => {
  const [open, setOpen] = useState(false);
  const [Editopen, EditsetOpen] = useState(false);

  const coupons = [
    {
      id: 1,
      code: 'SUMMER20',
      expirationDate: 'March 31, 2025',
      applicableServices: 'ALL SERVICES',
    },
    {
      id: 2,
      code: 'SUMMER20',
      expirationDate: 'March 31, 2025',
      applicableServices: 'ALL SERVICES',
    },
  ];

  // Handlers (to be replaced with actual logic)
  const handleCreateCoupon = () => {
    setOpen(true);
  };

  const handleEditPrice = (id) => {
    EditsetOpen(true);
  };

  const handleRemove = (id) => {
    console.log(`Remove clicked for coupon ${id}`);
    // Add logic to remove coupon
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Coupon Code</h2>
        <button
          onClick={handleCreateCoupon}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          + Create Coupon
        </button>
      </div>

      <div className="space-y-4">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="p-4 border border-gray-200 rounded-lg bg-gray-50 flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-medium text-gray-900">Coupon Code - {coupon.code}</p>
              <p className="text-sm text-gray-600">Expiration Date - {coupon.expirationDate}</p>
              <p className="text-sm text-gray-600">
                Applicable Services - {coupon.applicableServices}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditPrice(coupon.id)}
                className="px-3 py-1 bg-blue-200 text-blue-700 rounded hover:bg-blue-300 transition-colors flex items-center gap-5  "
              >
                <Edit size={16} strokeWidth={2} />
                Edit Price
              </button>
              <button
                onClick={() => handleRemove(coupon.id)}
                className="px-3 py-1 bg-red-200 text-red-700 rounded hover:bg-red-300 transition-colors flex items-center gap-5 "
              >
                <Trash size={16} strokeWidth={2} />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <CreateNewCuponModal open={open} setOpen={setOpen} />
      <EditCuponModal open={Editopen} setOpen={EditsetOpen} />
    </div>
  );
};

export default CouponCodeContainer;
//
