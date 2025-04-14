"use client";
import { Form, Input, Modal, Select } from "antd";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AddArticleModal = ({ open, setOpen }) => {
    const [aboutMe, setAboutMe] = useState("");

    const onsubmit = (values) => {
        console.log(values);
    };

    // Predefined article categories
    const articleCategories = [
        { label: "Technology", value: "technology" },
        { label: "Lifestyle", value: "lifestyle" },
        { label: "Travel", value: "travel" },
        { label: "Food", value: "food" },
        { label: "Health", value: "health" },
        { label: "Education", value: "education" },
    ];

    return (
        <div>
            <Modal
                centered
                open={open}
                setOpen={setOpen}
                className="w-full"
                bodyStyle={{ padding: 0 }}
                footer={null}
                onCancel={() => {
                    setOpen(false);
                }}
                width={1000}
            >
                <Form
                    onFinish={onsubmit}
                    layout="vertical"
                    className="w-full p-6"
                >
                    <h1 className="text-2xl font-bold text-center mb-6">Add Article</h1>
                    <div className="flex flex-col gap-4">
                        {/* Article Title */}
                        <Form.Item
                            label="Article Title"
                            name="title"
                            rules={[{ required: true, message: "Please enter article title" }]}
                        >
                            <Input
                                type="text"
                                className="border rounded-md p-2 w-full"
                                placeholder="Enter article title"
                            />
                        </Form.Item>

                        {/* Article Category */}
                        <Form.Item
                            label="Article Category"
                            name="category"
                            rules={[{ required: true, message: "Please select a category" }]}
                        >
                            <Select
                                placeholder="Select a category"
                                className="w-full"
                                options={articleCategories}
                            />
                        </Form.Item>

                        {/* Article Content */}
                        <Form.Item
                            label="Article Content"
                            name="content"
                            rules={[{ required: true, message: "Please enter article content" }]}
                        >
                            <JoditEditor
                                value={aboutMe}
                                config={{
                                    height: 500,
                                    placeholder: "Note: Enter details about you.",
                                    uploader: {
                                        insertImageAsBase64URI: true,
                                    },
                                }}
                                onBlur={(content) => setAboutMe(content)}
                            />
                        </Form.Item>

                        {/* Article Image */}
                        <Form.Item
                            label="Article Image"
                            name="image"
                            rules={[{ required: true, message: "Please upload article image" }]}
                        >
                            <input
                                type="file"
                                className="border rounded-md p-2 w-full"
                                placeholder="Upload article image"
                            />
                        </Form.Item>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md p-2 px-6 hover:bg-blue-600 transition-all"
                        >
                            Add Article
                        </button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

export default AddArticleModal;