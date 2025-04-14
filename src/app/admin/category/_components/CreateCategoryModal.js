"use client";

import FormWrapper from "@/components/Form/FormWrapper";
import UInput from "@/components/Form/UInput";
import { Button, Modal } from "antd";
import { Plus } from "lucide-react";

export default function CreateCategoryModal({ open, setOpen }) {
  return (
    <Modal
      centered
      open={open}
      setOpen={setOpen}
      footer={null}
      onCancel={() => {
        setOpen(false);
      }}
      title="Create Category"
    >
      <FormWrapper>
        <UInput
          type="text"
          name="name"
          label="Category Name"
          required={true}
          placeholder="Enter category name"
        />

        <div className="mb-6 flex-center-between">
          <div>
            <h4 className="text-sm font-medium">Media</h4>
            <p className="mt-1 mb-3">Add category banner image</p>
          </div>

          <Button type="primary" htmlType="button" icon={<Plus size={20} />}>
            Add media
          </Button>
        </div>

        <Button type="primary" size="large" className="w-full">
          Submit
        </Button>
      </FormWrapper>
    </Modal>
  );
}
