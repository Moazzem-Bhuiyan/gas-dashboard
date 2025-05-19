"use client";

import { Input, Table, Tag, Button } from "antd";
import { Tooltip } from "antd";
import { ConfigProvider } from "antd";
import { Search, Eye, Trash2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Data from the image
const data = [
  {
    key: 1,
    order_id: "2244",
    customer_name: "Eleanor Pena",
    fuel: "Premium",
    quantity: 15,
    address: "789 Pine Rd",
    status: "Assigned",
    driver: "Eleanor Pena",
    scheduled_time: "March 22, 3:00 PM",
  },
  {
    key: 2,
    order_id: "2244",
    customer_name: "Eleanor Pena",
    fuel: "Premium",
    quantity: 15,
    address: "789 Pine Rd",
    status: "Pending",
    driver: "Unassigned",
    scheduled_time: "March 22, 3:00 PM",
  },
  {
    key: 3,
    order_id: "2244",
    customer_name: "Eleanor Pena",
    fuel: "Premium",
    quantity: 15,
    address: "789 Pine Rd",
    status: "Refund Requested",
    driver: "Unassigned",
    scheduled_time: "March 22, 3:00 PM",
  },
  {
    key: 4,
    order_id: "2244",
    customer_name: "Eleanor Pena",
    fuel: "Premium",
    quantity: 15,
    address: "789 Pine Rd",
    status: "Completed",
    driver: "Eleanor Pena",
    scheduled_time: "March 22, 3:00 PM",
  },
  {
    key: 5,
    order_id: "2244",
    customer_name: "Eleanor Pena",
    fuel: "Premium",
    quantity: 15,
    address: "789 Pine Rd",
    status: "Completed",
    driver: "Eleanor Pena",
    scheduled_time: "March 22, 3:00 PM",
  },
  {
    key: 6,
    order_id: "2244",
    customer_name: "Eleanor Pena",
    fuel: "Premium",
    quantity: 15,
    address: "789 Pine Rd",
    status: "Pending",
    driver: "Unassigned",
    scheduled_time: "March 22, 3:00 PM",
  },
  {
    key: 7,
    order_id: "2244",
    customer_name: "Eleanor Pena",
    fuel: "Premium",
    quantity: 15,
    address: "789 Pine Rd",
    status: "Pending",
    driver: "Unassigned",
    scheduled_time: "March 22, 3:00 PM",
  },
  {
    key: 8,
    order_id: "2244",
    customer_name: "Eleanor Pena",
    fuel: "Premium",
    quantity: 15,
    address: "789 Pine Rd",
    status: "Refund Requested",
    driver: "Unassigned",
    scheduled_time: "March 22, 3:00 PM",
  },
  {
    key: 9,
    order_id: "2244",
    customer_name: "Eleanor Pena",
    fuel: "Premium",
    quantity: 15,
    address: "789 Pine Rd",
    status: "Refund Requested",
    driver: "Unassigned",
    scheduled_time: "March 22, 3:00 PM",
  },
  {
    key: 10,
    order_id: "2244",
    customer_name: "Eleanor Pena",
    fuel: "Premium",
    quantity: 15,
    address: "789 Pine Rd",
    status: "Refund Requested",
    driver: "Unassigned",
    scheduled_time: "March 22, 3:00 PM",
  },
];

export default function FuelOrderTable() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  // Filter data based on search text
  const filteredData = data.filter(
    (item) =>
      item.customer_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.order_id.toLowerCase().includes(searchText.toLowerCase())
  );

  // Function to handle navigation based on status
  const handleViewDetails = (status) => {
    switch (status) {
      case "Completed":
        router.push("/admin/orders/completeOrder");
        break;
      case "Pending":
        router.push("/admin/orders/pendingOrder");
        break;
      case "Assigned":
        router.push("/admin/orders/assignedOrder");
        break;
      case "Refund Requested":
        router.push("/admin/orders/refundOrder");
        break;
      default:
        break;
    }
  };

  // Table columns
  const columns = [
    {
      title: "Order ID",
      dataIndex: "order_id",
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: "Customer",
      dataIndex: "customer_name",
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: "Fuel",
      dataIndex: "fuel",
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value) => {
        let color;
        switch (value) {
          case "Pending":
            color = "orange";
            break;
          case "Completed":
            color = "green";
            break;
          case "Assigned":
            color = "blue";
            break;
          case "Refund Requested":
            color = "purple";
            break;
          default:
            color = "gray";
        }
        return (
          <Tag color={color} className="font-medium">
            {value}
          </Tag>
        );
      },
    },
    {
      title: "Driver",
      dataIndex: "driver",
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: "Scheduled Time",
      dataIndex: "scheduled_time",
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: "Action",
      render: (_, record) => (
        <div className="flex items-center gap-x-3">
          <Tooltip title="Show Details">
            <button onClick={() => handleViewDetails(record.status)}>
              <Eye color="#1B70A6" size={20} />
            </button>
          </Tooltip>
          <Tooltip title="Delete">
            <button>
              <Trash2 color="#FF4D4F" size={20} />
            </button>
          </Tooltip>
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
      <div className="flex mb-4 ml-auto w-1/2 gap-x-5">
        <Input
          placeholder="Search by name or order ID"
          prefix={<Search className="mr-2 text-gray-500" size={20} />}
          className="h-11 rounded-lg border text-base"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-4">
          Total Orders: {filteredData.length}
        </p>
      </div>

      <Table
        style={{ overflowX: "auto" }}
        columns={columns}
        dataSource={filteredData}
        scroll={{ x: "100%" }}
        className="rounded-lg shadow-sm"
        rowClassName="hover:bg-gray-50"
      />
    </ConfigProvider>
  );
}