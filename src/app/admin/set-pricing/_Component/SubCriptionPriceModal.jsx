// components/SubscriptionPriceModal.js
import { Modal, Form, Select, Input, InputNumber, Button } from 'antd';
import React from 'react';

const SubscriptionPriceModal = ({ open, setOpen }) => {
    const [form] = Form.useForm();

    // Handle form submission
    const onFinish = (values) => {
        console.log('Form values:', values);
        setOpen(false); // Close the modal after submission
    };

    return (
        <div>
            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
                width={900}
                className="rounded-2xl"
                maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                maskClosable={true}
                destroyOnClose={true}
                zIndex={1000}
                title={
                    <div className="text-center font-semibold text-lg">
                        Set Subscription Price
                    </div>
                }
                style={{ top: 20 }}
            >
                <div className="p-6">
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={{
                            subscriptionType: 'Monthly',
                            price: 6.99,
                            text: 'Get access to 20 Downloads per month',
                            downloadImg: 20,
                        }}
                    >
                        {/* Subscription Type */}
                        <Form.Item
                            label={<span className="text-gray-700 font-medium">Subscription Type</span>}
                            name="subscriptionType"
                            rules={[{ required: true, message: 'Please select a subscription type' }]}
                        >
                            <Select
                                className="w-full"
                                placeholder="Select subscription type"
                                options={[
                                    { value: 'Monthly', label: 'Monthly' },
                                    { value: 'Yearly', label: 'Yearly' },
                                ]}
                            />
                        </Form.Item>

                        {/* Price */}
                        <Form.Item
                            label={<span className="text-gray-700 font-medium">Price</span>}
                            name="price"
                            rules={[{ required: true, message: 'Please enter the price' }]}
                            className='w-full'
                        >
                            <InputNumber
                                className="!w-full"
                                prefix="$"
                                min={0}
                                step={0.01}
                                precision={2}
                                formatter={(value) => `${value}`}
                                parser={(value) => value.replace(/[^0-9.]/g, '')}
                            />
                        </Form.Item>

                        {/* Text */}
                        <Form.Item
                            label={<span className="text-gray-700 font-medium">Text</span>}
                            name="text"
                            rules={[{ required: true, message: 'Please enter the description' }]}
                        >
                            <Input.TextArea
                                rows={3}
                                placeholder="Enter description"
                                className="w-full"
                            />
                        </Form.Item>

                        {/* Download IMG */}
                        <Form.Item
                            label={<span className="text-gray-700 font-medium">Download IMG</span>}
                            name="downloadImg"
                            rules={[{ required: true, message: 'Please enter the number of downloads' }]}
                        >
                            <InputNumber
                                className="!w-full"
                                min={0}
                                step={1}
                                precision={0}
                            />
                        </Form.Item>

                        {/* Save Button */}
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full bg-black text-white hover:bg-gray-800 transition"
                            >
                                SAVE
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};

export default SubscriptionPriceModal;