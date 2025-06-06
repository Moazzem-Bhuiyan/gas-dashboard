'use client';

import { Input, Table, Tag } from 'antd';
import { Tooltip } from 'antd';
import { ConfigProvider } from 'antd';
import { Search, Eye, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGetAllOrdersQuery } from '@/redux/api/orderApi';

export default function FuelOrderTable({ orderType }) {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  // get all orders from the API
  const { data: orders, isLoading } = useGetAllOrdersQuery({
    limit: 10,
    page: 1,
    searchText: searchText,
    orderType,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // map the orders to the table data
  const tableData = orders?.data?.data?.map((order, inx) => ({
    order_id: inx + 1,
    status: order.orderStatus,
    location: order.location,
    quantity: order.amount,
    price: order.price,
    customer_name: order?.userId?.fullname,
    driver: order.driverId?.fullname,
    fuel: order.fuelType,
  }));

  // Function to handle navigation based on status
  const handleViewDetails = (status) => {
    switch (status) {
      case 'Completed':
        router.push('/admin/orders/completeOrder');
        break;
      case 'Pending':
        router.push('/admin/orders/pendingOrder');
        break;
      case 'Assigned':
        router.push('/admin/orders/assignedOrder');
        break;
      case 'Refund Requested':
        router.push('/admin/orders/refundOrder');
        break;
      default:
        break;
    }
  };

  // Table columns
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'order_id',
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: 'Customer',
      dataIndex: 'customer_name',
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: 'Fuel',
      dataIndex: 'fuel',
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      render: (value) => <span className="text-gray-700">{value}</span>,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: (value) => <span className="text-gray-700">{value || 'N/A'}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => {
        let color;
        switch (value) {
          case 'Pending':
            color = 'orange';
            break;
          case 'Completed':
            color = 'green';
            break;
          case 'Assigned':
            color = 'blue';
            break;
          case 'Refund Requested':
            color = 'purple';
            break;
          default:
            color = 'gray';
        }
        return (
          <Tag color={color} className="font-medium">
            {value}
          </Tag>
        );
      },
    },
    {
      title: 'Driver',
      dataIndex: 'driver',
      render: (value) => <span className="text-gray-700">{value || 'N/A'}</span>,
    },
    {
      title: 'Scheduled Time',
      dataIndex: 'scheduled_time',
      render: (value) => <span className="text-gray-700">{value || 'N/A'}</span>,
    },
    {
      title: 'Action',
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
          colorPrimary: '#1B70A6',
          colorInfo: '#1B70A6',
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
        <p className="text-sm text-gray-500 mb-4">Total Orders: {orders.length}</p>
      </div>

      <Table
        style={{ overflowX: 'auto' }}
        columns={columns}
        dataSource={tableData}
        scroll={{ x: '100%' }}
        className="rounded-lg shadow-sm"
        rowClassName="hover:bg-gray-50"
      />
    </ConfigProvider>
  );
}
