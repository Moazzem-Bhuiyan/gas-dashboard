'use client';

import { useCreateCityExpensionMutation } from '@/redux/api/cityexpensionApi';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { toast } from 'sonner';

export default function CityStateExpansionAddModalForm({ open, setOpen }) {
  const [form] = Form.useForm();
  const [addcity, { isLoading }] = useCreateCityExpensionMutation();

  const onsubmit = async (values) => {
    try {
      const updatedValues = {
        ...values,
        coveredZipCodes: values.coveredZipCodes
          ? values.coveredZipCodes.split(',').map((zip) => zip.trim())
          : [],
        status: 'active',
      };
      const res = await addcity(updatedValues).unwrap();
      if (res.success) {
        toast.success('City added successfully');
        setOpen(false);
        form.resetFields();
      }
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to add city');
    }
  };

  return (
    <Modal
      centered
      open={open}
      footer={null}
      onCancel={() => {
        setOpen(false);
        form.resetFields();
      }}
      width={600}
      className="rounded-lg"
    >
      <div>
        <h1 className="text-center text-xl font-bold my-10">
          Add New City/State Expansion with Distance Regulation
        </h1>

        <Form form={form} layout="vertical" className="mt-5" onFinish={onsubmit}>
          <Form.Item
            label="City Name"
            name="cityName"
            rules={[{ required: true, message: 'Please input the City name!' }]}
          >
            <Input
              type="text"
              placeholder="Enter City name"
              className="w-full p-2 border rounded"
            />
          </Form.Item>

          <Form.Item
            label="Central Zip Code"
            name="centralZipCode"
            rules={[{ required: true, message: 'Please input the Central Zip Code!' }]}
          >
            <InputNumber
              type="number"
              placeholder="Enter Central Zip Code"
              className="!w-full p-2 border rounded"
            />
          </Form.Item>

          <Form.Item
            label="Covered Zip Codes"
            name="coveredZipCodes"
            rules={[
              { required: true, message: 'Please input the covered Zip Codes!' },
              {
                validator: (_, value) => {
                  if (!value) return Promise.resolve();
                  const zipCodes = Array.isArray(value)
                    ? value
                    : value.split(',').map((zip) => zip.trim());
                  const isValid = zipCodes.every((zip) => /^\d{5}$/.test(zip));
                  if (isValid) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('Please enter valid 5-digit zip codes (e.g., 90001,90002,90003)')
                  );
                },
              },
            ]}
            getValueFromEvent={(e) => e.target.value.split(',').map((zip) => zip.trim())}
            normalize={(value) => (Array.isArray(value) ? value.join(',') : value)}
          >
            <Input
              placeholder="Enter Covered Zip Codes (e.g., 90001,90002,90003,90004)"
              className="w-full p-2 border rounded"
            />
          </Form.Item>

          <Form.Item
            label="Radius"
            name="radius"
            rules={[{ required: true, message: 'Please input the Radius!' }]}
          >
            <InputNumber
              type="number"
              placeholder="Enter Radius"
              className="!w-full p-2 border rounded"
            />
          </Form.Item>
          {/* 
          <Form.Item
            label="Service Status"
            name="status"
            valuePropName="checked"
            rules={[{ required: true, message: 'Please select the service status!' }]}
          >
            <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
          </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#5dd3a6]"
              loading={isLoading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}
