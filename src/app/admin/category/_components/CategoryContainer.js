"use client";

import { Button, Pagination } from "antd";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import categoryImg from "@/assets/images/categoryImg.png";
import Image from "next/image";
import CustomConfirm from "@/components/CustomConfirm/CustomConfirm";
import CreateCategoryModal from "./CreateCategoryModal";
import EditCategoryModal from "./EditCategoryModal";

// Dummy table data
const data = Array.from({ length: 7 }).map((_, inx) => ({
  key: inx + 1,
  name: "Business Service",
  img: categoryImg,
}));

export default function CategoryContainer() {
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        size="large"
        icon={<PlusCircle size={20} />}
        iconPosition="start"
        className="!w-full !py-6"
        onClick={() => setShowCreateCategoryModal(true)}
      >
        Create Category
      </Button>

      {/* Categories */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7 my-10">
        {data.map((category) => (
          <div
            key={category.key}
            className="p-4 rounded-xl flex flex-col items-center shadow border border-primary-blue/25"
          >
            <Image
              src={category.img}
              alt={`Image of category ${category.name}`}
              className="rounded"
            />

            <h4 className="text-2xl font-semibold mt-2 mb-5">
              {category.name}
            </h4>

            <div className="flex-center gap-x-3 w-full">
              <CustomConfirm
                title="Delete Category"
                description="Are you sure to delete this category?"
              >
                <Button className="w-full !bg-danger !text-white">
                  Delete
                </Button>
              </CustomConfirm>

              <Button
                type="primary"
                className="w-full"
                onClick={() => setShowEditCategoryModal(true)}
              >
                Edit
              </Button>
            </div>
          </div>
        ))}
      </section>

      <div className="my-10 max-w-max ml-auto">
        <Pagination style={{ fontSize: "1.2rem" }} />
      </div>

      {/* Create Category Modal */}
      <CreateCategoryModal
        open={showCreateCategoryModal}
        setOpen={setShowCreateCategoryModal}
      />

      {/* Edit category modal */}
      <EditCategoryModal
        open={showEditCategoryModal}
        setOpen={setShowEditCategoryModal}
      />
    </div>
  );
}
