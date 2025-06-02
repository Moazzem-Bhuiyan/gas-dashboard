'use client';

import { Button, Modal } from 'antd';
import React from 'react';
import { Form, Input, InputNumber, Select } from 'antd';

export default function CreateSubscriptionPlanModal({ open, setOpen }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  return (
    <Modal
      centered
      open={open}
      setOpen={setOpen}
      footer={null}
      title="Create Subscription Plan"
      onCancel={() => {
        setOpen(false);
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          monthlyPrice: 999,
          freeDeliveryLimit: 1,
          coverVehicleLimit: 1,
          discount: 'No',
          scheduledDelivery: 'No',
          fuelPriceTracking: 'No',
          emergencyFuelService: 'No',
          freeSubscription: 'No',
          exclusivePromotions: 'No',
        }}
      >
        {/* Title */}
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Input placeholder="Enter" />
        </Form.Item>

        {/* Monthly Price */}
        <Form.Item label="Monthly Price" name="monthlyPrice">
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>

        {/* Free Delivery Limit */}
        <Form.Item label="Free Delivery Limit" name="freeDeliveryLimit">
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>

        {/* Cover Vehicle Limit */}
        <Form.Item label="Cover Vehicle Limit" name="coverVehicleLimit">
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>

        {/* 50% off delivery fees after waived trips */}
        <Form.Item label="50% off delivery fees after waived trips" name="discount">
          <Select>
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>

        {/* Scheduled Delivery */}
        <Form.Item label="Scheduled Delivery" name="scheduledDelivery">
          <Select>
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>

        {/* Fuel Price Tracking Alerts */}
        <Form.Item label="Fuel Price tracking alerts" name="fuelPriceTracking">
          <Select>
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>

        {/* No Extra Charge for Emergency Fuel Service */}
        <Form.Item
          label="No Extra charge for Emergency fuel service Limit"
          name="emergencyFuelService"
        >
          <Select>
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>

        {/* Free Subscription for One Additional Family Member */}
        <Form.Item
          label="Free subscription for one additional family member or household vehicle"
          name="freeSubscription"
        >
          <Select>
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>

        {/* Exclusive Promotions and Early Access */}
        <Form.Item
          label="Exclusive promotions and early access to new features"
          name="exclusivePromotions"
        >
          <Select>
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
