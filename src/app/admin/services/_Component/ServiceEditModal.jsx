"use client";

import { Form, Input, InputNumber, Modal, Switch } from "antd";

export default function ServiceEditModalForm({ open, setOpen }) {
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
    >

        <div>
            <h1 className="text-center items-center text-xl font-bold">
               Edit Service Details
            </h1>

            <Form layout="vertical" className="mt-5" onFinish={onsubmit}> 

                <Form.Item label="Service Name" name="serviceName" rules={[{ required: true, message: 'Please input the service name!' }]}>
                    <Input type="text" placeholder="Enter service name" className="w-full p-2 border rounded" />
                </Form.Item>

                <Form.Item label="Service Price" name="price" rules={[{ required: true, message: 'Please input the service price!' }]}>
                    <InputNumber type="text" placeholder="Enter service price" className="!w-full p-2 border rounded" />
                </Form.Item>
                <Form.Item label="Inactive Service" valuePropName="checked">
              <Switch />
              </Form.Item>
                <Form.Item>
                    <button type="submit" className="w-full bg-black rounded-lg text-white p-2 ">Save</button>
                </Form.Item>

            </Form>

        </div>


      
    </Modal>
  );
}
