'use client';

import { Form, Input, InputNumber, Modal, Switch } from 'antd';
import { useEffect } from 'react';

export default function CityStateExpansionEditModalForm({ open, setOpen, selectedCity }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedCity && open) {
      // Convert array to comma-separated string for display
      const coveredZipCodes = Array.isArray(selectedCity.coveredzipcode)
        ? selectedCity.coveredzipcode.join(', ')
        : selectedCity.coveredzipcode?.replace(/^\$/, '') || '';

      form.setFieldsValue({
        cityName: selectedCity.name?.replace(/^\$/, '') || '',
        centralZipCode: selectedCity.centralzipcode?.replace(/^\$/, '') || '',
        radius: selectedCity.radius?.replace(/^\$/, '') || '',
        coveredZipCodes: coveredZipCodes,
        status: selectedCity.status === 'active' || selectedCity.status === 'blocked',
      });
    }
  }, [selectedCity, open, form]);

  const onsubmit = (values) => {
    // Convert comma-separated string back to array
    const updatedValues = {
      ...values,
      coveredZipCodes: values.coveredZipCodes
        ? values.coveredZipCodes.split(',').map((zip) => zip.trim())
        : [],
    };
    console.log(updatedValues);
  };

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
        <h1 className="text-center items-center text-xl font-bold">
          City/State Expansion with Distance Regulation
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
            rules={[{ required: true, message: 'Please input the covered Zip Codes!' }]}
          >
            <Input
              type="text"
              placeholder="Enter Covered Zip Codes (e.g., 12345, 67890)"
              className="w-full p-2 border rounded"
            />
          </Form.Item>

          <Form.Item
            label="Radius"
            name="radius"
            rules={[{ required: true, message: 'Please input the Radius!' }]}
          >
            <InputNumber
              type="text"
              placeholder="Enter Radius"
              className="!w-full p-2 border rounded"
            />
          </Form.Item>

          <Form.Item
            label="Service Status"
            name="status"
            valuePropName="checked"
            rules={[{ required: true, message: 'Please select the service status!' }]}
          >
            <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
          </Form.Item>

          <Form.Item>
            <button type="submit" className="w-full bg-[#5dd3a6] rounded-lg text-white p-2">
              Save
            </button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}
