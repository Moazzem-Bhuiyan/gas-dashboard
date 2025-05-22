'use client';

import { Button, Form, Input, Select } from 'antd';
import { Search } from 'lucide-react';

export default function PendingOrder() {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {};
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
            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              style={{ marginTop: '40px' }}
            >
              <div className="flex gap-12 justify-between items-center">
                <div className="flex-1">
                  {/* ==============  Driver Name ============== */}
                  <Form.Item
                    label="Driver Name"
                    name="driverName"
                    rules={[{ required: true, message: 'Please enter Driver Name' }]}
                  >
                    <Select
                      showSearch
                      style={{ width: '100%' }}
                      placeholder="Search to Select"
                      optionFilterProp="label"
                      filterOption={false}
                      // options={data?.data?.map((therapist) => ({
                      //   value: therapist._id,
                      //   label: therapist?.name,
                      // }))}
                    />
                  </Form.Item>
                </div>
                <div className="flex gap-5">
                  <Button
                    htmlType="submit"
                    size="large"
                    block
                    style={{ backgroundColor: '#5dd3a6', color: 'white' }}
                    className="!px-10  rounded !h-11"
                  >
                    Assign
                  </Button>
                  <button className=" text-white w-full px-10  rounded-lg bg-[#e03f3f] h-11">
                    Cancle
                  </button>
                </div>
              </div>
            </Form>
          </div>
          <div className="flex gap-5"></div>
        </div>
      </div>
    </div>
  );
}
