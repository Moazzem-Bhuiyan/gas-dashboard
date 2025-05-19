'use client';

import { Input } from 'antd';
import { Search } from 'lucide-react';

export default function PendingOrder() {
  return (
    <div className="p-6 max-w-full mx-auto bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Order Information</h2>
      </div>
      <div className="space-y-2">
        <p>Order ID: #2244</p>
        <p>Order Date: March 22, 2025, 04:16 PM +06</p>
        <p>Scheduled Time: March 22, 3:00 PM</p>
        <p>Status: Pending</p>
      </div>
      <h2 className="text-lg font-semibold mt-4">Customer Details</h2>
      <div className="space-y-2">
        <p>Customer Name: Eleanor Pena</p>
        <p>Phone: +1-555-123-4567</p>
        <p>Email: elanor.pena@example.com</p>
        <p>Address: 789 Pine Rd</p>
      </div>
      <h2 className="text-lg font-semibold mt-4">Fuel Details</h2>
      <div className="space-y-2">
        <p>Fuel Type: Premium</p>
        <p>Quantity: 15 gallons</p>
        <p>Price: $50.00</p>
      </div>
      <h2 className="text-lg font-semibold mt-4">Driver Information</h2>
      <div className="space-y-2">
        <h1>Search Driver</h1>
        <div className="flex items-center gap-5">
          <div className=" w-1/2">
            <Input
              placeholder="Search by name or email"
              prefix={<Search className="mr-2 text-black" size={20} />}
              className="h-11 !border !rounded-lg !text-base"
            />
          </div>
          <button className=" text-white px-4  rounded bg-[#409E7A] h-11">Assign Driver</button>
        </div>
      </div>
    </div>
  );
}
