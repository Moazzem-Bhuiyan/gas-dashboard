"use client";

import { Form, Input, InputNumber, Modal, Switch } from "antd";

export default function CityStateExpansionAddModalForm({ open, setOpen }) {
    const onsubmit = (values) => {
        console.log(values);
     
    }
  return (
    <Modal
      centered
      open={open}
      setOpen={setOpen}
      footer={null}
      onCancel={() => {
        setOpen(false);
      }}
      width={600}
      className="rounded-lg"
    >

        <div>
            <h1 className="text-center items-center text-xl font-bold my-10">
         Add New City/State Expansion with Distance Regulation
            </h1>

            <Form layout="vertical" className="mt-5" onFinish={onsubmit}> 

                <Form.Item label="City Name" name="cityName" rules={[{ required: true, message: 'Please input the City name!' }]}>
                    <Input type="text" placeholder="Enter City name" className="w-full p-2 border rounded" />
                </Form.Item>

                <Form.Item label="Centrel Zip Code" name="centrelZip" rules={[{ required: true, message: 'Please input the Centrel Zip Code!' }]}>
                    <InputNumber type="number"  placeholder="Enter Centrel Zip Code " className="!w-full p-2 border rounded" />
                </Form.Item>
                <Form.Item label="Covered Zip Code" name="coveredZip" rules={[{ required: true, message: 'Please input the covered Zip Code!' }]}>
                    <InputNumber type="number"  placeholder="Enter Covered Zip Code " className="!w-full p-2 border rounded" />
                </Form.Item>
                <Form.Item label="Radius" name="radius" rules={[{ required: true, message: 'Please input the Radius!' }]}>
                    <InputNumber type="text"  placeholder="Enter Radius " className="!w-full p-2 border rounded" />
                </Form.Item>
                <Form.Item>
                    <button type="submit" className="w-full bg-black rounded-lg text-white p-2 ">Save</button>
                </Form.Item>

            </Form>

        </div>


      
    </Modal>
  );
}
