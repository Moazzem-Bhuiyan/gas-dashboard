"use client";

import { Avatar, ConfigProvider } from "antd";
import { Table } from "antd";
import { UserX } from "lucide-react";
import { Eye } from "lucide-react";

import Image from "next/image";
import userImage from "@/assets/images/user-avatar.png";
import { Tooltip } from "antd";
import { Tag } from "antd";
import { useState } from "react";
import ProfileModal from "@/components/SharedModals/ProfileModal";

// Dummy Data
const data = Array.from({ length: 4 }).map((_, inx) => ({
  key: inx + 1,
  name: "Booxos",
  userImg: userImage,
  email: "booxos@gmail.com",
  contact: "+1234567890",
  date: "11 oct 24, 11:10 PM",
  accountType: "Customer",
}));

const RecentUserTable = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  // =============== Table columns ===============
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (value, record) => (
        <div className="flex-center-start gap-x-2">
          <Image
            src={record.userImg}
            alt="User avatar"
            width={52}
            height={52}
            className="rounded-full aspect-square "
          />
          <p className="font-medium">{value}</p>
        </div>
      ),
    },
    {
 title: "Email",
      dataIndex: "email",
      render: (value) => (
        <Tooltip title={value}>
          <p className="text-sm text-gray-500">{value}</p>
        </Tooltip>
      ),
    },
    {
      title: "Contact",
      dataIndex: "contact",
      render: (value) => (
        <Tooltip title={value}>
          <p className="text-sm text-gray-500">{value}</p>
        </Tooltip>
      ),
    },
    {
      title: "Account Type",
      dataIndex: "accountType",
      render: (value) => (
        <Tag color="blue" className="rounded-full">
          {value}
        </Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="flex-center-start gap-x-2">
          <Eye
            size={18}
            strokeWidth={2}
            className="text-blue-500 cursor-pointer"
            onClick={() => setShowProfileModal(true)}
          />
          <UserX size={18} strokeWidth={2} className="text-red-500 cursor-pointer" />
        </div>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1B70A6",
          colorInfo: "#1B70A6",
        },
      }}
    >
      <div className="">
        <h1 className="text-xl font-semibold">Recent Users</h1>
        <p className="text-sm text-gray-500 mb-5">
          Here are the latest users who joined the platform.
        </p>
        <Table
          style={{ overflowX: "auto", width: "100%" }}
          columns={columns}
          dataSource={data}
          scroll={{ x: "100%" }}
          pagination={false}
        ></Table>
      </div>

      {/* Profile Modal */}
      <ProfileModal open={showProfileModal} setOpen={setShowProfileModal} />
    </ConfigProvider>
  );
};

export default RecentUserTable;
