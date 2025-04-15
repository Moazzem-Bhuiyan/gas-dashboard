"use client";
import { Form, Input, Modal, TimePicker } from "antd";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export default function EditBusinessHourModalForm({ open, setOpen }) {
    const dateFormat = 'YYYY/MM/DD';
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
      <h1>
        Edit Business Hour 
      </h1>
      <Form layout="vertical" className="w-full">
        <Form.Item label="User Type" name="userType">
          <Input
            type="text"
            className="w-full border rounded-md p-2"
          />
        </Form.Item>
        <Form.Item label="Date" name="businessDate">
        <RangePicker
      format={dateFormat}
      className="!w-full"
    />
        </Form.Item>
        <Form.Item label="Time" name="businessTime">
        <TimePicker.RangePicker className="!w-full"/>
        </Form.Item>
        <button className="bg-[#5dd3a6] text-white px-4 py-2 rounded-md w-full">Save</button>

      </Form>
   </div>
    </Modal>
  );
}
