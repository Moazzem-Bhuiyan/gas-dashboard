"use client";

import { RiCloseLargeLine } from "react-icons/ri";
import { Form, Input, Button, Modal, Divider } from "antd";

const AddCheckListQuestionModal = ({ open, setOpen }) => {
     const [form] = Form.useForm();
    

     const handleSubmit = (values) => {
     console.log(values)
     };
     return (
          <Modal
               open={open}
               footer={null}
               centered={true}
               onCancel={() => setOpen(false)}
               closeIcon={false}
               style={{
                    minWidth: "900px",
                    position: "relative",
               }}>
               <div
                    className="absolute right-0 top-0 h-12 w-12 cursor-pointer rounded-bl-3xl "
                    onClick={() => setOpen(false)}>
                    <RiCloseLargeLine
                         size={18}
                         color="black"
                         className="absolute left-1/3 top-1/3"
                    />
               </div>
               <h1 className="text-2xl font-semibold text-center">
                    Add New Question
               </h1>
               <Divider />
               <div>
                    <Form
                         form={form}
                         layout="vertical"
                         onFinish={handleSubmit}
                         style={{ maxWidth: "800px", margin: "0 auto", padding: "0 16px" }}
                    >
                         <Form.Item
                              label="Question"
                              name="question"
                              rules={[{ required: true, message: "Please enter Question" }]}
                         >
                              <Input className="h-12" placeholder="Enter your question" />
                         </Form.Item>
                         <Form.Item>
                              <Button
                                   type="primary"
                                   htmlType="submit"
                                   style={{ width: "100%", height: "40px", }}
                              >
                                   Submit
                              </Button>
                         </Form.Item>
                    </Form>
               </div>
          </Modal>
     );
};

export default AddCheckListQuestionModal;
