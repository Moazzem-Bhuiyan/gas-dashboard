import { Modal, Form, Select, Input, InputNumber, Button, DatePicker } from 'antd';

const CreateCouponeModal = ({ open, setOpen }) => {
    const [form] = Form.useForm();
    // Handle form submission
    const onFinish = (values) => {
        console.log('Form values:', values);
        setOpen(false);
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
                        Set Couaone code
                    </div>
                }
                style={{ top: 20 }}
            >

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <div className="flex-1">
                        {/*  Name */}
                        <Form.Item
                            label="Coupone Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter Coupone name",
                                },
                            ]}
                            style={{ width: "100%" }}
                        >
                            <Input size="large" placeholder="Enter coupone Name" />
                        </Form.Item>
                        {/* Gellary  Name */}
                        <Form.Item
                            label="Coupone Code"
                            name="code"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter Coupone code",
                                },
                            ]}
                            style={{ width: "100%" }}
                        >
                            <Input size="large" placeholder="Enter Coupone code " />
                        </Form.Item>

                        <Form.Item
                            label="Expiration Date"
                            name="date"
                            rules={[{ required: true, message: "Please select a date" }]}
                        >
                            <DatePicker
                                style={{ width: "100%" }}
                                size="large"
                            // disabledDate={(current) =>
                            //     current && current < moment().startOf("day")
                            // }
                            />
                        </Form.Item>
                        {/* Price */}
                        <Form.Item
                            label={<span className="text-gray-700 font-medium">Discount</span>}
                            name="discount"
                            rules={[{ required: true, message: 'Please enter the discount ' }]}
                            className='w-full'
                        >
                            <InputNumber
                                className="!w-full"
                                suffix="%"
                                min={0}
                                step={0.01}
                                precision={2}
                                formatter={(value) => `${value}`}
                                parser={(value) => value.replace(/[^0-9.]/g, '')}
                            />
                        </Form.Item>

                    </div>

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



            </Modal>
        </div>
    )
}

export default CreateCouponeModal
