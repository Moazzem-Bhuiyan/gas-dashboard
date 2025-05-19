'use client';

import { RiCloseLargeLine } from 'react-icons/ri';
import { Form, Button, Modal, Divider, InputNumber, Select } from 'antd';

const { Option } = Select;

const AddNewFuelPriceModal = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  // Sample zipcode data (you can replace this with your actual zipcode data)
  const zipCodes = [
    { value: '10001', label: '10001' },
    { value: '10002', label: '10002' },
    { value: '10003', label: '10003' },
    // Add more zipcodes as needed
  ];

  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{ minWidth: '900px', position: 'relative' }}
    >
      <div
        className="absolute right-0 top-0 h-12 w-12 cursor-pointer rounded-bl-3xl "
        onClick={() => setOpen(false)}
      >
        <RiCloseLargeLine size={18} color="black" className="absolute left-1/3 top-1/3" />
      </div>
      <h1 className="text-2xl font-semibold text-center">Add New Price</h1>
      <Divider />
      <div>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}
        >
          <Form.Item
            label="Zipcode/City"
            name="zipcode"
            rules={[{ required: true, message: 'Please select a zipcode' }]}
          >
            <Select
              className="h-12 !w-full"
              placeholder="Select a zipcode"
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              {zipCodes.map((zip) => (
                <Option key={zip.value} value={zip.value}>
                  {zip.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Current Price You can Edit this Price"
            name="currentPrice"
            rules={[{ required: true, message: 'Please enter price' }]}
          >
            <InputNumber className="h-12 !w-full" placeholder="Enter New price" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%', height: '40px' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AddNewFuelPriceModal;
